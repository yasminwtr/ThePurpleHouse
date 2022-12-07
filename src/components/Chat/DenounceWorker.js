import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, notification } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ReportIcon from '@mui/icons-material/ErrorOutlineRounded';
import api from 'api';
import AuthContext from '../../services/contexts/auth'

const DenounceWorker = (props) => {
  const { user } = useContext(AuthContext);
  const { chat, getChats } = props

  const [show, setShow] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [selectedOption, setOptionSelected] = useState('')
  const [description, setDescription] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSecondModal = () => setShowSecondModal(false);
  const handleShowSecondModal = () => setShowSecondModal(true);

  const openNotification = () => {
    notification["success"]({
      message: 'Usuário denunciado',
      duration: 2,
      placement: 'top',
      description:
        'A conversa foi finalizada.',
    });
    setShowSecondModal(false)
    setShow(false)
  };

  const openNotificationError = () => {
    notification["error"]({
      message: 'Houve um problema ao denunciar o usuário.',
      duration: 2,
      placement: 'top'
    });
  };

  const openNotificationValidation = () => {
    notification["error"]({
      message: 'Preencha todos os campos para realizar a denúncia!',
      duration: 2,
      placement: 'bottom',
    });
  };

  async function createDenounce() {
    const idWorker = chat.idworker
    if (selectedOption !== '' && description !== '') {
      try {
        const response = await api.post('/denounce', { idWorker: idWorker, idPerson: user.idperson, selectedOption, description });
        console.log('response', response)
        openNotification()

      } catch (error) {
        openNotificationError()
      }
    } else {
      openNotificationValidation()
    }
  }

  const denounceStatus = async () => {
    const idChat = chat.idchat
    try {
      const response = await api.put(`/chats/denounce/${idChat}`, { status: 'Denunciado' })
      const data = response;

      chat.status = data.status;
      setShow(false)

    } catch (error) {
    }
  }

  function denounceWorker() {
    createDenounce()
    denounceStatus()
    getChats()
  }

  return (
    <div>
      <label id='label-more-options' onClick={handleShow}><ReportIcon sx={{ fontSize: 23, marginRight: 0.5 }} /> Denunciar</label>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Denunciar usuário</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Você tem certeza que deseja denunciar esse usuário?
        </Modal.Body>

        <Modal.Footer>
          <Button id='delete-button-modals-profile' onClick={handleShowSecondModal}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showSecondModal}
        onHide={handleCloseSecondModal}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Form className='m-3'>
          <Form.Group>

            <Form.Select
              autoFocus
              className='modal-body '
              onChange={(event) => setOptionSelected(event.target.value)}
            >
              <option>Selecione o motivo da denúncia</option>
              <option>Perfil suspeito ou falso</option>
              <option>Assédio ou discurso de ódio</option>
              <option>Violência ou danos físicos</option>
              <option>Violação de propriedade</option>

            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 mt-3">
            <Form.Label>Sentimos muito, você pode nos descrever com mais detalhes o que ocorreu?</Form.Label>

            <Form.Control
              as="textarea"
              rows={5}
              maxLength={300}
              autoFocus
              onChange={(event) => setDescription(event.target.value)}

            />
          </Form.Group>

        </Form>

        <Modal.Footer>
          <Button id='close-button-modals-profile' onClick={() => handleCloseSecondModal()}>
            Cancelar
          </Button>
          <Button id='delete-button-modals-profile' onClick={() => denounceWorker()}>
            Denunciar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default DenounceWorker;