import React, { useState } from 'react';
import '../styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import ReviewIcon from '@mui/icons-material/RateReviewRounded'
import StarIcon from '@mui/icons-material/StarRounded'


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const LeaveAvaliation = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
          <p id='leave-avaliation' onClick={handleShow}><ReviewIcon sx={{ fontSize: 20 }}/> Escrever avaliação</p>

          <Modal
          show={show}
          onHide={handleClose}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

            <Modal.Header closeButton>
              <Modal.Title>Escrever avaliação</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Sua avaliação é muito importante para nós. Não deixe de falar o que achou sobre os serviços contratados! :)
              <Form>
                    <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Quantas estrelas você daria?</Form.Label>

                  <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={0} precision={1} />
                  </Stack>

                        
                    </Form.Group>

                    <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Escreva aqui a sua experiência com esse trabalhador</Form.Label>

                        <Form.Control
                        as="textarea"
                        rows={6}
                        maxLength={300}/>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Enviar avaliação
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    )
}

export default LeaveAvaliation;