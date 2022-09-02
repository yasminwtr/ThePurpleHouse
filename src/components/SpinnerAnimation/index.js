import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import './styles.css'

export const SpinnerAnimation = () => {
  const [openSpinner, setOpenSpinner] = useState(false);

  function filterLocation() {
    setOpenSpinner(true)
  }

  return (
    <div>
      <Button variant="success" onClick={() => filterLocation()}>
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
