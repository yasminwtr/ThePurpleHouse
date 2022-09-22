import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthContext from '../contexts/auth'
import api from '../../api';
import InputGroup from 'react-bootstrap/InputGroup';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useLocation, Link } from 'react-router-dom';
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditProfileWorker = (props) => {
  const { user } = useContext(AuthContext)
  const location = useLocation();
  const [description, setDescription] = useState(`${location.state.description}`);
  const [phoneNumber, setPhoneNumber] = useState(`${location.state.phone}`);
  const [price, setPrice] = useState(`${location.state.price}`);
  const [whatsapp, setWhatsapp] = useState(`${location.state.whatsapp}`);

  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseError = () => setShowError(false);
  const handleCloseSuccess = () => setShowSuccess(false);

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState(`${location.state.cityState}`);
  const [selectedCity, setSelectedCity] = useState(`${location.state.city}`);

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
  }, []);

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

  const updateProfileWorker = async () => {
    const idWorker = location.state.workerId
    try {
      // if ((description) !== '') {
      const response = await api.put(`/updateworker/${idWorker}`, { descriptionService: description, phoneNumber: phoneNumber, priceService: price, city: selectedCity, localization: selectedUf, whatsapp: whatsapp })
      const data = response;
      location.state.description = data.description
      location.state.phone = data.phoneNumber
      location.state.price = data.priceService
      location.state.city = data.city
      location.state.cityState = data.localization
      location.state.whatsapp = data.whatsapp

      setDescription(description)
      setPhoneNumber(phoneNumber)
      setPrice(price)
      setSelectedCity(selectedCity)
      setSelectedUf(selectedUf)
      setWhatsapp(whatsapp)

      setShowSuccess(true)
      setShow(false)

    } catch (error) {
      console.log(error)
      console.log('nao funfou');
    }
  }

  return (
    <div>
      <button className='message-button' onClick={handleShow}>Editar perfil</button>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Editar perfil de {location.state.service}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nova descrição</Form.Label>

              <Form.Control
                as="textarea"
                rows={6}
                maxLength={300}
                autoFocus
                onChange={(event) => setDescription(event.target.value)}
                id='description'
                value={description}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Novo telefone</Form.Label>
              <div>

                <TelefoneBrasileiroInput
                  className='containerInputEdit-tel'
                  type={"tel"}
                  placeholder={location.state.phone}
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
              <Form.Label id='localization-label'>Nova localização</Form.Label>
              <Col md={3}>
                <Form.Select name="uf" id="uf" value={selectedUf} onChange={handleSelectUf}>
                  <option value="0">Estado</option>
                  {ufs.map((uf) => (
                    <option key={uf.id} value={uf.sigla}>{uf.sigla}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col md>

                <Form.Select name="City" id="City" value={selectedCity} onChange={handleSelectCity}>
                  <option value="0">Cidade</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.nome}>
                      {city.nome}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Form.Label>Novo preço médio dos seus serviços</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                type="number"
                maxLength={10}
                onChange={(event) => setPrice(event.target.value)}
                id='price'
                value={price}
              />
            </InputGroup>

            <Form.Group className="mb-3">
              <Form.Label>Altere ou adicione o link para o seu whatsapp <a id='link-whatsapp' href='https://www.convertte.com.br/gerador-link-whatsapp/' target="_blank" rel="noopener noreferrer">(clique aqui para gerar o link)</a></Form.Label>

              <Form.Control
                maxLength={100}
                onChange={(event) => setWhatsapp(event.target.value)}
                id='whatsapp'
                value={whatsapp}
              />
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button id='save-button-modals-profile' onClick={() => updateProfileWorker()}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Preencha o formulário para editar sua conta
        </Alert>
      </Snackbar>

      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Conta editada com sucesso!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default EditProfileWorker;
