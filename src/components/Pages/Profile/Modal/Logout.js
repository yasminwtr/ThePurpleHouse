import React, { useState, useContext } from 'react';
import '../styles.css'
import AuthContext from '../../../contexts/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LogoutIcon from '@mui/icons-material/ExitToAppRounded'
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
    const { signOut } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function signOutRedirect(){
      signOut()
      navigate("/", { replace: true })
    }

    return(
        <div>
          <p id='options-logout' onClick={handleShow}><LogoutIcon sx={{ fontSize: 22 }}/> Sair</p>

          <Modal
          show={show}
          onHide={handleClose}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

            <Modal.Header closeButton>
              <Modal.Title>Sair da conta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Você tem certeza de que gostaria de sair da conta?</p>      
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={() => signOutRedirect()}>
                Sair
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    )
}

export default Logout; 