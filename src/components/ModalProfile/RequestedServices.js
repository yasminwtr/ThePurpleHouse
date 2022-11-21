import React, { useState, useContext, useEffect } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../../services/contexts/auth'
import AvaliationIcon from '@mui/icons-material/CasesRounded'
import { useNavigate } from "react-router-dom";

const RequestedServices = (props) => {
  const { user } = useContext(AuthContext);
  const [requestedServicesByUser, setRequestedServicesByUser] = useState([]);
  const [requestedServicesForUser, setRequestedServicesForUser] = useState([]);
  const [numberServicesByUser, setServicesByUser] = useState('')
  const [numberServicesForUser, setServicesForUser] = useState('')
  const servicesByUserLength = requestedServicesByUser.length
  const servicesForUserLength = requestedServicesForUser.length
  const [show, setShow] = useState(false);
  const [modalServicesByUser, setModalServicesByUser] = useState(false);
  const [modalServicesForUser, setModalServicesForUser] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getRequestedServicesByUser() {
    const idPerson = user.idperson
    try {
      const response = await api.get(`/requestedServicesByUser/${idPerson}`);
      return setRequestedServicesByUser(response.data)

    } catch (error) {
      setRequestedServicesByUser([])
    }
  }

  async function getRequestedServicesForUser() {
    const idPerson = user.idperson
    try {
      const response = await api.get(`/requestedServicesForUser/${idPerson}`);
      return setRequestedServicesForUser(response.data)

    } catch (error) {
      setRequestedServicesForUser([])
    }
  }

  function validationNumberServicesByUser() {
    if (servicesByUserLength > 1) {
      setServicesByUser(`Você já solicitou ${servicesByUserLength} serviços.`)

    } else if (servicesByUserLength == 1) {
      setServicesByUser(`Você já solicitou ${servicesByUserLength} serviço.`)

    } else {
      setServicesByUser(`Você ainda não solicitou um serviço.`)
    }
  }

  function validationNumberServicesForUser() {
    if (servicesForUserLength > 1) {
      setServicesForUser(`Você possui ${servicesForUserLength} serviços solicitados por usuários.`)

    } else if (servicesForUserLength == 1) {
      setServicesForUser(`Você possui ${servicesForUserLength} serviço solicitado por usuário.`)

    } else {
      setServicesForUser(`Você ainda não possui um serviço solicitado por usuário.`)
    }
  }

  useEffect(() => {
    getRequestedServicesByUser()
    getRequestedServicesForUser()
  }, [])

  useEffect(() => {
    validationNumberServicesByUser()
    validationNumberServicesForUser()
  })

  return (
    <div>
      <p id='options-text' onClick={handleShow}><AvaliationIcon sx={{ fontSize: 19, marginRight: 0.8 }} />Serviços solicitados</p>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Serviços solicitados</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='modal-services-reviewed'>
            <div className='div-buttons-modal'>
              <Button id={modalServicesByUser ? 'services-reviewed-button-modal-selected' : 'services-reviewed-button-modal'} onClick={() => setModalServicesByUser(!modalServicesByUser)}>
                Serviços que solicitei
              </Button>
              <Button id={modalServicesForUser ? 'services-denounced-button-modal-selected' : 'services-denounced-button-modal'} onClick={() => setModalServicesForUser(!modalServicesForUser)}>
                Serviços solicitados
              </Button>
            </div>

            {modalServicesByUser || modalServicesForUser ? <></> : <></>}

            {modalServicesByUser ?
              <>
                <p>{numberServicesByUser}</p>
                {requestedServicesByUser.map((worker) => {
                  return (
                    <>
                      <div key={worker.idChat}>
                        <div className='block-requested-services'>
                          <div className='part1-avaliation-modal'>
                            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                          </div>
                          <label onClick={() => navigate('/WorkerProfile', { state: { workerId: worker.idworker, personWorkerId: worker.idperson, firstName: worker.firstnameperson2, lastName: worker.lastnameperson2, service: worker.servicecategory, email: worker.email, phone: worker.phonenumber, birthdate: worker.birthdate, city: worker.city, cityState: worker.localization, price: worker.priceservice, description: worker.descriptionservice, whatsapp: worker.whatsapp } })}
                            className='label-requested-info' >
                            {worker.firstnameperson2} {worker.lastnameperson2}, {worker.servicecategory}
                          </label>
                          <label className='label-status'> {worker.status} </label>
                        </div>
                      </div>
                    </>
                  )
                })}
              </>
              :
              <></>
            }

            {modalServicesForUser ?
              <>
                <p>{numberServicesForUser}</p>
                {requestedServicesForUser.map((worker) => {
                  return (
                    <>
                      <div key={worker.idChat}>
                        <div className='block-requested-services'>
                          <div className='part1-avaliation-modal'>
                            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                          </div>
                          <label className='label-requested-info'>
                            {worker.firstnameperson2} {worker.lastnameperson2}, {worker.servicecategory}
                          </label>
                          <label className='label-status'> {worker.status} </label>
                        </div>
                      </div>
                    </>
                  )
                })}
              </>
              :
              <></>
            }
          </div>


        </Modal.Body>

        <Modal.Footer>
          <Button id='close-button-modals-profile' onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RequestedServices; 