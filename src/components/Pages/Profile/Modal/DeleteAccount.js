import React, { useState } from 'react';
import '../styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import DeleteAccountIcon from '@mui/icons-material/DeleteForeverRounded'

const DeleteAccount = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
          <p id='optionsText' onClick={handleShow}><DeleteAccountIcon sx={{ fontSize: 22 }}/> Excluir conta</p>

          <Modal
          show={show}
          onHide={handleClose}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

            <Modal.Header closeButton>
              <Modal.Title>Excluir conta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Você tem certeza em excluir a sua conta? Isso apagará todos os seus dados!
              <Form>
                    <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Digite sua senha para completar a ação</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="******"
                            autoFocus
                            maxLength={25}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Excluir
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    )
}

export default DeleteAccount;