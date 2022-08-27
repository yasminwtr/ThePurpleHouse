import React, { useState, useContext, useEffect } from 'react';
import '../styles.css'
import api from "../../../../api";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../../../contexts/auth'
import AvaliationIcon from '@mui/icons-material/StarRounded'
import MyReviews from './MyReviews'

const Avaliations = (props) => {
  const { user } = useContext(AuthContext);
  const [workersReviewed, setWorkersReviewed] = useState([]);
  const [numberReviews, setNumberReviews] = useState('')
  const reviewsLength = workersReviewed.length
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getWorkersReviewed(idperson) {
    try {
      const response = await api.get(`/workersReviewed/${idperson}`);
      return setWorkersReviewed(response.data)

    } catch (error) {
      setWorkersReviewed([])
    }
  }

  function validationNumberReviews() {
    if(reviewsLength > 1) {
      setNumberReviews(`Você já avaliou ${reviewsLength} serviços.`)

    } else if(reviewsLength === 1) {
      setNumberReviews(`Você já avaliou ${reviewsLength} serviço.`)

    } else {
      setNumberReviews(`Você ainda não avaliou um serviço.`)
    }
  }

  useEffect(() => {
    getWorkersReviewed(user.idperson)
  }, [])

  useEffect(() => {
    validationNumberReviews()
  })

  return (
    <div>
      <p id='options-text' onClick={handleShow}><AvaliationIcon sx={{ fontSize: 22, marginRight: 0.5 }} /> Serviços avaliados</p>

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
          <div className='feed-avaliations-modal'>
            <p>{numberReviews}</p>

            <MyReviews/>
          </div>


        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Avaliations; 