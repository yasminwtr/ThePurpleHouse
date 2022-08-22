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

    const { user } = useContext(AuthContext)

    const [emailPerson, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
  
    // const [Visible, setVisible] = useState(false);

    // async function validationFields() {
        
    //    try{
    //     if ((emailPerson && password) !== '') {
    //         const response = await api.post('/updateUser', { idPerson: user.idperson, emailPerson: emailPerson, passwordPerson: password });
    //         console.log('response', response);
    //         setShowSuccess(true)
    //         setShow(false)
    //     } else {
    //         setShowError(true)
    //     }
    //    } catch (error) {

    //    }
    //   }
    
    
      const validationFields = async () => {
        // const idPerson = user.idperson;
        try {
      
          const response = await api.post('/updateUser', { idPerson: user.idperson, emailPerson: emailPerson, passwordPerson: password });
          const data = response;
          console.log('updateUser', data);
    
          user.emailPerson = data.emailPerson;
          user.password = data.password;
          
    
          setEmail(emailPerson)
          setPassword(password)
         
    
        } catch (error) {
          console.log(error)
        }
      }

    return(
        <div>
          <p id='options-text' onClick={handleShow}><EditIcon sx={{ fontSize: 20 }}/> Editar conta</p>

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

                        <Form.Control
                            type="email"
                            placeholder="nome@exemplo.com"
                            autoFocus
                            maxLength={45}
                            id ='emailPerson'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>

                   

                    <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="******"
                            maxLength={25}
                            id = 'password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
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
              <Button variant="success"  onClick={() => validationFields()}>
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
