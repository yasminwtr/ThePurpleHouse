import React, { useState, useContext } from 'react';
import AuthContext from '../../services/contexts/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import LogoutIcon from '@mui/icons-material/ExitToAppRounded'
import { useNavigate } from "react-router-dom";

const ModalExistingChat = (props) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function redirectToExistingChat() {
    navigate("/Chat", { replace: true })
  }

  return (
    <div>
      <p id='options-logout' onClick={handleShow}><LogoutIcon sx={{ fontSize: 22 }} /> Sair</p>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Serviço solicitado já existente</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Parece que você já solicitou ou possui um serviço solicitado desse perfil.
            Deseja ir para o serviço existente ou solicitar um novo?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button id='close-button-modals-profile' onClick={() => redirectToExistingChat()}>
            Ir para o existente
          </Button>

          <Button id='save-button-modals-profile' onClick={() => props.createChat()}>
            Solicitar novo serviço
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalExistingChat; 