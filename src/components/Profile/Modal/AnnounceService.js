import React, { useState } from 'react';
import '../styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

const AnnounceService = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
          <p id='optionsText' onClick={handleShow}>Anunciar um serviço</p>

          <Modal
          show={show}
          onHide={handleClose}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

            <Modal.Header closeButton>
              <Modal.Title>Anunciar um serviço</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Selecione o serviço que você deseja anunciar</Form.Label>

                        <Form.Select autoFocus>
                            <option>Selecione um serviço</option>
                            <option value="1">Eletricista</option>
                            <option value="2">Jardineiro</option>
                            <option value="3">Babá</option>
                        </Form.Select>   
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descreva mais sobre os serviços que você faz!</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={6}
                        maxLength={300}/>
                    </Form.Group>

                    <Row className="g-2 mb-3">
                        <Form.Label id='localizationLabel'>Selecione a localização em que você atua</Form.Label>

                        <Col md>
                            <Form.Select>
                                <option>Estado</option>
                                <option value="1">SC</option>
                                <option value="2">RS</option>
                                <option value="3">MG</option>
                            </Form.Select>  
                        </Col>

                        <Col md>
                            <Form.Select>
                                <option>Cidade</option>
                                <option value="1">Florianópolis</option>
                                <option value="2">Joinville</option>
                                <option value="3">Blumenau</option>
                            </Form.Select>  
                        </Col>
                    </Row>

                    <Form.Label>Preço médio dos seus serviços</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>R$</InputGroup.Text>
                        <Form.Control
                        placeholder='38.99'
                        maxLength={10}/>
                    </InputGroup>

                    <Form.Group className="mb-3">
                        <Form.Label>Por fim, adicione até 10 fotos de serviços já realizados!</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>
                </Form>

            </Modal.Body>

            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Anunciar serviço
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    )
}

export default AnnounceService;