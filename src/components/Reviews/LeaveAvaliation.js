import React, { useState, useContext } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, notification } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AuthContext from '../../services/contexts/auth'
import { FaStar } from 'react-icons/fa'
import CloseIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import { useNavigate } from "react-router-dom";

const LeaveAvaliation = (props) => {
  const { user } = useContext(AuthContext);
  const { chat } = props
  const [rating, setRating] = useState(null)
  const [hoverRating, setHoverRating] = useState(null)
  const [messageReview, setMessageReview] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function registerReview() {
    const idWorker = chat.idworker
    try {
      if ((messageReview) !== '' && rating !== null) {
        const response = await api.post('/reviews', { idPerson: user.idperson, idWorker: idWorker, firstNamePerson: user.firstname, lastNamePerson: user.lastname, messageReview: messageReview, stars: rating });
        console.log('response', response);
        setShow(false)
      }
      else {
        openNotificationError()
      }
    } catch (error) {

    }
  }

  const closeStatus = async () => {
    const idChat = chat.idchat
    try {
      const response = await api.put(`/chats/cancel/${idChat}`, { status: 'Finalizado' })
      const data = response;

      chat.status = data.status;
      setShow(false)

    } catch (error) {
    }
  }

  function closeService() {
    if ((messageReview) !== '' && rating !== null) {
      registerReview()
      closeStatus()
      openNotificationSuccess()
      

    } else {
      openNotificationError()
    }
  }

  const openNotificationSuccess = () => {
    notification["success"]({
      message: 'Avaliação feita!',
      description: 'Agradecemos a sua colaboração :)',
      duration: 2,
      placement: 'top',
      style: {
        width: 800,
      }
    });
  };

  const openNotificationError = () => {
    notification["error"]({
      message: 'Preencha o formulário para avaliar o trabalhador',
      duration: 2,
      placement: 'bottom'
    });
  };

  return (
    <div>
      <label id='label-more-options' onClick={handleShow}><CloseIcon sx={{ fontSize: 22, marginRight: 0.5 }} />
        Finalizar serviço
      </label>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Finalizar serviço</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Para finalizar esse serviço é necessário deixar a sua avaliação.
          Ela é muito importante para nós, não deixe de falar o que achou sobre os serviços contratados! :)
          <Form>
            <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantas estrelas você daria?</Form.Label><br></br>

              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                  <label key={i}>
                    <input
                      type='radio'
                      name='rating'
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                      className='star-avaliation'
                      color={ratingValue <= (hoverRating || rating) ? '#fccc3e' : '#d9d9d9'}
                      onMouseEnter={() => setHoverRating(ratingValue)}
                      onMouseLeave={() => setHoverRating(null)}
                    />
                  </label>
                )
              })}
            </Form.Group>

            <Form.Group className="mt-3 mb-3">
              <Form.Label>Escreva aqui a sua experiência com esse trabalhador</Form.Label>

              <Form.Control
                as="textarea"
                rows={6}
                maxLength={245}
                id='messageReview'
                onChange={(event) => setMessageReview(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button id='save-button-modals-profile' onClick={() => closeService()}>
            Enviar avaliação e finalizar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default LeaveAvaliation;