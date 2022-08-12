import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const Chat = () => {
  return (
    <div className='allChat'>
      <div className='boxSearchChat'>
        <div className="containerSearch">
          <Box className="inputSearch" sx={{ '& > :not(style)': { m: 0.1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Pesquisar usuário" variant="standard" />
            </Box>
          </Box>
          <button className="buttonSearchChat">BUSCAR</button>
        </div>
      </div>
      <div className='containerChat'>
        <div className='headerChat'>
          <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='iconIndividualChat' alt="Profile" />
          <p id='nameAccount'>Mario Silvo</p>
        </div>

        <div className='messagesChat'>
          <p id='leftMessage'>Lorem ipsum dolor sit amet?</p>
          <p id='rightMessage'>Aliquam lacinia, magna quis</p>
        </div>

        <input
          className='typeMessage'
          placeholder='Digite sua mensagem aqui'
        />
      </div>
    </div>
  )
}

export default Chat;