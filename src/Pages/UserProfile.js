import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditAccount from '../components/ModalProfile/EditAccount'
import DeleteAccount from '../components/ModalProfile/DeleteAccount'
import ServicesReviewed from '../components/ModalProfile/ServicesReviewed'
import AnnounceService from '../components/ModalProfile/AnnounceService'
import CancelService from '../components/ModalProfile/CancelService'
import Logout from '../components/ModalProfile/Logout'
import RequestedServices from 'components/ModalProfile/RequestedServices';
import EmailIcon from '@mui/icons-material/EmailRounded'
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded'
import ServiceIcon from '@mui/icons-material/HomeRepairServiceRounded'
import AuthContext from '../services/contexts/auth'
import api from 'api'
import { useNavigate } from 'react-router-dom';
import ProfileIcon from "../assets/img/user2.png";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userServices, setUserServices] = useState([])
  const [formattedBirthDate, setFormattedBirthDate] = useState('');
  const navigate = useNavigate()

  async function getServices() {
    try {
      const response = await api.get(`/getServicesFromUser/${user.idperson}`);
      return setUserServices(response.data)
    } catch (error) {
      setUserServices([])
    }
  }

  useEffect(() => {
    getServices()
  }, [])

  useEffect(() => {
    const [year, month, day] = user.birthdate.split("T", 10)[0]?.split("-")
    setFormattedBirthDate(`${day}/${month}/${year}`);
  }, [user])

  return (
    <div className='all-profile'>
        <div className='container-config'>
        <div className='options-config'>
          <p id='options-title'>Configurações</p>
          <EditAccount />
          <DeleteAccount />
        </div>

        <div className='options-config'>
          <p id='options-title'>Serviços</p>
          <RequestedServices/>
          <ServicesReviewed />
          <AnnounceService getServices={getServices} />
          <CancelService getServices={getServices} />
        </div>

        <Logout />
      </div>
      <div className='container-profile'>


<div class="part1-profile">
      <div class="div-profile"></div>
      <div class="profile-container">
        <div class="part1-profile1">
          <div class="div-image-profile">
            <img src={ProfileIcon} id='icon-profile' alt="Profile" />
          </div>
          <p id='name-profile'>{user.firstname} {user.lastname}</p>
        </div>
        
      </div>
    </div>
    <div className="part2__profile">

          <Row className="container-pt2-profile">
            <div className="elements">
            <Col md>
              <p id='title-profile'><EmailIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> E-mail</p>
              <p id='text-profile'>{user.email}</p>
            </Col>
            </div>

            <div className="elements">
            <Col md>
              <p id='title-profile'><CalendarIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Data de nascimento</p>
              <p id='text-profile'>{formattedBirthDate}</p>
            </Col>
            </div>

            <div className="elements">
             <Col className='col-services'>
              <p id='service-title-profile'><ServiceIcon sx={{ fontSize: 22, marginRight: 0.5 }} /> Serviços anunciados</p>
              {
                userServices.map((item) => {
                  return (
                    <p id='service-text-profile' key={item.idworker} onClick={() => navigate('/WorkerProfile', { state: { workerId: item.idworker, personWorkerId: item.idperson, firstName: item.firstname, lastName: item.lastname, service: item.titleservice, email: item.email, phone: item.phonenumber, birthdate: item.birthdate, city: item.city, cityState: item.localization, price: item.priceservice, description: item.descriptionservice, whatsapp: item.whatsapp } })}>
                      {item.titleservice}
                    </p>
                  )
                })
              }
             </Col>
            </div>
            
          </Row>
        </div>
      </div>
    </div >
  )
}

export default Profile;