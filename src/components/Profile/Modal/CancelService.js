import React, { useState } from 'react';
import '../styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CancelService = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
          <p id='optionsText' onClick={handleShow}>Cancelar serviço</p>

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
                <p>Selecione o serviço que você deseja cancelar:</p>

                <button className='categoryButton'>Eletricista</button>
                <button className='categoryButton'>Eletricista</button>
                <button className='categoryButton'>Eletricista</button>
                <button className='categoryButton'>Eletricista</button>
                <button className='categoryButton'>Eletricista</button>
                <button className='categoryButton'>Eletricista</button>
                <button className='categoryButton'>Eletricista</button>
                <button className='categoryButton'>Eletricista</button>            
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    )
}

export default CancelService; 