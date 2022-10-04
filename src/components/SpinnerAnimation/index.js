import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'antd';

import './styles.css'

export const SpinnerAnimation = (props) => {
  const [openSpinner, setOpenSpinner] = useState(false);

  const showSpinner = () => {
    props.functionToRun();
    setOpenSpinner(true)
  }

  return (
    <div>
      <Button id='save-button-modals-profile' onClick={() => showSpinner()}>
        Filtrar Localização
        {openSpinner == true ?
          <Spinner className='spinner' animation="border" size="sm" value={openSpinner} />
          :
          <></>
        }
      </Button>
    </div>
  )
}
