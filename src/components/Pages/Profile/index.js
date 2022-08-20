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
        <div className='all-profile'>
            <div className='container-profile'>
                <div className='part1-profile'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-profile' alt="Profile"/>
                    <p id='name-profile'>Mario Silvo</p>
                </div>

                <Row className="part2-profile">
                    <Col md>
                        <p id='title-profile'><EmailIcon sx={{ fontSize: 20 }}/> E-mail</p>
                        <p id='text-profile'>mariosilva@gmail.com</p>

                        <p id='title-profile'><PhoneIcon sx={{ fontSize: 22 }}/> Telefone</p>
                        <p id='text-profile'>(48) 99160-1340</p>

                        <p id='title-profile'><CalendarIcon sx={{ fontSize: 20 }}/> Data de nascimento</p>
                        <p id='text-profile'>18/02/2004</p>
                    </Col>

                    <Col md={4}>
                        <p id='service-title-profile'><ServiceIcon sx={{ fontSize: 22 }}/> Serviços anunciados</p>
                        <p id='service-text-profile'>Jardineiro</p>
                    </Col>
                </Row>   
            </div>

            <div className='container-config'>
                <div className='options-config'>
                    <p id='options-title'>Configurações</p>
                    <EditAccount/>
                    <DeleteAccount/>
                </div>

                <div className='options-config'>
                    <p id='options-title'>Serviços</p>
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