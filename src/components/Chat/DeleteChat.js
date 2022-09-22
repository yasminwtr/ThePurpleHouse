import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import api from 'api'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DeleteChat = (props) => {
  const { chat, getChats } = props

  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseError = () => setShowError(false);
  const handleCloseSuccess = () => setShowSuccess(false);

  const deleteMessages = async () => {
    const idChat = chat.idchat
    try {
      await api.delete(`/messages/${idChat}`);
    } catch (error) {
      console.log('erroooooooooooooo');
    }
  }

  const deleteChat = async () => {
    const idChat = chat.idchat
    try {
      await api.delete(`/chat/${idChat}`);
      setShowSuccess(true)
      deleteMessages()
      props.getChats()

    } catch (error) {
      console.log('erroooooooooooooo');
      setShowError(true)
    }
  }

  return (
    <div>
      <Button variant="danger" id='delete-chat-button' onClick={handleShow}>Excluir conversa</Button>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Excluir conversa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Você tem certeza em excluir essa conversa? Isso apagará todos os dados dela!
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger"
            onClick={() => { deleteChat() }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>

      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Erro ao excluir a conversa, por favor tente novamente.
        </Alert>
      </Snackbar>


      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Conversa excluída com sucesso!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default DeleteChat;