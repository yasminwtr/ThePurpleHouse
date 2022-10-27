import React, { useState, useContext, useEffect } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../../services/contexts/auth'
import AvaliationIcon from '@mui/icons-material/StarRounded'
import { useNavigate } from "react-router-dom";

const RequestedServices = (props) => {
  const { user } = useContext(AuthContext);
  const [requestedServices, setRequestedServices] = useState([]);
  const [requestedServicesCount, setRequestedServicesCount] = useState('')
  const requestedServicesLength = requestedServices.length
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [requestedServicesWorker, setRequestedServicesWorker] = useState(false);
  const [requestedServicesUser, setRequestedServicesUser] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [changeTitle, setChangeTitle] = useState(false);

  async function getRequestedServices(idChat) {
    try {
      const response = await api.get(`/getRequestedServices/${idChat}`);
      return setRequestedServices(response.data)
    } catch (error) {
      console.log('error', error);
      setRequestedServices([])
    }
  }

  function validationRequestedServices() {
    if (requestedServicesLength == 0) {
      setRequestedServicesCount(`Você ainda não solicitou um serviço.`)
    }

    requestedServices.map((worker) => {
      if (requestedServicesLength > 1 && worker.idperson2 == user.idperson) {
        setRequestedServicesCount(`Você teve ${requestedServicesLength} serviços solicitados.`)
        setChangeTitle(true)
      } else if (requestedServicesLength == 1 && worker.idperson2 == user.idperson) {
        setRequestedServicesCount(`Você teve ${requestedServicesLength} serviço solicitado.`)
        setChangeTitle(true)
      } else if (requestedServicesLength == 1 && worker.idperson1 == user.idperson) {
        setRequestedServicesCount(`Você solicitou ${requestedServicesLength} serviço.`)
        setChangeTitle(false)
      } else if (requestedServicesLength > 1 && worker.idperson1 == user.idperson) {
        setRequestedServicesCount(`Você solicitou ${requestedServicesLength} serviços.`)
        setChangeTitle(false)
      }
    })
  }

  useEffect(() => {
    getRequestedServices(user.idperson)
  }, [])

  useEffect(() => {
    validationRequestedServices()
  })

  return (
    <div>
      <p id='options-text' onClick={handleShow}>
        <AvaliationIcon sx={{ fontSize: 22, marginRight: 0.4 }} />
        Serviços solicitados
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        {changeTitle === true ?
          <>
            <Modal.Header closeButton>
              <Modal.Title>Usuários que solicitaram seu serviço</Modal.Title>
            </Modal.Header>
          </>
          : <>
            <Modal.Header closeButton>
              <Modal.Title>Serviços solicitados</Modal.Title>
            </Modal.Header>
          </>
        }

        <div className='div-buttons-modal'>
          <Button className={requestedServicesWorker ? 'requested-service-buttons-modal-selected mb-3 mt-3 ' : 'requested-service-buttons-modal mb-3 mt-3'} onClick={() => setRequestedServicesWorker(true)}>
            Usuários que solicitaram o meu serviço
          </Button>
          <Button className={requestedServicesUser ? 'requested-service-buttons-modal-selected' : 'requested-service-buttons-modal mb-3'} onClick={() => setRequestedServicesUser(true)}>
            Serviços que eu solicitei
          </Button>
        </div>

        {requestedServicesWorker ?

          <Modal.Body className='modal-requested-services'
          >
            <p>{requestedServicesCount}</p>
            {
              requestedServices.map((worker) => {
                if (worker.idperson1 == user.idperson) {
                  return <>
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
                } else {
                  return <>
                    <div key={worker.idChat}>
                      <div className='block-requested-services'>
                        <div className='part1-avaliation-modal'>
                          <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                        </div>
                        <label className='label-requested-info' >
                          {worker.firstnameperson1} {worker.lastnameperson1}, {worker.servicecategory}
                        </label>
                        <label className='label-status' > {worker.status} </label>
                      </div>
                    </div>
                  </>
                }
              })
            }
          </Modal.Body>
          :
          <>
          </>
        }

        <Modal.Footer>
          <Button id='close-button-modals-profile' onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
  )
}

export default RequestedServices; 