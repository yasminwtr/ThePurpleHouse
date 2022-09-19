import React, { useState } from 'react';
import '../../Pages/Chat/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AuthContext from '../contexts/auth'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DeleteChat = (props) => {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseError = () => setShowError(false);
  const handleCloseSuccess = () => setShowSuccess(false);

//   const { user, signOut } = useContext(AuthContext);
//   const [person, setPerson] = useState([]);
//   const [password, setPassword] = useState('')

//   const deleteUser = async (deleteId) => {
//     const requestOptions = {
//       method: 'delete',
//       headers: { 'Content-type': 'aplication/json' }
//     }
//     try {
//       console.log(deleteId)
//       await fetch('http://localhost:3001/users/' + deleteId, requestOptions)
//       setPerson(person.filter(person => person.idPerson !== deleteId))
//       console.log('funfou');

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   function validationPass() {
//     if (password === user.pass) {
//       deleteUser(user.idperson)
//       signOut()
//       navigate("/", { replace: true })
//     } else {
//       setShowError(true)
//     }
//   }

  return (
    <div>
      <Button variant="danger" id='delete-chat-button' onClick={handleShow}>Excluir chat</Button>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Excluir chat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Você tem certeza em excluir esse chat? Isso apagará todos os dados da conversa!
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger"
            // onClick={() => { validationPass() }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>

      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Erro ao excluir o chat, por favor tente novamente.
        </Alert>
      </Snackbar>


      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Chat excluído com sucesso!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default DeleteChat;