import React, { useState, useEffect } from 'react'
import './styles.css'
import PlaceIcon from '@mui/icons-material/Place';
import api from '../../../../api'

const ResultCategories = props => {
  const { category } = props;
  const [workers, setWorkers] = useState([])

  const getWorkers = async () => {
    try {
      const response = await api.get(`/workersByCategory/${category.idservice}`);
      setWorkers(response.data)
    } catch (error) {
      setWorkers([])
    }
  }

  useEffect(() => {
    getWorkers()
  }, [category])

  return (
    <>
      <div className='container-categories-search'>
        <h1 className='title-service-category'>{category.titleservice}</h1>
        <div className="container-search-section">
          <div className='container-input-search'>
            <PlaceIcon className='place-icon' />
            <input
              className='input-search-categories'
              placeholder='Onde?'
            />
          </div>
          <button className="btn-search-categories">Buscar</button>
        </div>
        <div className='list-users-category'>
          {
            workers.map((worker) => {
              return (
                <div className='info-user-category' key={worker.idworker}>
                  <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='photo-user-profile' alt="Profile" />
                  <p className='name-user-category' >{worker.fullname}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ResultCategories