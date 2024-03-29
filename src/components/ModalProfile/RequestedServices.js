import React, { useState, useContext, useEffect } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../../services/contexts/auth'
import AvaliationIcon from '@mui/icons-material/CasesRounded'
import { useNavigate } from "react-router-dom";
import { Image, Avatar, Button, Tooltip } from 'antd';
import ProfileIcon from "../../assets/img/user2.png";
import CancelIcon from '@mui/icons-material/DoDisturbRounded'
import CloseIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import ReportIcon from '@mui/icons-material/ErrorOutlineRounded';
import OpenIcon from '@mui/icons-material/SupervisedUserCircleRounded';

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
      <p id='options-text' onClick={handleShow}><AvaliationIcon sx={{ fontSize: 19, marginRight: 0.8 }} />
        Solicitados
      </p>

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
                            {
                              worker.profilepicture ?
                                <Avatar
                                  size={45}
                                  src={worker.profilepicture}
                                />
                                :
                                <Avatar
                                  size={45}
                                  src={ProfileIcon}
                                />
                            }
                          </div>
                          <label onClick={() => navigate('/WorkerProfile', {
                            state: {
                              workerId: worker.idworker,
                              personWorkerId: worker.idperson,
                              firstName: worker.firstnameperson2,
                              lastName: worker.lastnameperson2,
                              service: worker.servicecategory,
                              email: worker.email,
                              phone: worker.phonenumber,
                              birthdate: worker.birthdate,
                              city: worker.city,
                              cityState: worker.localization,
                              price: worker.priceservice,
                              description: worker.descriptionservice,
                              whatsapp: worker.whatsapp,
                              workerImg: worker.profilepicture
                            }
                          })}
                            className='label-requested-info' >
                            {worker.firstnameperson2} {worker.lastnameperson2}, {worker.servicecategory}
                          </label>

                          {worker.status == 'Finalizado' ? <><Tooltip title="Finalizado" placement="bottomLeft" color='#56a54f'><CloseIcon id='icon-close-profile' /></Tooltip></> : <></>}
                          {worker.status == 'Aberto' ? <><Tooltip title="Aberto" placement="bottomLeft" color='#745b9c'><OpenIcon id='icon-open-profile' /></Tooltip></> : <></>}
                          {worker.status == 'Denunciado' ? <><Tooltip title="Denunciado" placement="bottomLeft" color='#bb3f3f'><ReportIcon id='icon-report-profile' /></Tooltip></> : <></>}
                          {worker.status == 'Cancelado' ? <><Tooltip title="Cancelado" placement="bottomLeft" color='#596066'><CancelIcon id='icon-cancel-profile' /></Tooltip></> : <></>}
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
                            {
                              worker.profilepicture ?
                                <Avatar
                                  size={45}
                                  src={worker.profilepicture}
                                />
                                :
                                <Avatar
                                  size={45}
                                  src={ProfileIcon}
                                />
                            }
                          </div>
                          <label className='label-requested-info'>
                            {worker.firstnameperson2} {worker.lastnameperson2}, {worker.servicecategory}
                          </label>
                          
                          {worker.status == 'Finalizado' ? <><Tooltip title="Finalizado" placement="bottomLeft" color='#56a54f'><CloseIcon id='icon-close-profile' /></Tooltip></> : <></>}
                          {worker.status == 'Aberto' ? <><Tooltip title="Aberto" placement="bottomLeft" color='#745b9c'><OpenIcon id='icon-open-profile' /></Tooltip></> : <></>}
                          {worker.status == 'Denunciado' ? <><Tooltip title="Denunciado" placement="bottomLeft" color='#bb3f3f'><ReportIcon id='icon-report-profile' /></Tooltip></> : <></>}
                          {worker.status == 'Cancelado' ? <><Tooltip title="Cancelado" placement="bottomLeft" color='#596066'><CancelIcon id='icon-cancel-profile' /></Tooltip></> : <></>}
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