import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Chat = () => {
    return(
        <div className='allChat'>
            <div className='containerChat'>
                <div className='headerChat'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='iconIndividualChat' alt="Profile"/>
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