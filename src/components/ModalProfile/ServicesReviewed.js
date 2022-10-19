import React, { useState, useContext, useEffect } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../../services/contexts/auth'
import AvaliationIcon from '@mui/icons-material/StarRounded'
import MyReviews from './MyReviews'

const Avaliations = (props) => {
  const { user } = useContext(AuthContext);
  const [servicesReviewed, setServicesReviewed] = useState([]);
  const [numberReviews, setNumberReviews] = useState('')
  const reviewsLength = servicesReviewed.length
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getServicesReviewed(idperson) {
    try {
      const response = await api.get(`/servicesReviewed/${idperson}`);
      return setServicesReviewed(response.data)

    } catch (error) {
      setServicesReviewed([])
    }
  }

  function validationNumberReviews() {
    if(reviewsLength > 1) {
      setNumberReviews(`Você já avaliou ${reviewsLength} serviços.`)

    } else if(reviewsLength == 1) {
      setNumberReviews(`Você já avaliou ${reviewsLength} serviço.`)

    } else {
      setNumberReviews(`Você ainda não avaliou um serviço.`)
    }
  }

  useEffect(() => {
    getServicesReviewed(user.idperson)
  }, [])

  useEffect(() => {
    validationNumberReviews()
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
            <p>{numberReviews}</p>

            <MyReviews/>
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