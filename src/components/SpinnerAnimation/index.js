import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import './styles.css'
import api from 'api';

export const SpinnerAnimation = () => {
  const [openSpinner, setOpenSpinner] = useState(false);
  const [workerLocation, setWorkerLocation] = useState([])

  
  function showSpinner() {
    getLocation()
  }
  
  async function getLocation() {
    try {
      const response = await api.get(`/locationWorkers`);
      filterLocation()
      setOpenSpinner(true)
      return setWorkerLocation(response.data)
    } catch (error) {
      console.log('error',error);
    }
  }
  
  function filterLocation() {
    workerLocation.map((item) => {
      return(
        <p>
          {item.city}
        </p>
      )
    })
  }

  return (
    <div>
      <Button variant="success" onClick={() => showSpinner()}>
        Filtrar
        {openSpinner == true ?
          <Spinner className='spinner' animation="border" size="sm" value={openSpinner} />
          :
          <></>
        }
      </Button>
    </div>
  )
}
