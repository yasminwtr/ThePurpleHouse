import React from 'react'
import "./styles.css"
import PlaceIcon from '@mui/icons-material/Place';

const ResultCategories = () => {
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
          <div className='info-user-category'>
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='photo-user-profile' alt="Profile" />
            <p className='name-user-category' >Mario Silvo</p>
          </div>
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