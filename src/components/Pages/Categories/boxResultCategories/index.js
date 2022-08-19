import React from 'react'
import "./styles.css"
import PlaceIcon from '@mui/icons-material/Place';

const ResultCategories = () => {
  return (
    <>
      <div className="resultCategories">
        <div className="containerSearch">
          <h1>Jardineiro</h1>
          <div className='input-search'>
            <PlaceIcon />
            <input
              name="fullName"
              placeholder='Nome completo'
            />
          </div>
          <button className="buttonSearch">Buscar</button>
        </div>
      </div>
    </>
  )
}

export default ResultCategories