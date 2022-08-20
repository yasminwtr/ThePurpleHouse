import React, { useState } from 'react';
import '../styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AvaliationIcon from '@mui/icons-material/StarRounded'

const Avaliations = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
          <p id='options-text' onClick={handleShow}><AvaliationIcon sx={{ fontSize: 22 }}/> Serviços avaliados</p>

          <Modal
          show={show}
          onHide={handleClose}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

            <Modal.Header closeButton>
              <Modal.Title>Serviços avaliados</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className='feed-valiations-modal'>
                <p>Você já avaliou 2 serviços.</p>

                <div className='individual-avaliation-modal'>
                    <div className='block-avaliation-modal'>
                        <div className='part1-avaliation-modal'>
                            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile"/>
                        </div>

                        <div>
                            <p id='name-avaliation-modal'>Maria Silva, Jardineiro</p>
                            <p id='name-avaliation-modal'>★★★★★</p>
                        </div>
                    </div>

                    <p id='text-avaliation-modal'>Adorei, podou minhas árvores do jeito que eu pedi e muito bem educado.</p>
                </div>

                <div className='individual-avaliation-modal'>
                    <div className='block-avaliation-modal'>
                        <div className='part1-avaliation-modal'>
                            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile"/>
                        </div>

                        <div>
                            <p id='name-avaliation-modal'>Maria Silva, Jardineiro</p>
                            <p id='name-avaliation-modal'>★★★★★</p>
                        </div>
                    </div>

                    <p id='text-avaliation-modal'>Adorei, podou minhas árvores do jeito que eu pedi e muito bem educado.</p>
                </div>

                <div className='individual-avaliation-modal'>
                    <div className='block-avaliation-modal'>
                        <div className='part1-avaliation-modal'>
                            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile"/>
                        </div>

                        <div>
                            <p id='name-avaliation-modal'>Maria Silva, Jardineiro</p>
                            <p id='name-avaliation-modal'>★★★★★</p>
                        </div>
                    </div>

                    <p id='text-avaliation-modal'>Adorei, podou minhas árvores do jeito que eu pedi e muito bem educado.</p>
                </div>
              </div>

                
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

export default Avaliations; 