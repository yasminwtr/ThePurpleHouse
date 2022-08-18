import React, { useState } from 'react'
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PlaceIcon from '@mui/icons-material/Place';

const ResultCategories = () => {
  return (
    <>
      <div className="resultCategories">
        <div className="containerSearch">
          <h1>Jardineiro</h1>
          <Box className="inputSearch" sx={{ '& > :not(style)': { m: 0.1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Onde?" variant="standard" />
            </Box>
          </Box>
          <button className="buttonSearch">Buscar</button>
        </div>
      </div>
    </>
  )
}

export default ResultCategories