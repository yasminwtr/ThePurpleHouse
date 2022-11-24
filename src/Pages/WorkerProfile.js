import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProfileWorker from '../components/ModalProfile/EditProfileWorker'
import whatsapp from '../assets/img/whatsapp.png'
import EmailIcon from '@mui/icons-material/EmailRounded'
import PhoneIcon from '@mui/icons-material/LocalPhoneRounded'
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded'
import LocationIcon from '@mui/icons-material/LocationOnRounded'
import PriceIcon from '@mui/icons-material/SellRounded'
import DescriptionIcon from '@mui/icons-material/InfoRounded'
import { useLocation, useNavigate } from 'react-router-dom';
import WorkerReviews from '../components/Reviews/WorkerReviews';
import WorkerComplaints from '../components/Reviews/WorkerComplaints';
import AuthContext from '../services/contexts/auth'
import AverageRating from '../components/Reviews/AverageRating'
import { Carousel } from '../components/Carousel';
import ReviewsImage from "../assets/img/review.png";
import ModalExistingChat from '../components/Chat/ModalExistingChat'
import api from '../api'

const WorkerProfile = () => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  const navigate = useNavigate();

  const [formattedBirthDate, setFormattedBirthDate] = useState('');

  const [workerReviews, setWorkerReviews] = useState([]);

  const [workerComplaints, setWorkerComplaints] = useState([]);

  const [chat, setChat] = useState([])

  const [numberWorkerReviews, setNumberWorkerReviews] = useState('')
  const workerReviewsLength = workerReviews.length

  const [numberWorkerComplaints, setNumberWorkerComplaints] = useState('')
  const workerComplaintsLength = workerComplaints.length

  const dateAtual = new Date()

  const [year, month, day] = location.state.birthdate.split("T", 10)[0]?.split("-")

  const [idade, setIdade] = useState(dateAtual.getFullYear() - year);

  const [showAvaliations, setShowAvaliations] = useState(false);

  const [showDenounces, setShowDenounces] = useState(false);

  const [modalChat, setModalChat] = useState(false);

  async function getReviewsByWorker() {
    const idWorker = location.state.workerId

    try {
      const response = await api.get(`/reviewsByWorker/${idWorker}`);
      return setWorkerReviews(response.data)

    } catch (error) {
      setWorkerReviews([])
    }
  }

  // const reload = () => {
  //   history.push(location.pathname);
  // };

  async function getComplaintsByWorker() {
    const idWorker = location.state.workerId

    try {
      const response = await api.get(`/complaintsByWorker/${idWorker}`);
      return setWorkerComplaints(response.data)

    } catch (error) {
      setWorkerComplaints([])
    }
  }

  function cacularIdade(idade) {
    if (month > dateAtual.getMonth() + 1
      || (month === dateAtual.getMonth() + 1 && day > dateAtual.getDate() + 1)) {
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

    } else if (workerReviewsLength === 1) {
      setNumberWorkerReviews(`${workerReviewsLength} avaliação`)

    } else {
      setNumberWorkerReviews(`Nenhuma avaliação`)
    }
  }

  function validationWorkerNumberComplaints() {
    if (workerComplaintsLength > 1) {
      setNumberWorkerComplaints(`${workerComplaintsLength} denúncias`)

    } else if (workerComplaintsLength === 1) {
      setNumberWorkerComplaints(`${workerComplaintsLength} denúncia`)

    } else {
      setNumberWorkerComplaints(`Nenhuma denúncia`)
    }
  }

  async function getIfChatExists() {
    const idPerson1 = user.idperson
    const idPerson2 = location.state.personWorkerId
    try {
      const response = await api.get(`/chats/${idPerson1}/${idPerson2}`);
      setChat(response.data)

    } catch (error) {
      setChat([])
    }
  }

  async function createChat() {
    try {
      await api.post('/chats',
        {
          idPerson1: user.idperson,
          firstNamePerson1: user.firstname,
          lastNamePerson1: user.lastname,
          idPerson2: location.state.personWorkerId,
          firstNamePerson2: location.state.firstName,
          lastNamePerson2: location.state.lastName,
          idWorker: location.state.workerId,
          serviceCategory: location.state.service,
          status: 'Aberto'
        });
      navigate("/Chat", { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  async function requestService() {
    if (chat.length === 0) {
      createChat()

    } else {
      setModalChat(!modalChat)
    }
  }

  useEffect(() => {
    getReviewsByWorker()
    getComplaintsByWorker()
    getIfChatExists()
  }, [])

  useEffect(() => {
    validationWorkerNumberReviews()
    validationWorkerNumberComplaints()
  })

  useEffect(() => {
    const [year, month, day] = location.state.birthdate.split("T", 10)[0]?.split("-")
    setFormattedBirthDate(`${day}/${month}/${year}`);
  }, [location])

  return (
    <div className='worker-profile'>
      <div className='container-worker-profile'>
        <div className='section-1'>
          <div className='box-worker'>
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt="Profile" id='icon-worker-profile' />

            <div className='name-box-worker'>
              <p id='name-worker'>{location.state.firstName} {location.state.lastName} </p>
              <p id='categorie-worker'>{location.state.service}, {`${idade} anos`}</p>

              <AverageRating />
            </div>

            {user.idperson === location.state.personWorkerId
              ?
              <EditProfileWorker />
              :
              <button onClick={() => requestService()}>
                Solicitar serviço
              </button>
            }
          </div>
          {/* <div className='background-infos'></div> */}
          {/* <div className='box-worker-profile'>
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt="Profile" />

            <div>
              <p id='name-worker'>
                {location.state.firstName} {location.state.lastName}
              </p>
              <p id='categorie-worker'>
                {location.state.service}, {`${idade} anos`}
              </p>

              <AverageRating />

              {user.idperson === location.state.personWorkerId
                ?
                <EditProfileWorker />
                :
                <button onClick={() => requestService()}>
                  Solicitar serviço
                </button>
              }
            </div>
          </div> */}
        </div>

        {modalChat ? <ModalExistingChat createChat={createChat} /> : <></>}

        <div className='section2'>
          <div className='container-infos'>

            <div className="container-pt1">
              <p id='title-worker-profile'>
                <EmailIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
                E-mail
              </p>
              <p id='text-worker-profile'>
                {location.state.email}
              </p>
              <p id='title-worker-profile'>
                <PhoneIcon sx={{ fontSize: 22, marginRight: 0.4 }} />
                Telefone
              </p>
              <p id='text-worker-profile'>
                {location.state.phone}
              </p>

              {location.state.whatsapp === null || location.state.whatsapp === '' ? <></> :
                <>
                  <a href={location.state.whatsapp} target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt='whatsapp' />
                  </a>
                </>
              }

              <p id='title-worker-profile'>
                <CalendarIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
                Data de nascimento
              </p>
              <p id='text-worker-profile'>
                {formattedBirthDate}
              </p>

              <p id='title-worker-profile'>
                <LocationIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
                Localização
              </p>
              <p id='text-worker-profile'>
                {location.state.city}, {location.state.cityState}
              </p>
            </div>
            <div className="container-pt2">
              <p id='title-worker-profile'>
                <PriceIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
                Preço médio dos serviços
              </p>
              <p id='text-worker-profile'>
                R$ {location.state.price}
              </p>

              <p id='title-worker-profile'>
                <DescriptionIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
                Descrição
              </p>
              <p id='text-worker-profile'>
                {location.state.description}
              </p>
            </div>
          </div>

          <div className='container-avaliations'>
            <div className='avaliations'>
              <p id='title-blocks'>Avaliações</p>

              <div className='feed-avaliations'>
                <div className='inicial-avaliations'>
                  <p id={showAvaliations ? 'number-avaliations-selected' : 'number-avaliations'}
                    onClick={() => setShowAvaliations(!showAvaliations)}>
                    {numberWorkerReviews}
                  </p>
                  <p id={showDenounces ? 'number-complaints-selected' : 'number-complaints'}
                    onClick={() => setShowDenounces(!showDenounces)}>
                    {numberWorkerComplaints}
                  </p>
                </div>

                {showAvaliations || showDenounces ?
                  <></>
                  :
                  <>
                    <div className='inicial-worker-profile-review'>
                      <p>
                        Selecione "avaliações" e/ou "denúncias" acima para consultar os registros.
                      </p>
                      <img src={ReviewsImage} alt="ReviewsImage" width={'100px'} id='reviews-image' />
                    </div>
                  </>
                }

                {showAvaliations ? <WorkerReviews workerReviews={workerReviews} /> : <></>}

                {showDenounces ? <WorkerComplaints workerComplaints={workerComplaints} /> : <></>}
              </div>
            </div>
            <p id='title-blocks'>
              Galeria de serviços
            </p>
            <Carousel />
          </div>
        </div>
      </div>
    </div >
  )
}

export default WorkerProfile;