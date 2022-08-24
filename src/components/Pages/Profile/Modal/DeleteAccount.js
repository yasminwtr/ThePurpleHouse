import React, { useState, useContext } from 'react';
import '../styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import AuthContext from "../../../contexts/auth";

import DeleteAccountIcon from '@mui/icons-material/DeleteForeverRounded'

const DeleteAccount = (props) => {

 

    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseError = () => setShowError(false);
    const handleCloseSuccess = () => setShowSuccess(false);

    const { user } = useContext(AuthContext);
    const [person, setPerson] = useState([])

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

    const deleteUser = async (deleteId) => {
      const requestOptions = {
        method: 'delete',
        headers: { 'Content-type': 'aplication/json' }
      }
      try {
        console.log(deleteId)
        await fetch('http://localhost:3000/users/' + deleteId, requestOptions)
        setPerson(person.filter(person => person.idPerson !== deleteId))
        setShowSuccess(true)
        setShow(false)
      
      } catch (error) {
        setShowError(true)
      }
    }

    return(
        <div>
          <p id='options-text' onClick={handleShow}><DeleteAccountIcon sx={{ fontSize: 22 }}/> Excluir conta</p>

          <Modal
          show={show}
          onHide={handleClose}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

            <Modal.Header closeButton>
              <Modal.Title>Excluir conta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Você tem certeza em excluir a sua conta? Isso apagará todos os seus dados!
              <Form>
                    <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Digite sua senha para completar a ação</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="******"
                            autoFocus
                            maxLength={25}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={() => {deleteUser(user.idperson)}}>
                Excluir
              </Button>
            </Modal.Footer>
          </Modal> 

          <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
              Preencha o formulário para editar sua conta
            </Alert>
          </Snackbar>

          <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
            <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
            Conta excluída com sucesso!
            </Alert>
          </Snackbar> 
        </div>
    )
}

export default DeleteAccount;