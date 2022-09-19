import React, { useEffect, useState, useContext } from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LeaveAvaliation from '../../components/Reviews/LeaveAvaliation'
import EditProfileWorker from '../../components/ModalProfile/EditProfileWorker'
import whatsapp from '../../components/assets/img/whatsapp.png'
import EmailIcon from '@mui/icons-material/EmailRounded'
import PhoneIcon from '@mui/icons-material/LocalPhoneRounded'
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded'
import LocationIcon from '@mui/icons-material/LocationOnRounded'
import PriceIcon from '@mui/icons-material/SellRounded'
import DescriptionIcon from '@mui/icons-material/InfoRounded'
import api from '../../api'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import WorkerReviews from '../../components/Reviews/WorkerReviews';
import AuthContext from '../../components/contexts/auth'
import AverageRating from '../../components/Reviews/AverageRating'
import { Carousel } from './Carousel';

const WorkerProfile = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [formattedBirthDate, setFormattedBirthDate] = useState('');
  const [workerReviews, setWorkerReviews] = useState([]);
  const [numberWorkerReviews, setNumberWorkerReviews] = useState('')
  const workerReviewsLength = workerReviews.length
  const dateAtual = new Date()
  const [year, month, day] = location.state.birthdate.split("T", 10)[0]?.split("-")
  const [idade, setIdade] = useState(dateAtual.getFullYear() - year);
  const navigate = useNavigate();

  async function getReviewsByWorker() {
    const idWorker = location.state.workerId
    try {
      const response = await api.get(`/reviewsByWorker/${idWorker}`);
      console.log(response);
      return setWorkerReviews(response.data)

    } catch (error) {
      setWorkerReviews([])
    }
  }

  function cacularIdade(idade) {
    if (month > dateAtual.getMonth() + 1
      || (month == dateAtual.getMonth() + 1 && day > dateAtual.getDate() + 1)) {
      idade--
    }
    return idade
  }

  useEffect(() => {
    setIdade(cacularIdade(idade))
  }, [])

  function validationWorkerNumberReviews() {
    if (workerReviewsLength > 1) {
      setNumberWorkerReviews(`${workerReviewsLength} avaliações`)

    } else if (workerReviewsLength == 1) {
      setNumberWorkerReviews(`${workerReviewsLength} avaliação`)

    } else {
      setNumberWorkerReviews(`Nenhuma avaliação`)
    }
  }

  async function createChat() {
    try {
      const response = await api.post('/chats', { idPerson1: user.idperson, firstNamePerson1: user.firstname, lastNamePerson1: user.lastname, idPerson2: location.state.personWorkerId, firstNamePerson2: location.state.firstName, lastNamePerson2: location.state.lastName });
      console.log('response', response);
      navigate("/Chat", { replace: true });

    } catch (error) {

    }
  }

  useEffect(() => {
    getReviewsByWorker()
  }, [])

  useEffect(() => {
    validationWorkerNumberReviews()
  })

  useEffect(() => {
    const [year, month, day] = location.state.birthdate.split("T", 10)[0]?.split("-")
    setFormattedBirthDate(`${day}/${month}/${year}`);
  }, [location])

  return (
    <div className='all-worker-profile'>
      <div className='container-worker-profile'>
        <div className='part1-worker-profile'>
          <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-worker-profile' alt="Profile" />
          <p id='name-worker-profile'>{location.state.firstName} {location.state.lastName}</p>
          <p id='categorie-worker-profile'>{location.state.service}, {`${idade} anos`}</p>
          <AverageRating />
          {user.idperson == location.state.personWorkerId ?
            <>
              <EditProfileWorker />
            </>
            :
            <>
              <button className='message-button' onClick={() => createChat()}>Enviar mensagem</button>
            </>
          }
        </div>

        <div className='part2-worker-profile'>
          <p id='title-worker-profile'><EmailIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> E-mail</p>
          <p id='text-worker-profile'>{location.state.email}</p>

          <div className='contact-worker-profile'>
            <div>
              <p id='title-worker-profile'><PhoneIcon sx={{ fontSize: 22, marginRight: 0.4 }} /> Telefone</p>
              <p id='text-worker-profile'>{location.state.phone}</p>
            </div>

            {location.state.whatsapp == null || location.state.whatsapp == '' ?
              <>

              </>
              :
              <>
                <a href={location.state.whatsapp} target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt='whatsapp' className='whatsapp' /></a>
              </>
            }
          </div>

          <p id='title-worker-profile'><CalendarIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Data de nascimento</p>
          <p id='text-worker-profile'>{formattedBirthDate}</p>

          <p id='title-worker-profile'><LocationIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Localização</p>
          <p id='text-worker-profile'>{location.state.city}, {location.state.cityState}</p>

          <p id='title-worker-profile'><PriceIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Preço médio dos serviços</p>
          <p id='text-worker-profile'>R$ {location.state.price}</p>

          <p id='title-worker-profile'><DescriptionIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Descrição</p>
          <p id='text-worker-profile'>{location.state.description}</p>
        </div>
      </div>

      <div className='container-blocks'>

        <Carousel />

        <div className='avaliations'>
          <p id='title-blocks'>Avaliações</p>

          <div className='feed-avaliations'>
            <div className='inicial-avaliations'>
              {user.idperson == location.state.personWorkerId ?
                <>
                  <p id='number-avaliations-else'>{numberWorkerReviews}</p>
                </>
                :
                <>
                  <LeaveAvaliation />
                  <p id='number-avaliations'>{numberWorkerReviews}</p>
                </>
              }
            </div>

            <WorkerReviews />

          </div>
        </div>

      </div>
    </div>
  )
}

export default WorkerProfile;