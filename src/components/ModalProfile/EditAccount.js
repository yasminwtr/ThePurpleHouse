import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AuthContext from '../../services/contexts/auth'
import api from '../../api';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/EditRounded'
import { HiOutlineEye } from 'react-icons/hi';
import { HiOutlineEyeOff } from 'react-icons/hi'
import KeyIcon from '@mui/icons-material/Key';
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditAccount = (props) => {
  const { user } = useContext(AuthContext)
  const [email, setEmail] = useState(`${user.email}`)
  const [atualPassword, setAtualPassword] = useState('')
  const [password, setPassword] = useState('')
  const [birthDate, setBirthDate] = useState(`${user.birthdate}`)

  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [modalInformations, setModalInformations] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseError = () => setShowError(false);
  const handleCloseSuccess = () => setShowSuccess(false);

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

  const updateUser = async () => {
    const idPerson = user.idperson;
    try {
      if ((email && password) !== '') {
        const response = await api.put(`/users/${idPerson}`, { email, password })
        const data = response;
        console.log('updateUserData', data);

        user.email = data.email;
        user.password = data.password;

        setEmail(email)
        setPassword(password)

        setShowSuccess(true)
        setShow(false)
        console.log('valores update:', 'email: ', email, ';', 'senha: ', password, ';');

      }
      else {
        setShowError(true)
      }
    } catch (error) {
      console.log(error)
      console.log('nao funfou');
    }
  }

  return (
    <div>
      <p id='options-text' onClick={handleShow}><EditIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
        Editar conta
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Editar conta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <div className='div-buttons-modal'>
              <Button className='edit-profile-buttons-modal mb-3' onClick={() => setModalInformations(!modalInformations)}>
                Informações pessoais
              </Button>
              <Button className='edit-profile-buttons-modal right-button-modal mb-3' onClick={() => setModalPassword(!modalPassword)}>
                Senha
              </Button>
            </div>
            {modalInformations ?
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type={"email"}
                    value={email}
                    autoFocus
                    maxLength={45}
                    id='emailEdit'
                    onChange={(event) => setEmail(event.target.value)}
                  />

                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Data de nascimento</Form.Label>
                  <Form.Control
                    onChange={(event) => setBirthDate(event.target.value)}
                    type={'date'}
                    value={birthDate}
                  />
                </Form.Group>
              </div>
              :
              <></>
            }
            {modalPassword ?
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Senha atual</Form.Label>
                  <div className='containerInputEdit'>
                    <Form.Control
                      type={values.showPassword ? 'text' : 'password'}
                      value={atualPassword}
                      placeholder="Digite a sua senha atual"
                      maxLength={25}
                      id='password-edit'
                      onChange={(event) => setAtualPassword(event.target.value)}
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

                <Form.Group >
                  <Form.Label>Nova senha</Form.Label>
                  <div className='containerInputEdit'>
                    <Form.Control
                      type={values.showPassword ? 'text' : 'password'}
                      value={password}
                      placeholder="Nova senha"
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
              </div>
              :
              <></>
            }
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button id='save-button-modals-profile' onClick={() => updateUser()}>
            Salvar
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
          Conta editada com sucesso!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default EditAccount;
