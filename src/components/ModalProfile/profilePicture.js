import React, { useState, useContext } from 'react';
import AuthContext from '../../services/contexts/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import LogoutIcon from '@mui/icons-material/ExitToAppRounded'
import { useNavigate } from "react-router-dom";
import { BsCamera } from 'react-icons/bs'

const ProfilePicture = (props) => {
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
          {/* <p id='options-logout' onClick={handleShow}><LogoutIcon sx={{ fontSize: 22 }}/> Sair</p> */}
          <div className='iconFoto'>
              <BsCamera onClick={handleShow} className='IconPicture'/>
          </div>

          <Modal
          show={show}
          onHide={handleClose}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

            <Modal.Header closeButton>
              <Modal.Title>Adicione sua foto de perfil</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Adicione uma foto aqui!</p>      
            </Modal.Body>

            <Modal.Footer>
              <Button id='delete-button-modals-profile' onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    )
}

export default ProfilePicture; 