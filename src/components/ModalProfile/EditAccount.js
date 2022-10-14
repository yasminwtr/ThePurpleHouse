import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, notification } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AuthContext from '../../services/contexts/auth'
import api from '../../api';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/EditRounded'
import { HiOutlineEye } from 'react-icons/hi';
import { HiOutlineEyeOff } from 'react-icons/hi'

const EditAccount = (props) => {
  const { user } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [atualPass, setAtualPass] = useState('')
  const [pass, setPass] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [validEmail, setValidEmail] = useState(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)

  const [show, setShow] = useState(false);
  const [modalInformations, setModalInformations] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const updateEmail = async () => {
    const idPerson = user.idperson;
    try {
      const response = await api.put(`/users/email/${idPerson}`, { email })
      const data = response;

      user.email = data.email;
      setEmail(email)
      setShow(false)

    } catch (error) {
    }
  }

  const updatePassword = async () => {
    const idPerson = user.idperson;
    try {
      const response = await api.put(`/users/pass/${idPerson}`, { pass })
      const data = response;

      user.pass = data.pass;
      setPass(pass)
      setShow(false)

    } catch (error) {
    }
  }

  const updateBirthDate = async () => {
    const idPerson = user.idperson;
    try {
      const response = await api.put(`/users/birthdate/${idPerson}`, { birthDate })
      const data = response;

      user.birthdate = data.birthdate;
      setBirthDate(birthDate)
      setShow(false)

    } catch (error) {
    }
  }

  function updateUser() {
    if (email !== '' && email.match(validEmail) && (pass, atualPass, birthDate) == '') {
      updateEmail()
      openNotificationSuccess()

    } else if ((pass, atualPass) !== '' && atualPass.length >= 8 && (email, birthDate) == '') {
      updatePassword()
      openNotificationSuccess()

    } else if (birthDate !== '' && (email, pass, atualPass) == '') {
      updateBirthDate()
      openNotificationSuccess()

    } else if ((birthDate, email) !== '' && email.match(validEmail) && (pass, atualPass) == '') {
      updateEmail()
      updateBirthDate()
      openNotificationSuccess()

    } else if ((birthDate, pass, atualPass) !== '' && atualPass.length >= 8 && email == '') {
      updatePassword()
      updateBirthDate()
      openNotificationSuccess()

    } else if ((email, pass, atualPass) !== '' && email.match(validEmail) && atualPass.length >= 8 && birthDate == '') {
      updatePassword()
      updateEmail()
      openNotificationSuccess()

    } else if ((email, pass, atualPass, birthDate) !== '') {
      updateEmail()
      updatePassword()
      updateBirthDate()
      openNotificationSuccess()

    } else if ((email, pass, atualPass, birthDate) == '' && email.match(validEmail) && atualPass.length >= 8) {
      openNotificationError()

    } else {
      openNotificationError()
    }
  }

  const openNotificationError = () => {
    notification["error"]({
      message: 'Erro',
      description: 'Certifique-se de que as informações estão preenchidas corretamente',
      duration: 2,
      placement: 'top',
    });
  };

  const openNotificationSuccess = () => {
    notification["success"]({
      message: 'Conta editada com sucesso',
      duration: 2,
      placement: 'top',
    });
  };

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
                    placeholder={user.email}
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
                      placeholder="Digite a sua senha atual"
                      maxLength={25}
                      id='password-edit'
                      onChange={(event) => setAtualPass(event.target.value)}
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
                      placeholder="Nova senha"
                      maxLength={25}
                      id='password-edit'
                      onChange={(event) => setPass(event.target.value)}
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
    </div>
  )
}

export default EditAccount;
