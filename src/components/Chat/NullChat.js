import React from 'react'
import '../../Pages/Chat/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatNull from '../../components/assets/img/nullchat.png'

const NullChat = () => {
    return (
        <div className='all-chat-null'>
            <div className='container-chat-null'>
                <h3 className='h3-chat-null'>Inicie uma conversa para enviar mensagens.</h3>

                <img src={ChatNull} alt='chat' className="chat-null-image" />
            </div>
        </div>
    )
}

export default NullChat;