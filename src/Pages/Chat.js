import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import IndividualChat from '../components/Chat/IndividualChat'
import NullChat from '../components/Chat/NullChat'
import AuthContext from '../services/contexts/auth'
import api from '../api'
import CancelIcon from '@mui/icons-material/DoDisturbRounded'
import CloseIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import ReportIcon from '@mui/icons-material/ErrorOutlineRounded';
import ProfileIcon from "../assets/img/user2.png";
import { Image, Avatar, Tooltip } from 'antd';

const Chat = () => {
  const { user } = useContext(AuthContext);
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
  const [filteredChats, setFilteredChats] = useState([]);
  const [searchInputChat, setSearchInputChat] = useState('');
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    selectedChat != null ? setShowChat(true) : setShowChat(false)
  }, [selectedChat])

  const getChats = async () => {
    const idPerson = user.idperson
    try {
      const response = await api.get(`/chats/${idPerson}`);
      setChats(response.data)
    } catch (error) {
      setChats([])
    }
  }

  const searchChats = (searchValue) => {
    setSearchInputChat(searchValue)
    if (searchInputChat !== '') {
      const results = chats.filter((chat) => {
        return Object.values(chat).join('').toLowerCase().includes(searchInputChat.toLowerCase())
      })
      setFilteredChats(results)
    }
    else {
      setFilteredChats(chats)
    }
  }

  const getMessages = async (chat) => {
    const idChat = chat.idchat
    try {
      const response = await api.get(`/messages/${idChat}`);
      setMessages(response.data)
    } catch (error) {
      setMessages([])
    }
  }

  function getSelectedChat(chat) {
    getMessages(chat)
    setSelectedChat(chat)
  }

  useEffect(() => {
    getChats()
  }, []);

  return (
    <div className='list-chats'>
      <div className='box-search'>
        <div className='container-input'>
          <SearchIcon id='icon' />
          <input
            placeholder='Pesquisar usuário'
            onChange={(e) => searchChats(e.target.value)}
          />
        </div>

        <div className='list-chat-profiles'>
          {searchInputChat.length > 1 ? (
            filteredChats.map((chat) => {
              return (
                <div onClick={() => getSelectedChat(chat)} className={`individual-chat-profile ${selectedChat?.idchat == chat.idchat ? 'chatSelected' : null}`}>
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
                  <p>
                    {chat.idperson1 == user.idperson ?
                      <>{chat.firstnameperson2} {chat.lastnameperson2}</>
                      :
                      <>{chat.firstnameperson1} {chat.lastnameperson1}</>}
                  </p>
                </div>
              )
            })
          ) : (
            chats.map((chat) => {
              return (
                <div onClick={() => getSelectedChat(chat)} className={`individual-chat-profile ${selectedChat?.idchat == chat.idchat ? 'chatSelected' : null}`}>
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
                  <p>
                    {chat.idperson1 == user.idperson ?
                      <>{chat.firstnameperson2} {chat.lastnameperson2}</>
                      :
                      <>{chat.firstnameperson1} {chat.lastnameperson1}</>}
                  </p>
                  {chat.status == 'Finalizado' ? <><Tooltip title="Finalizado" placement="bottomLeft" color='#56a54f'><CloseIcon id='icon-close' /></Tooltip></> : <></>}
                  {chat.status == 'Aberto' ? <></> : <></>}
                  {chat.status == 'Denunciado' ? <><Tooltip title="Denunciado" placement="bottomLeft" color='#bb3f3f'><ReportIcon id='icon-report' /></Tooltip></> : <></>}
                  {chat.status == 'Cancelado' ? <><Tooltip title="Cancelado" placement="bottomLeft" color='#596066'><CancelIcon id='icon-cancel' /></Tooltip></> : <></>}
                </div>
              )
            })
          )}
        </div>
      </div>
      {showChat ? <IndividualChat chat={selectedChat} messages={messages} getMessages={getMessages} /> : <NullChat />}
    </div>
  )
}

export default Chat;