import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Avatar } from 'antd';
import ProfileIcon from "../../assets/img/user2.png";
import { FaStar } from 'react-icons/fa'

const WorkerReviews = (props) => {
  const { workerReviews } = props

  return (
    <div>
      {workerReviews.map((review) => {
        if (review.stars === 5) {
          const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
          const formattedDateReview = `${day}/${month}/${year}`

          return <>
            <div key={review.idreview}>
              <div className='block-avaliation'>
                <div className='part1-avaliation'>
                  {
                    review.profilepicture ?
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={review.profilepicture}
                          />
                        }
                      />
                      :
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={ProfileIcon}
                          />
                        }
                      />
                  }
                </div>

                <div className='all-info-avaliation'>
                  <div className='info-avaliation'>
                    <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                    <p id='date-avaliation'>{formattedDateReview}</p>
                  </div>

                  <div className='stars-worker-profile-review'><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /></div>
                </div>
              </div>

              <p id='text-avaliation'>{review.messagereview}</p>
            </div></>

        } else if (review.stars === 4) {
          const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
          const formattedDateReview = `${day}/${month}/${year}`

          return <>
            <div key={review.idreview}>
              <div className='block-avaliation'>
                <div className='part1-avaliation'>
                  {
                    review.profilepicture ?
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={review.profilepicture}
                          />
                        }
                      />
                      :
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={ProfileIcon}
                          />
                        }
                      />
                  }
                </div>

                <div className='all-info-avaliation'>
                  <div className='info-avaliation'>
                    <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                    <p id='date-avaliation'>{formattedDateReview}</p>
                  </div>

                  <div className='stars-worker-profile-review'><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                </div>
              </div>

              <p id='text-avaliation'>{review.messagereview}</p>
            </div></>

        } else if (review.stars === 3) {
          const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
          const formattedDateReview = `${day}/${month}/${year}`

          return <>
            <div key={review.idreview}>
              <div className='block-avaliation'>
                <div className='part1-avaliation'>
                  {
                    review.profilepicture ?
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={review.profilepicture}
                          />
                        }
                      />
                      :
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={ProfileIcon}
                          />
                        }
                      />
                  }
                </div>

                <div className='all-info-avaliation'>
                  <div className='info-avaliation'>
                    <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                    <p id='date-avaliation'>{formattedDateReview}</p>
                  </div>

                  <div className='stars-worker-profile-review'><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                </div>
              </div>

              <p id='text-avaliation'>{review.messagereview}</p>
            </div></>

        } else if (review.stars === 2) {
          const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
          const formattedDateReview = `${day}/${month}/${year}`

          return <>
            <div key={review.idreview}>
              <div className='block-avaliation'>
                <div className='part1-avaliation'>
                  {
                    review.profilepicture ?
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={review.profilepicture}
                          />
                        }
                      />
                      :
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={ProfileIcon}
                          />
                        }
                      />
                  }
                </div>

                <div className='all-info-avaliation'>
                  <div className='info-avaliation'>
                    <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                    <p id='date-avaliation'>{formattedDateReview}</p>
                  </div>

                  <div className='stars-worker-profile-review'><FaStar color='#fccc3e' size={18} /><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                </div>
              </div>

              <p id='text-avaliation'>{review.messagereview}</p>
            </div></>

        } else if (review.stars === 1) {
          const [year, month, day] = review.datereview.split("T", 10)[0]?.split("-")
          const formattedDateReview = `${day}/${month}/${year}`

          return <>
            <div key={review.idreview}>
              <div className='block-avaliation'>
                <div className='part1-avaliation'>
                  {
                    review.profilepicture ?
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={review.profilepicture}
                          />
                        }
                      />
                      :
                      <Avatar
                        id='icon-avaliation'
                        size={55}
                        src={
                          <Image
                            src={ProfileIcon}
                          />
                        }
                      />
                  }
                </div>

                <div className='all-info-avaliation'>
                  <div className='info-avaliation'>
                    <p id='name-avaliation'>{review.firstnameperson} {review.lastnameperson}</p>
                    <p id='date-avaliation'>{formattedDateReview}</p>
                  </div>

                  <div className='stars-worker-profile-review'><FaStar color='#fccc3e' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /><FaStar color='#d9d9d9' size={18} /></div>
                </div>
              </div>

              <p id='text-avaliation'>{review.messagereview}</p>
            </div></>

        } else return null
      })}
    </div>
  )
}

export default WorkerReviews; 