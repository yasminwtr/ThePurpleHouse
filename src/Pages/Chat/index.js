import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import IndividualChat from '../../components/Chat/IndividualChat'
import NullChat from '../../components/Chat/NullChat'
import AuthContext from '../../components/contexts/auth'
import api from '../../api'

const Chat = () => {
  const { user } = useContext(AuthContext);
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
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

  useEffect(() => {
    getChats()
  }, []);

  return (
    <div className='body-chat'>
      <div className='background-chat'>
        <div className='all-chat'>
          <div className='box-search-chat'>
            <div className='container-box-search'>
              <div className='container-input'>
                <input
                  className='input-search-chat'
                  placeholder='Pesquisar usuário'
                />

                <SearchIcon id='search-icon-chat' />
              </div>
            </div>

            <div className='list-chat-profiles'>
              {chats.map((chat) => (
                <div onClick={() => setSelectedChat(chat)} className={`individual-chat-profile ${selectedChat?.idchat == chat.idchat ? 'chatSelected' : null}`}>
                  <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-individual-chat-profile' alt="Profile" />
                  <p id='name-chat-profile'>{chat.idperson1 == user.idperson ? <>{chat.firstnameperson2} {chat.lastnameperson2}</> : <>{chat.firstnameperson1} {chat.lastnameperson1}</>}</p>
                </div>
              ))}
            </div>
          </div>

          {showChat ? <IndividualChat chat={selectedChat} /> : <NullChat/>}
        </div>
      </div>
    </div>
  )
}

export default Chat;