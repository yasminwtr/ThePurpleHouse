import React, { useState, useContext } from 'react';
import '../styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import AuthContext from '../../../contexts/auth';
import api from '../../../../api/index';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import EditIcon from '@mui/icons-material/EditRounded'

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const EditAccount = (props) => {
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseError = () => setShowError(false);
    const handleCloseSuccess = () => setShowSuccess(false);

// --------------------- olhinho -----------------------
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
// -------------------------- ----------------------------

    const { user } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   

    const updateUser = async () => {
      const idPerson = user.idperson;
      try {
          if ((email && password) !== ''){
            const response = await api.put(`/users/${idPerson}`, { email, password})
            const data = response;
            console.log('updateUserData', data);
      
            user.email = data.email;
            user.password = data.password;
      
            setEmail(email)
            setPassword(password)

            setShowSuccess(true)
            setShow(false)
          
          }
          else {
              setShowError(true)
          }
      } catch (error) {
        console.log(error)
      }
  }

    return(
        <div>
          <p id='options-text' onClick={handleShow}><EditIcon sx={{ fontSize: 20, marginRight: 0.5 }}/> Editar conta</p>

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
                    <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                    <div className='containerInputEdit'>
                        <Form.Control
                            type="email"
                            placeholder="Novo e-mail"
                            autoFocus
                            maxLength={45}
                            id = 'email'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </Form.Group>

                   

                    <Form.Group >
                      <Form.Label>Senha</Form.Label>
                        <div className='containerInputEdit'>
                            <Form.Control
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                placeholder="Nova senha"
                                maxLength={25}
                                id = 'password'
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            
                            <div>
                              <IconButton sx={{ color: '#515151' }}
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </div>
                        </div>
                    </Form.Group>

                    {/* <Form.Group className="mb-3">
                        <Form.Label>Confirmar senha</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="******"
                            maxLength={25}
                        />
                    </Form.Group> */}
                </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="success"  onClick={() => updateUser()}>
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
