import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/SendRounded'


const Chat = () => {
  return (
    <div className='allChat'>
      <div className='boxSearchChat'>
        <div className="containerSearch">
          <Box className="boxInputSearch">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Pesquisar usuário" variant="standard" className='inputSearchChat'/>
            </Box>
          </Box>
          
          <button className="buttonSearchChat">Buscar</button>
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

          <p id='leftMessage'>Justo varius magna</p>
          <p id='rightMessage'>Vitae dapibus!</p>

          <p id='leftMessage'>Dolorem ipsum quia dolor :)</p>
          <p id='rightMessage'>Fermentum felis pellentesque congue</p>
        </div>

        <div className='typeMessage'>
          <input
            className='inputMessage'
            placeholder='Digite sua mensagem aqui'
          />
          
          <SendIcon id='sendIcon'/>
        </div>
      </div>
    </div>
  )
}

export default Chat;