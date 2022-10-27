import React, { useContext, useEffect, useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SendIcon from '@mui/icons-material/SendRounded'
import AuthContext from '../../services/contexts/auth'
import api from '../../api'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import DenounceWorker from './DenounceWorker'
import CancelWork from './CancelWork'
import LeaveAvaliation from '../Reviews/LeaveAvaliation'
import MoreOptions from "./MoreOptions";
import Emoji from './Emoji';
import EmojiPicker from 'emoji-picker-react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const IndividualChat = (props) => {
  const { user } = useContext(AuthContext);
  const { chat, getChats } = props
  const [messages, setMessages] = useState([])
  const [messageText, setMessageText] = useState('')
  const [showError, setShowError] = useState(false);
  const handleCloseError = () => setShowError(false);
  const refBody = useRef('');
  const navigate = useNavigate()
  const [showPicker, setShowPicker] = useState(false);

  const getMessages = async () => {
    const idChat = chat.idchat
    try {
      const response = await api.get(`/messages/${idChat}`);
      setMessages(response.data)
    } catch (error) {
      setMessages([])
    }
  }

  async function sendMessage() {
    const idChat = chat.idchat
    try {
      if ((messageText) !== '') {
        const response = await api.post('/messages', { idChat: idChat, idPerson: user.idperson, messageText: messageText });
        console.log('response', response)

      } else {
        setShowError(true)
      }
    } catch (error) {

    }
  }

  const handleSendMessage = (event) => {
    event.preventDefault();
    sendMessage()

    setMessageText('');
    getMessages()
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()

      setMessageText('');
      getMessages()
    }
  }

  useEffect(() => {
    getMessages()
  }, [])

  useEffect(() => {
    if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
      refBody.current.scrollTop =
        refBody.current.scrollHeight - refBody.current.offsetHeight;
    }
  }, [messages]);

  const onEmojiClick = (event, emojiObject) => {
    setMessageText(messageText + emojiObject.emoji);
    console.log('emojiObject.target', emojiObject);
    setShowPicker(false);
  };

  return (
    <div className='container-chat'>
      <div className='header-chat'>
        {chat.idperson1 == user.idperson ?
          <>
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-individual-chat' alt="Profile" />
            <p id='name-account-worker' onClick={() => navigate('/WorkerProfile', { state: { workerId: chat.idworker, personWorkerId: chat.idperson2, firstName: chat.firstname, lastName: chat.lastname, service: chat.servicecategory, email: chat.email, phone: chat.phonenumber, birthdate: chat.birthdate, city: chat.city, cityState: chat.localization, price: chat.priceservice, description: chat.descriptionservice, whatsapp: chat.whatsapp } })}>
              {chat.firstnameperson2} {chat.lastnameperson2}
            </p>
          </>
          :
          <>
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-individual-chat' alt="Profile" />
            <p id='name-account'>{chat.firstnameperson1} {chat.lastnameperson1}</p>
          </>
        }

        {chat.idperson1 == user.idperson && chat.status == 'Aberto' ?
          <>
            <MoreOptions>
              <div>
                <ul className='ul-more-options'>
                  <li id='close-service-li'>
                    <LeaveAvaliation chat={chat} />
                  </li>
                  <li id='cancel-service-li'>
                    <CancelWork chat={chat} />
                  </li>
                  <li id='denounce-service-li'>
                    <DenounceWorker chat={chat} />
                  </li>
                </ul>
              </div>
            </MoreOptions>
          </>
          :
          <></>
        }

        {chat.idperson2 == user.idperson && chat.status == 'Aberto' ?
          <>
            <MoreOptions>
              <div>
                <ul className='ul-more-options'>
                  <li id='cancel-service-li'>
                    <CancelWork chat={chat} />
                  </li>
                </ul>
              </div>
            </MoreOptions>
          </>
          :
          <></>
        }
      </div>

      <div className='messages-chat'>
        {messages.map((message) => (
          <>
            <div>
              <p key={message.idmessage} id={message.idperson == user.idperson ? 'right-message' : 'left-message'}>
                {message.messagetext}
              </p>

              <p id={message.idperson == user.idperson ? 'right-message-hour' : 'left-message-hour'}>{message.hour}</p>
            </div>
          </>
        ))}
      </div>

      <div className='type-message-chat'>
        {chat.status == 'Aberto' ?
          <>
            <input
              className='input-message-chat'
              placeholder='Digite sua mensagem aqui'
              onChange={(event) => setMessageText(event.target.value)}
              value={messageText}
              onKeyPress={handleKeyPress}
            />
            <Emoji>
              <EmojiPicker value={showPicker} onEmojiClick={onEmojiClick} onClick={() => setShowPicker(val => !val)} />
            </Emoji>
            <SendIcon id='send-icon-chat' onClick={handleSendMessage} />
          </>
          :
          <>
            <input
              className='input-message-chat-disabled'
              placeholder={`Você não pode mais enviar mensagens, esse serviço foi ${chat.status.toLowerCase()}.`}
              onChange={(event) => setMessageText(event.target.value)}
              value={messageText}
              onKeyPress={handleKeyPress}
            />

            <SentimentSatisfiedAltIcon id='send-icon-chat-disabled' />
            <SendIcon id='send-icon-chat-disabled' />
          </>
        }
      </div>

      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Digite algo para enviar uma mensagem
        </Alert>
      </Snackbar>
    </div>
  )
}

export default IndividualChat;