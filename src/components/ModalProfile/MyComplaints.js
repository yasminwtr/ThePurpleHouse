import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileIcon from "../../assets/img/user2.png";
import { Image, Avatar, Button, notification } from 'antd';

const MyComplaints = (props) => {
  const { servicesDenounced, setServicesDenounced, getServicesDenounced } = props

  const deleteComplaint = async (deleteId) => {
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-type': 'aplication/json' }
    }
    try {
      await fetch(`https://the-purple-house.up.railway.app/denounce/` + deleteId, requestOptions)
      setServicesDenounced(servicesDenounced.filter(worker => worker.iddenounce !== deleteId))
      openNotificationSuccess()
      getServicesDenounced()

    } catch (error) {
      openNotificationError()
    }
  }

  const openNotificationSuccess = () => {
    notification["success"]({
      message: 'Denúncia excluída com sucesso.',
      duration: 2,
      placement: 'top'
    });
  };

  const openNotificationError = () => {
    notification["error"]({
      message: 'Não foi possível completar a exclusão. Por favor, tente novamente mais tarde.',
      duration: 2,
      placement: 'top'
    });
  };

  return (
    <div>
      {
        servicesDenounced.map((worker) => {
          const [year, month, day] = worker.denouncedate.split("T", 10)[0]?.split("-")
          const formattedDateDenounce = `${day}/${month}/${year}`

          return <>
            <div className='individual-avaliation-modal' key={worker.iddenounce}>
              <div className='block-avaliation-modal'>
                <div className='part1-avaliation-modal'>
                  {
                    worker.profilepicture ?
                      <Avatar
                        size={50}
                        src={worker.profilepicture}
                      />
                      :
                      <Avatar
                        size={50}
                        src={ProfileIcon}
                      />
                  }
                </div>

                <div className='avaliation-denounce-info'>
                  <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateDenounce}</p>
                  <div>{worker.selectedoption}</div>
                </div>

                <Button id='delete-review-button' onClick={() => deleteComplaint(worker.iddenounce)}>Excluir</Button>
              </div>

              <p id='text-avaliation-modal'>{worker.description}</p>
            </div></>
        })
      }
    </div>
  )
}

export default MyComplaints; 