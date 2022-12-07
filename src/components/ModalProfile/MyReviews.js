import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa'
import ProfileIcon from "../../assets/img/user2.png";
import { Image, Avatar, Button, notification } from 'antd';

const MyReviews = (props) => {
  const { servicesReviewed, setServicesReviewed, getServicesReviewed } = props

  console.log('aa',servicesReviewed);

  const deleteReview = async (deleteId) => {
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-type': 'aplication/json' }
    }
    try {
      await fetch(`https://the-purple-house.up.railway.app/reviews/` + deleteId, requestOptions)
      setServicesReviewed(servicesReviewed.filter(worker => worker.idreview !== deleteId))
      openNotificationSuccess()
      getServicesReviewed()

    } catch (error) {
      openNotificationError()
    }
  }

  const openNotificationSuccess = () => {
    notification["success"]({
      message: 'Avaliação excluída com sucesso.',
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
        servicesReviewed.map((worker) => {
          if (worker.stars === 5) {
            const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div className='individual-avaliation-modal' key={worker.idreview}>
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
                    <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                    <div><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /></div>
                  </div>

                  <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                </div>

                <p id='text-avaliation-modal'>{worker.messagereview}</p>
              </div></>

          } else if (worker.stars === 4) {
            const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div className='individual-avaliation-modal' key={worker.idreview}>
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
                    <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                    <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                  </div>

                  <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                </div>

                <p id='text-avaliation-modal'>{worker.messagereview}</p>
              </div></>

          } else if (worker.stars === 3) {
            const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div className='individual-avaliation-modal' key={worker.idreview}>
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
                    <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                    <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                  </div>

                  <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                </div>

                <p id='text-avaliation-modal'>{worker.messagereview}</p>
              </div></>

          } else if (worker.stars === 2) {
            const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div className='individual-avaliation-modal' key={worker.idreview}>
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
                    <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                    <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                  </div>

                  <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                </div>

                <p id='text-avaliation-modal'>{worker.messagereview}</p>
              </div></>

          } else if (worker.stars === 1) {
            const [year, month, day] = worker.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div className='individual-avaliation-modal' key={worker.idreview}>
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
                    <p id='name-avaliation-modal'>{worker.firstnameworker} {worker.lastnameworker}, {worker.titleservice}, {formattedDateReview}</p>
                    <div ><FaStar color='#fccc3e' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /><FaStar color='#d9d9d9' size={20} /></div>
                  </div>

                  <Button id='delete-review-button' onClick={() => deleteReview(worker.idreview)}>Excluir</Button>
                </div>

                <p id='text-avaliation-modal'>{worker.messagereview}</p>
              </div></>

          } else return null
        })
      }
    </div>
  )
}

export default MyReviews; 