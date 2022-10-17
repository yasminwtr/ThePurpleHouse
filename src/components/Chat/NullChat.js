import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatNull from '../../assets/img/nullchat.png'

const NullChat = () => {
    return (
        <div className='all-chat-null'>
            <div className='container-chat-null'>
                <h4 className='h4-chat-null'>Inicie uma conversa para enviar mensagens.</h4>

                <img src={ChatNull} alt='chat' className="chat-null-image" />
            </div>
        </div>
    )
}

export default NullChat;