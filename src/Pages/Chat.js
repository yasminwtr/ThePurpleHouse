import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import IndividualChat from '../components/Chat/IndividualChat'
import NullChat from '../components/Chat/NullChat'
import AuthContext from '../services/contexts/auth'
import api from '../api'
import CancelIcon from '@mui/icons-material/DoDisturbRounded'
import CloseIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import ReportIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import ProfileIcon from "../assets/img/user2.png";
import { Image, Avatar } from 'antd';

const Chat = () => {
  const { user } = useContext(AuthContext);
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
  const [filteredChats, setFilteredChats] = useState([]);
  const [searchInputChat, setSearchInputChat] = useState('');
  const [showChat, setShowChat] = useState(false)

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

  console.log(chats);

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
                <div onClick={() => setSelectedChat(chat)} className={`individual-chat-profile ${selectedChat?.idchat == chat.idchat ? 'chatSelected' : null}`}>
                  {
                    chat.profilepicture ?
                      <Avatar
                        size={130}
                        src={
                          <Image
                            src={chat.profilepicture}
                          />
                        }
                      />
                      :
                      <Avatar
                        size={100}
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
                <div onClick={() => setSelectedChat(chat)} className={`individual-chat-profile ${selectedChat?.idchat == chat.idchat ? 'chatSelected' : null}`}>
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
                  {chat.status == 'Finalizado' ? <><CloseIcon id='icon-close' /></> : <></>}
                  {chat.status == 'Aberto' ? <></> : <></>}
                  {chat.status == 'Denunciado' ? <><ReportIcon id='icon-report' /></> : <></>}
                  {chat.status == 'Cancelado' ? <><CancelIcon id='icon-cancel' /></> : <></>}
                </div>
              )
            })
          )}
        </div>
      </div>
      {showChat ? <IndividualChat chat={selectedChat} getChats={getChats} /> : <NullChat />}
    </div>
  )
}

export default Chat;