import React, { useState, useEffect } from 'react';
import api from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';

const AverageRating = (props) => {
  const location = useLocation();
  const [averageRating, setAverageRating] = useState([])

  async function getAverageRatingByWorker() {
    
    if(props.rating) return setAverageRating({ avg: props.rating })

    const idWorker = location.state.workerId
    
    try {
      const response = await api.get(`/averageRatingByWorker/${idWorker}`);
      return setAverageRating(response.data[0])

    } catch (error) {
      setAverageRating({})
    }
  }

  useEffect(() => {
    getAverageRatingByWorker()
  }, [])

  return (
    <div>
      {
         [...Array(5)].map((_, index) => {
          const ratingValue = index + 1 ;

          return (
            <label key={index} id="stars-workerProfile">
              <FaStar color={ratingValue <= Math.floor(parseInt(averageRating.avg)) ? '#fccc3e' : '#d9d9d9'} />
            </label>
          )
        })
      }
    </div>
  )
}

export default AverageRating; 