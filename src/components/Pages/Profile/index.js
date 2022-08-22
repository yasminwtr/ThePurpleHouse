import React, { useContext, useEffect, useState } from 'react'
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
import AuthContext from '../../contexts/auth';
import api from '../../../api';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userServices, setUserServices] = useState([])

  // async function getServicesFromUser(idperson) {
  //   try {
  //     const response = await api.get(`/servicesFromUser/${idperson}`);      console.log('userServices',userServices);
  //     console.log('response.data',response.data);
  //     // return setUserServices(response.data)
  //     console.log('setUserServices(response.data)',setUserServices(response.data));
  //   } catch (error) {
  //     console.log('aa');
  //     setUserServices([])
  //   }
  // }

  // useEffect(() => {
  //   getServicesFromUser(user.idperson)
  //   // console.log(user.idperson);
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/getServicesFromUser/${idperson}');
      setUserServices(response.data)
    }
    fetchData()
      .catch(console.error);
  }, [])


  return (
    <div className='all-profile'>
      <div className='container-profile'>
        <div className='part1-profile'>
          <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-profile' alt="Profile" />
          <p id='name-profile'>{user.fullname}</p>
        </div>

        <Row className="part2-profile">
          <Col md>
            <p id='title-profile'><EmailIcon sx={{ fontSize: 20 }} /> E-mail</p>
            <p id='text-profile'>{user.email}</p>

            <p id='title-profile'><PhoneIcon sx={{ fontSize: 22 }} /> Telefone</p>
            <p id='text-profile'>{user.phonenumber}</p>

            <p id='title-profile'><CalendarIcon sx={{ fontSize: 20 }} /> Data de nascimento</p>
            <p id='text-profile'>{user.birthdate}</p>
          </Col>

          <Col md={4}>
            <p id='service-title-profile'><ServiceIcon sx={{ fontSize: 22 }} /> Serviços anunciados</p>
            <p id='service-text-profile'>aaa</p>
          </Col>
        </Row>
      </div>

      <div className='container-config'>
        <div className='options-config'>
          <p id='options-title'>Configurações</p>
          <EditAccount />
          <DeleteAccount />
        </div>

        <div className='options-config'>
          <p id='options-title'>Serviços</p>
          <Avaliations />
          <AnnounceService />
          <CancelService />
        </div>

        <Logout />
      </div>
    </div>
  )
}

export default Profile;