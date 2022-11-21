import React, { useState, useContext, useEffect } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../../services/contexts/auth'
import AvaliationIcon from '@mui/icons-material/StarRounded'
import MyReviews from './MyReviews'
import MyComplaints from './MyComplaints'

const Avaliations = (props) => {
  const { user } = useContext(AuthContext);
  const [servicesReviewed, setServicesReviewed] = useState([]);
  const [servicesDenounced, setServicesDenounced] = useState([]);
  const [numberReviews, setNumberReviews] = useState('')
  const [numberDenounce, setNumberDenounce] = useState('')
  const reviewsLength = servicesReviewed.length
  const denounceLength = servicesDenounced.length
  const [show, setShow] = useState(false);
  const [modalAvaliations, setModalAvaliations] = useState(false);
  const [modalDenounces, setModalDenounces] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getServicesReviewed() {
    const idPerson = user.idperson
    try {
      const response = await api.get(`/servicesReviewed/${idPerson}`);
      return setServicesReviewed(response.data)

    } catch (error) {
      setServicesReviewed([])
    }
  }

  async function getServicesDenounced() {
    const idPerson = user.idperson
    try {
      const response = await api.get(`/denounce/${idPerson}`);
      return setServicesDenounced(response.data)

    } catch (error) {
      setServicesDenounced([])
    }
  }

  function validationNumberReviews() {
    if (reviewsLength > 1) {
      setNumberReviews(`Você já avaliou ${reviewsLength} serviços.`)

    } else if (reviewsLength == 1) {
      setNumberReviews(`Você já avaliou ${reviewsLength} serviço.`)

    } else {
      setNumberReviews(`Você ainda não avaliou um serviço.`)
    }
  }

  function validationNumberDenounce() {
    if (denounceLength > 1) {
      setNumberDenounce(`Você já denunciou ${denounceLength} serviços.`)

    } else if (denounceLength == 1) {
      setNumberDenounce(`Você já denunciou ${denounceLength} serviço.`)

    } else {
      setNumberDenounce(`Você ainda não denunciou um serviço.`)
    }
  }

  useEffect(() => {
    getServicesReviewed()
    getServicesDenounced()
  }, [])

  useEffect(() => {
    validationNumberReviews()
    validationNumberDenounce()
  })

  return (
    <div>
      <p id='options-text' onClick={handleShow}><AvaliationIcon sx={{ fontSize: 22, marginRight: 0.4 }} />Serviços avaliados</p>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Serviços avaliados</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='modal-services-reviewed'>
            <div className='div-buttons-modal'>
              <Button id={modalAvaliations ? 'services-reviewed-button-modal-selected' : 'services-reviewed-button-modal'} onClick={() => setModalAvaliations(!modalAvaliations)}>
                Avaliados
              </Button>
              <Button id={modalDenounces ? 'services-denounced-button-modal-selected' : 'services-denounced-button-modal'} onClick={() => setModalDenounces(!modalDenounces)}>
                Denunciados
              </Button>
            </div>

            {modalAvaliations || modalDenounces ? <></> : <></>}

            {modalAvaliations ?
              <>
                <p>{numberReviews}</p>
                <MyReviews servicesReviewed={servicesReviewed} setServicesReviewed={setServicesReviewed} getServicesReviewed={getServicesReviewed}/>
              </>
              :
              <></>
            }

            {modalDenounces ?
              <>
                <p>{numberDenounce}</p>
                <MyComplaints servicesDenounced={servicesDenounced} setServicesDenounced={setServicesDenounced} getServicesDenounced={getServicesDenounced}/>
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

export default Avaliations; 