import React, { useState } from 'react';
import '../styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditAccount = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
          <p id='optionsText' onClick={handleShow}>Editar conta</p>

          <Modal
          show={show}
          onHide={handleClose}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

            <Modal.Header closeButton>
              <Modal.Title>Editar conta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>E-mail</Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="nome@exemplo.com"
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Telefone</Form.Label>

                        <Form.Control
                            type="number"
                            placeholder="48991400821"
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Senha</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="******"
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Confirmar senha</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="******"
                            autoFocus
                        />
                    </Form.Group>
                </Form>

            </Modal.Body>

            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Salvar
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    )
}

export default EditAccount;
