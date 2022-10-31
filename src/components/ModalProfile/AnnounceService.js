import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import AnnounceIcon from '@mui/icons-material/CampaignRounded'
import AuthContext from '../../services/contexts/auth'
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import { Button, notification } from 'antd';
import api from '../../api';
import axios from 'axios';

const AnnounceService = (props) => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const [selectValue, setSelectValue] = useState('');
  const [services, setServices] = useState([]);
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [price, setPrice] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [workerServices, setWorkerServices] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        setCities(response.data);
      });
  }, [selectedUf]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, [selectedUf]);

  function handleSelectUf(event) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event) {
    const city = event.target.value;
    setSelectedCity(city)
  }

  async function getWorkerServices() {
    const idPerson = user.idperson;
    try {
      const response = await api.get(`/workers/${idPerson}`);
      setWorkerServices(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWorkerServices()
  }, [])

  const registerWorker = async () => {
    const selectedRepeatedService = workerServices
      .findIndex((worker) => {
        return worker.idservice == selectValue
      }) !== -1;

    if (selectedRepeatedService) {
      return notification["error"]({
        message: 'Você já tem esse serviço cadastrado!',
        duration: 2,
        placement: 'topRight',
      })
    }

    const allFieldsFilled = (selectValue, description, phoneNumber, price) !== ''
      && selectValue !== 'Serviços'
      && (selectedCity, selectedUf) !== '0'

    if (!allFieldsFilled) {
      return notification["error"]({
        message: 'Preencha todos os campos',
        duration: 2,
        placement: 'topRight',
      })
    }

    try {
      await api.post('/registerWorker', { idPerson: user.idperson, idService: selectValue, firstNameWorker: user.firstname, lastNameWorker: user.lastname, descriptionService: description, phoneNumber: phoneNumber, priceService: price, city: selectedCity, localization: selectedUf, whatsapp: whatsapp });
      openNotificationSuccess()
      setShow(false)
      props.getServices()
    }
    catch (error) {
      console.log(error);
    }
  }

  const openNotificationSuccess = () => {
    notification["success"]({
      message: 'Serviço anunciado',
      duration: 2,
      placement: 'top',
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/services');
      setServices(response.data)
    }
    fetchData()
      .catch(console.error);
  }, [])

  return (
    <div>
      <p id='options-text' onClick={handleShow}><AnnounceIcon sx={{ fontSize: 22, marginRight: 0.5 }} /> Anunciar serviço</p>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Anunciar serviço</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Selecione o serviço que você deseja anunciar</Form.Label>

              <Form.Select
                autoFocus
                value={selectValue}
                onChange={e => setSelectValue(e.target.value)}
              >
                <option>Serviços</option>
                {
                  services.map((item) => {
                    return (
                      <option key={item.idservice} value={item.idservice}>{item.titleservice}</option>
                    )
                  })
                }
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descreva mais sobre os serviços que você faz!</Form.Label>

              <Form.Control
                as="textarea"
                rows={6}
                maxLength={300}
                onChange={(event) => setDescription(event.target.value)}
                id='description'
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <div>

                <TelefoneBrasileiroInput
                  className='containerInputEdit-tel'
                  type={"tel"}
                  placeholder='Telefone com DDD'
                  maxLength={45}
                  id='phoneNumber'
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  value={phoneNumber}
                  temDDD
                  separaDDD
                />
              </div>
            </Form.Group>

            <Row className="g-2 mb-3 row-localization">
              <Form.Label id='localization-label'>Localização em que você atua</Form.Label>
              <Col md={3}>
                <Form.Select name="uf" id="uf" onChange={handleSelectUf}>
                  <option value="0">Estado</option>
                  {ufs.map((uf) => (
                    <option key={uf.id} value={uf.sigla}>{uf.sigla}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col md>

                <Form.Select
                  name="City"
                  id="City"
                  value={selectedCity}
                  onChange={handleSelectCity}
                >
                  <option value="0">Cidade</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.nome}>
                      {city.nome}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Form.Label>Preço médio dos seus serviços</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder='38.99'
                maxLength={10}
                onChange={(event) => setPrice(event.target.value)}
                id='price'
              />
            </InputGroup>

            <Form.Group className="mb-3">
              <Form.Label>Opcional: adicione o seu link para o WhatsApp personalizado <a id='link-whatsapp' href='https://www.convertte.com.br/gerador-link-whatsapp/' target="_blank" rel="noopener noreferrer">(clique aqui para gerar o link)</a></Form.Label>

              <Form.Control
                placeholder="Cole o link gerado aqui"
                maxLength={100}
                onChange={(event) => setWhatsapp(event.target.value)}
                id='whatsapp'
              />
            </Form.Group>
          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button id='save-button-modals-profile' onClick={() => registerWorker()}>
            Anunciar serviço
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AnnounceService;