import React, { useState, useEffect } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';

const WorkerReviews = (props) => {
  const location = useLocation();
  const [workerReviews, setWorkerReviews] = useState([]);

  async function getReviewsByWorker() {
    const idWorker = location.state.workerId
    try {
      const response = await api.get(`/reviewsByWorker/${idWorker}`);
      return setWorkerReviews(response.data)

    } catch (error) {
      setWorkerReviews([])
    }
  }

  useEffect(() => {
    getReviewsByWorker()
  }, [])

  return (
    <div>
      {
        workerReviews.map((review) => {
          if (review.stars == 5) {
            const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div key={review.idreview}>
                <div className='block-avaliation'>
                  <div className='part1-avaliation'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                  </div>

                  <div className='all-info-avaliation'>
                    <div className='info-avaliation'>
                      <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                      <p id='date-avaliation'>{formattedDateReview}</p>
                    </div>

                    <div><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /></div>
                  </div>
                </div>

                <p id='text-avaliation'>{review.messagereview}</p>
              </div></>

          } else if (review.stars == 4) {
            const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div key={review.idreview}>
                <div className='block-avaliation'>
                  <div className='part1-avaliation'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                  </div>

                  <div className='all-info-avaliation'>
                    <div className='info-avaliation'>
                      <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                      <p id='date-avaliation'>{formattedDateReview}</p>
                    </div>

                    <div><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                  </div>
                </div>

                <p id='text-avaliation'>{review.messagereview}</p>
              </div></>

          } else if (review.stars == 3) {
            const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div key={review.idreview}>
                <div className='block-avaliation'>
                  <div className='part1-avaliation'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                  </div>

                  <div className='all-info-avaliation'>
                    <div className='info-avaliation'>
                      <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                      <p id='date-avaliation'>{formattedDateReview}</p>
                    </div>

                    <div><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                  </div>
                </div>

                <p id='text-avaliation'>{review.messagereview}</p>
              </div></>

          } else if (review.stars == 2) {
            const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div key={review.idreview}>
                <div className='block-avaliation'>
                  <div className='part1-avaliation'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                  </div>

                  <div className='all-info-avaliation'>
                    <div className='info-avaliation'>
                      <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                      <p id='date-avaliation'>{formattedDateReview}</p>
                    </div>

                    <div><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                  </div>
                </div>

                <p id='text-avaliation'>{review.messagereview}</p>
              </div></>

          } else if (review.stars == 1) {
            const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
            const formattedDateReview = `${day}/${month}/${year}`

            return <>
              <div key={review.idreview}>
                <div className='block-avaliation'>
                  <div className='part1-avaliation'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile" />
                  </div>

                  <div className='all-info-avaliation'>
                    <div className='info-avaliation'>
                      <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                      <p id='date-avaliation'>{formattedDateReview}</p>
                    </div>

                    <div><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                  </div>
                </div>

                <p id='text-avaliation'>{review.messagereview}</p>
              </div></>

          }
        })
      }
    </div>
  )
}

export default WorkerReviews; 