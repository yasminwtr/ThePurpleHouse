import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/SendRounded'

const Chat = () => {
  return (
    <body className='body-chat'>
      <div className='all-chat'>
        <div className='box-search-chat'>
          <div className='container-box-search'>
            <div className='container-input'>
              <SearchIcon id='search-icon-chat' />
              <input
                className='input-search-chat'
                placeholder='Pesquisar usuário'
              />
            </div>

            <button className="button-search-chat">Buscar</button>
          </div>

          <div className='list-chat-profiles'>
            <div className='individual-chat-profile'>
              <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-individual-chat-profile' alt="Profile" />
              <p id='name-chat-profile'>Mario Silvo</p>
            </div>

            <div className='individual-chat-profile'>
              <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-individual-chat-profile' alt="Profile" />
              <p id='name-chat-profile'>Mario Silvo</p>
            </div>
          </div>
        </div>

        <div className='container-chat'>
          <div className='header-chat'>
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-individual-chat' alt="Profile" />
            <p id='name-account'>Mario Silvo</p>
          </div>

          <div className='messages-chat'>
            <p id='left-message'>Lorem ipsum dolor sit amet?</p>
            <p id='right-message'>Aliquam lacinia, magna quis</p>

            <p id='left-message'>Justo varius magna</p>
            <p id='right-message'>Vitae dapibus!</p>

            <p id='left-message'>Dolorem ipsum quia dolor :)</p>
            <p id='right-message'>Fermentum felis pellentesque congue</p>
          </div>

          <div className='type-message-chat'>
            <input
              className='input-message-chat'
              placeholder='Digite sua mensagem aqui'
            />

            <SendIcon id='send-icon-chat' />
          </div>
        </div>
      </div>
    </body>
  )
}

export default Chat;