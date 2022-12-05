import React, { useContext, useEffect, useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SendIcon from '@mui/icons-material/SendRounded'
import AuthContext from '../../services/contexts/auth'
import api from '../../api'
import DenounceWorker from './DenounceWorker'
import CancelWork from './CancelWork'
import LeaveAvaliation from '../Reviews/LeaveAvaliation'
import EmojiPicker from 'emoji-picker-react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useNavigate } from 'react-router-dom';
import ProfileIcon from "../../assets/img/user2.png";
import { Image, Avatar, notification } from 'antd';
import MoreOptionsIcon from '@mui/icons-material/MoreVertRounded'
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const IndividualChat = (props) => {
  const { user } = useContext(AuthContext);
  const { chat, getChats } = props
  const [messages, setMessages] = useState([])
  const [messageText, setMessageText] = useState('')
  const refBody = useRef('');
  const navigate = useNavigate()
  const [showPicker, setShowPicker] = useState(false);
  const [status, setStatus] = useState('close')
  const handleOpenStatus = () => setStatus('open');
  const handleCloseStatus = () => setStatus('close');
  const [emoji, setEmoji] = useState('close')
  const handleOpenEmoji = () => setEmoji('open');
  const handleCloseEmoji = () => setEmoji('close');

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
        openNotificationError()
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
  }, [messages])

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

  const openNotificationError = () => {
    notification["error"]({
      message: 'Digite algo para enviar uma mensagem',
      duration: 2,
      placement: 'bottom',
      style: {
        width: 450,
      }
    });
  };

  return (
    <div className='chat' onClick={status === 'open' ? handleCloseStatus : null}>
      <div className='header'>
        {chat.idperson1 === user.idperson ?
          <>
            {
              chat.profilepicture ?
                <Avatar
                  size={60}
                  src={
                    <Image
                      src={chat.profilepicture}
                    />
                  }
                />
                :
                <Avatar
                  size={60}
                  src={
                    <Image
                      src={ProfileIcon}
                    />
                  }
                />
            }
            <p id='name-worker' onClick={() => navigate('/WorkerProfile', {
              state: {
                workerId: chat.idworker,
                personWorkerId: chat.idperson2,
                firstName: chat.firstnameperson2,
                lastName: chat.lastnameperson2,
                service: chat.servicecategory,
                email: chat.email,
                phone: chat.phonenumber,
                birthdate: chat.birthdate,
                city: chat.city,
                cityState: chat.localization,
                price: chat.priceservice,
                description: chat.descriptionservice,
                whatsapp: chat.whatsapp,
                workerImg: chat.profilepicture
              }
            })}>
              {chat.firstnameperson2} {chat.lastnameperson2}
            </p>
          </>
          :
          <>
            {
              chat.profilepicture ?
                <Avatar
                  src={
                    <Image
                      src={chat.profilepicture}
                    />
                  }
                />
                :
                <Avatar
                  src={
                    <Image
                      src={ProfileIcon}
                    />
                  }
                />
            }
            <p id='name-user'>{chat.firstnameperson1} {chat.lastnameperson1}</p>
          </>
        }

        {chat.idperson1 === user.idperson && chat.status === 'Aberto' ?
          <>
            <span className='more-options-chat-wrapper'>
              <a onClick={status === 'close' ? handleOpenStatus : handleCloseStatus}>
                <MoreOptionsIcon />
              </a>
              <div className={`more-options-chat more-options-chat-${status}`}>
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
            </span>
          </>
          :
          <></>
        }

        {chat.idperson2 === user.idperson && chat.status === 'Aberto' ?
          <>
            <span className='more-options-chat-wrapper'>
              <a onClick={status === 'close' ? handleOpenStatus : handleCloseStatus}>
                <MoreOptionsIcon />
              </a>
              <div className={`more-options-chat more-options-chat-${status}`}>
                <ul className='ul-more-options'>
                  <li id='cancel-service-li'>
                    <CancelWork chat={chat} />
                  </li>
                </ul>
              </div>
            </span>
          </>
          :
          <></>
        }
      </div>

      <div className='messages'>
        {messages.map((message) => (
          <>
            <p key={message.idmessage} id={message.idperson === user.idperson ? 'right-message' : 'left-message'}>
              {message.messagetext}
            </p>

            <p id={message.idperson === user.idperson ? 'right-message-hour' : 'left-message-hour'}>
              {message.hour}
            </p>
          </>
        ))}
      </div>

      <div className='type-message'>
        {chat.status === 'Aberto' ?
          <>
            <input
              className='input-message'
              placeholder='Digite sua mensagem aqui'
              onChange={(event) => setMessageText(event.target.value)}
              value={messageText}
              onKeyPress={handleKeyPress}
            />

            <span className='more-options-chat-wrapper'>
              <a onClick={emoji === 'close' ? handleOpenEmoji : handleCloseEmoji}>
                <SentimentSatisfiedAltIcon id='send-icon' />
              </a>
              <div className={`more-options-chat more-options-chat-${emoji}`}>
                <EmojiPicker value={showPicker} onEmojiClick={onEmojiClick} onClick={() => setShowPicker(val => !val)} />
              </div>
            </span>
            <SendIcon id='send-icon' onClick={handleSendMessage} />
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

            <SentimentSatisfiedAltIcon id='send-icon-disabled' />
            <SendIcon id='send-icon-disabled' />
          </>
        }
      </div>
    </div>
  )
}

export default IndividualChat;