import React, { useState, useEffect } from 'react';
import '../styles.css'
import api from "../../../../api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';

const AverageRating = (props) => {
  const location = useLocation();
  const [averageRating, setAverageRating] = useState([])

  async function getAverageRatingByWorker() {
    const idWorker = location.state.workerId
    try {
      const response = await api.get(`/averageRatingByWorker/${idWorker}`);
      console.log(response);
      return setAverageRating(response.data)

    } catch (error) {
      setAverageRating([])
    }
  }

  useEffect(() => {
    getAverageRatingByWorker()
  }, [])

  return (
    <div>
      {
        averageRating.map((review) => {
          if (review.avg == 5) {
            return <>
              <p id='stars-worker-profile'><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /></p>
            </>

          } else if (review.avg >= 4 && review.avg < 5) {
            return <>
              <p id='stars-worker-profile'><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /><FaStar color='#d9d9d9' size={26} /></p>
            </>

          } else if (review.avg >= 3 && review.avg < 4) {
            return <>
              <p id='stars-worker-profile'><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /><FaStar color='#d9d9d9' size={26} /><FaStar color='#d9d9d9' size={26} /></p>
            </>

          } else if (review.avg >= 2 && review.avg < 3) {
            return <>
              <p id='stars-worker-profile'><FaStar color='#fccc3e' size={26} /><FaStar color='#fccc3e' size={26} /><FaStar color='#d9d9d9' size={26} /><FaStar color='#d9d9d9' size={26} /><FaStar color='#d9d9d9' size={26} /></p>
            </>

          } else if (review.avg < 2) {
            return <>
              <p id='stars-worker-profile'><FaStar color='#fccc3e' size={26} /><FaStar color='#d9d9d9' size={26} /><FaStar color='#d9d9d9' size={26} /><FaStar color='#d9d9d9' size={26} /><FaStar color='#d9d9d9' size={26} /></p>
            </>

          }
        })
      }
    </div>
  )
}

export default AverageRating; 