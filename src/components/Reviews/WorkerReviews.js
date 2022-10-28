import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AverageRating from './AverageRating';

const WorkerReviews = (props) => {
  const { workerReviews } = props

  return (
    <>
      {workerReviews.map((review) => {
        const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
        const formattedDateReview = `${day}/${month}/${year}`

        return (
          <div key={review.idreview}>
            <div className='block-avaliation'>
              <div className='part1-avaliation'>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                  id='icon-avaliation' alt="Profile" />
              </div>
              <div className='all-info-avaliation'>
                <div className='info-avaliation'>
                  <p id='name-avaliation'>
                    {review.firstnameperson} {review.lastnameperson}
                  </p>
                  <p id='date-avaliation'>
                    {formattedDateReview}
                  </p>
                </div>
                <AverageRating />
              </div>
            </div>
            <p id='text-avaliation'>
              {review.messagereview}
            </p>
          </div>
        )
      })
      }
    </>
  )
}

export default WorkerReviews; 