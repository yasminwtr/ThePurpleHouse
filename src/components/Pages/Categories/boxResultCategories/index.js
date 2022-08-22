import React, { useState, useEffect } from 'react'
import "./styles.css"
import PlaceIcon from '@mui/icons-material/Place';
import api from '../../../../api'

const ResultCategories = () => {
  const [workers, setWorkers] = useState([])

  const getWorkers = async () => {
    try {
      const response = await api.get('/workers')
      setWorkers(response.data)

    } catch (error) {
      console.log(error)
      setWorkers([])
    }
  }

  useEffect(() => {
    getWorkers()
  }, [])


  return (
    <>
      <div className='container-categories-search'>
        <h1 className='title-service-category'>Jardinagem</h1>
        <div className='container-input-search'>
          <PlaceIcon className='place-icon' />
          <input
            className='input-search-categories'
            placeholder='Onde?'
          />
        </div>
        <button className="btn-search-categories">Buscar</button>

        <div className='list-users-category'>
          {
            workers.map((item) => {
              return (
                <div className='info-user-category' key={item.idworker}>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='photo-user-profile' alt="Profile" />
                <p className='name-user-category' >{item.fullname}</p>
                </div>
                // <option key={item.idservice} value={item.idservice}>{item.titleservice}</option>
              )
            })
          }

          <div className='info-user-category'>
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='photo-user-profile' alt="Profile" />
            <p className='name-user-category' >Mario Silvo</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultCategories