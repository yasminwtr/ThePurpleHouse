import React from 'react'
import "./styles.css"
import PlaceIcon from '@mui/icons-material/Place';
import Grid from '@mui/material/Grid';
import Categories from '..';

const ResultCategories = () => {
  return (
    <>
      <div className='container-search'>
        <Grid container spacing={2} columns={16} className='grid-search'>
          <Grid item xs={8} >
            <div className='input-search'>
              <PlaceIcon id='icon-search' />
              <input
                className='input-search-content'
                type={'text'}
                placeholder='Onde?'
              />
            </div>
          </Grid>
          <Grid item xs={8}>
            <button className='button-search'>Buscar</button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default ResultCategories