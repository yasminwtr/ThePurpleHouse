import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AuthContext from '../../services/contexts/auth'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import DeleteAccountIcon from '@mui/icons-material/DeleteForeverRounded'
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { HiOutlineEye } from 'react-icons/hi';
import { HiOutlineEyeOff } from 'react-icons/hi'
import { Button } from 'antd';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DeleteAccount = (props) => {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate()
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseError = () => setShowError(false);
  const handleCloseSuccess = () => setShowSuccess(false);

  const { user, signOut } = useContext(AuthContext);
  const [person, setPerson] = useState([]);
  const [password, setPassword] = useState('')

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const deleteUser = async (deleteId) => {
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-type': 'aplication/json' }
    }
    try {
      console.log(deleteId)
      await fetch('http://localhost:3001/users/' + deleteId, requestOptions)
      setPerson(person.filter(person => person.idPerson !== deleteId))
      console.log('funfou');

    } catch (error) {
      console.log(error)
    }
  }

  function validationPass() {
    if (password === user.pass) {
      deleteUser(user.idperson)
      signOut()
      navigate("/", { replace: true })
    } else {
      setShowError(true)
    }
  }

  return (
    <div>
      <p id='options-text' onClick={handleShow}><DeleteAccountIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Excluir conta</p>

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
            <Form.Group className="mt-3 mb-3">
              <Form.Label>Digite sua senha para completar a ação</Form.Label>

              <div className='containerInputEdit'>
                <Form.Control
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  placeholder="******"
                  maxLength={25}
                  id='password-edit'
                  onChange={(event) => setPassword(event.target.value)}
                />

                <div>
                  <IconButton sx={{ color: '#616161', marginRight: 1 }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                  </IconButton>
                </div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button id='delete-button-modals-profile'
            //onClick={() => {deleteUser(user.idperson)}}
            onClick={() => { validationPass() }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>

      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Erro ao excluir a conta, certifique-se de que você não esta cadastrado em nenhum serviço ou se sua senha está correta.
        </Alert>
      </Snackbar>


      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Conta excluída com sucesso! É uma pena ver você ir :( Agradecemos pela colaboração.
        </Alert>
      </Snackbar>
    </div>
  )
}

export default DeleteAccount;