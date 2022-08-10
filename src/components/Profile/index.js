import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EditAccount from './Modal/EditAccount'
import DeleteAccount from './Modal/DeleteAccount'
import Avaliations from './Modal/Avaliations'
import AnnounceService from './Modal/AnnounceService'
import CancelService from './Modal/CancelService'
import Logout from './Modal/Logout'

import EmailIcon from '@mui/icons-material/EmailRounded'
import PhoneIcon from '@mui/icons-material/LocalPhoneRounded'
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded'
import ServiceIcon from '@mui/icons-material/HomeRepairServiceRounded'

const Profile = () => {
    return(
        <div className='allProfile'>
            <div className='containerProfile'>
                <div className='part1Profile'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='iconProfile' alt="Profile"/>
                    <p id='nameProfile'>Mario Silvo</p>
                </div>

                <Row className="part2Profile">
                    <Col md>
                        <p id='titleProfile'><EmailIcon sx={{ fontSize: 20 }}/> E-mail</p>
                        <p id='textProfile'>mariosilva@gmail.com</p>

                        <p id='titleProfile'><PhoneIcon sx={{ fontSize: 22 }}/> Telefone</p>
                        <p id='textProfile'>(48) 99160-1340</p>

                        <p id='titleProfile'><CalendarIcon sx={{ fontSize: 20 }}/> Data de nascimento</p>
                        <p id='textProfile'>18/02/2004</p>
                    </Col>

                    <Col md={4}>
                        <p id='serviceTitleProfile'><ServiceIcon sx={{ fontSize: 22 }}/> Serviços anunciados</p>
                        <p id='serviceTextProfile'>Jardineiro</p>
                    </Col>
                </Row>   
            </div>

            <div className='containerConfig'>
                <div className='optionsConfig'>
                    <p id='optionsTitle'>Configurações</p>
                    <EditAccount/>
                    <DeleteAccount/>
                </div>

                <div className='optionsConfig'>
                    <p id='optionsTitle'>Serviços</p>
                    <Avaliations/>
                    <AnnounceService/>
                    <CancelService/>
                </div>

                <Logout/>
            </div>
        </div>
    )
}

export default Profile;