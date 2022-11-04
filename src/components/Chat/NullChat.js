import React from 'react'
import ChatNull from '../../assets/img/nullchat.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const NullChat = () => {
  return (
    <div className='chat-null'>
      <h4>Inicie uma conversa para enviar mensagens.</h4>
      <img src={ChatNull} alt='chat' />
    </div>
  )
}

export default NullChat;