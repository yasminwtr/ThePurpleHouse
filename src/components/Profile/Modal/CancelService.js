import React, { useState } from 'react';
import '../styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import CancelServiceIcon from '@mui/icons-material/HighlightOffRounded'

const CancelService = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
          <p id='optionsText' onClick={handleShow}><CancelServiceIcon sx={{ fontSize: 20 }}/> Cancelar serviço</p>

          <Modal
          show={show}
          onHide={handleClose}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

            <Modal.Header closeButton>
              <Modal.Title>Cancelar serviço</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Ao cancelar um serviço o seu perfil na categoria específica vai ser excluído.</p>

                <Form.Select autoFocus>
                  <option>Selecione um serviço</option>
                  <option value="1">Eletricista</option>
                  <option value="2">Jardineiro</option>
                  <option value="3">Babá</option>
                </Form.Select>          
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cancelar serviço
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    )
}

export default CancelService; 