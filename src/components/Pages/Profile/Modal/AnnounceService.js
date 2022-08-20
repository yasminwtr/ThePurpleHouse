import React, { useState, useEffect } from 'react';
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import AnnounceIcon from '@mui/icons-material/CampaignRounded'
import api from "../../../../api";

const AnnounceService = (props) => {
    const [show, setShow] = useState(false);
    const [selectValue, setSelectValue] = useState(''); 
    const [services, setServices] = useState([]);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [localization, setLocalization] = useState('');
    const [whatsapp, setWhatsapp] = useState(''); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function registerWorker() {
        try {
            if ((selectValue, description, price, city, localization, whatsapp) !== '' && selectValue !== 'Serviços') {
            const response = await api.post('/registerWorker', { idPerson: 1, idService: selectValue, descriptionService: description, priceService: price, city: city, localization: localization, whatsapp: whatsapp });
            console.log('response', response);
            
            }
            else {
            console.log('campo nao preenchiddddo');
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        const fetchData = async () => {
          const response = await api.get('/services');
          setServices(response.data)
        }
        fetchData()
          .catch(console.error);
      }, [])

    return(
        <div>
          <p id='options-text' onClick={handleShow}><AnnounceIcon sx={{ fontSize: 22 }}/> Anunciar serviço</p>

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
                        <Form.Label>Selecione o serviço que você deseja anunciar{selectValue}</Form.Label>

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
                        />
                    </Form.Group>

                    <Row className="g-2 mb-3 row-localization">
                        <Form.Label id='localization-label'>Localização em que você atua</Form.Label>

                        <Col md={3}>
                            <Form.Control
                            type="text"
                            placeholder="Estado"
                            maxLength={2}
                            onChange={(event) => setLocalization(event.target.value)}
                            id='localization'
                            /> 
                        </Col>

                        <Col md>
                            <Form.Control
                            type="text"
                            placeholder="Cidade"
                            maxLength={25}
                            onChange={(event) => setCity(event.target.value)}
                            id='city'
                            /> 
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
                        <Form.Label>Adicione o seu link para o WhatsApp personalizado <a id='link-whatsapp' href='https://www.convertte.com.br/gerador-link-whatsapp/' target="_blank" rel="noopener noreferrer">(clique aqui para gerar o link)</a></Form.Label>

                        <Form.Control
                        placeholder="Cole o link gerado aqui"
                        maxLength={100}
                        onChange={(event) => setWhatsapp(event.target.value)}
                        id='whatsapp'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Por fim, adicione até 10 fotos de serviços já realizados!</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>
                </Form>

            </Modal.Body>

            <Modal.Footer>
              <Button variant="success" onClick={() => registerWorker()}>
                Anunciar serviço
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    )
}

export default AnnounceService;