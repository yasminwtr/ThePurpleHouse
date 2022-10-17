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
  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getRequestedServices(idperson) {
    try {
      const response = await api.get(`/getRequestedServices/${idperson}`);
      console.log(response.data);
      return setRequestedServices(response.data)

    } catch (error) {
      setRequestedServices([])
    }
  }

  function validationRequestedServices() {
    if (requestedServicesLength > 1) {
      setRequestedServicesCount(`Você solicitou ${requestedServicesLength} serviços.`)

    } else if (requestedServicesLength == 1) {
      setRequestedServicesCount(`Você solicitou ${requestedServicesLength} serviço.`)

    } else {
      setRequestedServicesCount(`Você ainda não finalizou um serviço.`)
    }
  }

  useEffect(() => {
    getRequestedServices(user.idperson)
  }, [])

  useEffect(() => {
    validationRequestedServices()
  })

  return (
    <div>
      <p id='options-text' onClick={handleShow}><AvaliationIcon sx={{ fontSize: 22, marginRight: 0.4 }} />Serviços solicitados</p>

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
          <p>{requestedServicesCount}</p>
          {
            requestedServices.map((worker) => {
              return (
                <>
                  <div key={worker.idworker}>
                    <div className='block-requested-services'>
                      <div className='part1-avaliation-modal'>
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation-modal' alt="Profile" />
                      </div>
                      <label onClick={() => navigate('/WorkerProfile', { state: { workerId: worker.idworker, personWorkerId: worker.idperson, firstName: worker.firstnameworker, lastName: worker.lastnameworker, service: worker.titleservice, email: worker.email, phone: worker.phonenumber, birthdate: worker.birthdate, city: worker.city, cityState: worker.localization, price: worker.priceservice, description: worker.descriptionservice, whatsapp: worker.whatsapp } })}
                        className='label-requested-info' > {worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice} </label>
                    </div>
                  </div>
                </>
              )
            }
            )}
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