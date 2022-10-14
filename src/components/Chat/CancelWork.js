import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import api from '../../api';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AuthContext from 'services/contexts/auth';
import { Button } from 'antd';
import CancelIcon from '@mui/icons-material/DoDisturbRounded'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CancelWork = (props) => {
  const { user } = useContext(AuthContext);
  const { chat, getChats } = props
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseError = () => setShowError(false);
  const handleCloseSuccess = () => setShowSuccess(false);

  const cancelStatus = async () => {
    const idChat = chat.idchat
    try {
      const response = await api.put(`/chats/cancel/${idChat}`, { status: 'Cancelado' })
      const data = response;

      chat.status = data.status;
      setShow(false)

    } catch (error) {
    }
  }

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

      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Houve um problema em cancelar o serviço.
        </Alert>
      </Snackbar>

      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Serviço cancelado com sucesso.
        </Alert>
      </Snackbar>
    </div>
  )
}

export default CancelWork; 