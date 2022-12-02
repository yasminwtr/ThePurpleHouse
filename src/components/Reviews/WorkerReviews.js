import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AverageRating from './AverageRating';
import { Image, Avatar } from 'antd';

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
                <Avatar
                  id='icon-avaliation'
                  size={50}
                  src={
                    <Image
                      src={review.profilepicture}
                    />
                  }
                />
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