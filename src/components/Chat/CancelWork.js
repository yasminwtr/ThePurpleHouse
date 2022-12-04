import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import api from '../../api';
import AuthContext from 'services/contexts/auth';
import { Button, notification } from 'antd';
import CancelIcon from '@mui/icons-material/DoDisturbRounded'

const CancelWork = (props) => {
  const { user } = useContext(AuthContext);
  const { chat, getChats } = props
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cancelStatus = async () => {
    const idChat = chat.idchat
    try {
      const response = await api.put(`/chats/cancel/${idChat}`, { status: 'Cancelado' })
      const data = response;

      chat.status = data.status;
      setShow(false)
      openNotificationSuccess()

    } catch (error) {
      openNotificationError()
    }
  }

  const openNotificationSuccess = () => {
    notification["success"]({
      message: 'Serviço cancelado com sucesso.',
      duration: 2,
      placement: 'top'
    });
  };

  const openNotificationError = () => {
    notification["error"]({
      message: 'Houve um problema ao cancelar o serviço.',
      duration: 2,
      placement: 'top'
    });
  };

  return (
    <div>
      <label id='label-more-options' onClick={handleShow}><CancelIcon sx={{ fontSize: 22, marginRight: 0.5 }} /> Cancelar serviço</label>

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
          <p>Esse serviço vai ser bloqueado assim que cancelado, não permitindo mais o envio de mensagens e avaliação ao trabalhador. Caso necessário, terá que ser iniciado outro serviço.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button id='close-button-modals-profile' onClick={() => cancelStatus()}>
            Cancelar serviço
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CancelWork; 