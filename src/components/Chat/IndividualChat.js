import React, { useContext, useEffect, useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SendIcon from '@mui/icons-material/SendRounded'
import AuthContext from '../../services/contexts/auth'
import api from '../../api'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from 'react-bootstrap/Button';
import DeleteChat from './DeleteChat';

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

    // useEffect(() => {
    //     getMessages()
    // }, [messages])

    useEffect(() => {
        if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
            refBody.current.scrollTop =
                refBody.current.scrollHeight - refBody.current.offsetHeight;
        }
    }, [messages]);

    return (
        <div className='container-chat'>
            <div className='header-chat'>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-individual-chat' alt="Profile" />
                <p id='name-account'>{chat.idperson1 == user.idperson ? <>{chat.firstnameperson2} {chat.lastnameperson2}</> : <>{chat.firstnameperson1} {chat.lastnameperson1}</>}</p>

                <DeleteChat chat={chat} getChats={getChats} />
            </div>

            <div className='messages-chat'>
                {messages.map((message) => (
                    <p key={message.idmessage}
                        id={message.idperson == user.idperson ? 'right-message' : 'left-message'}>{message.messagetext}
                    </p>
                ))}
            </div>

            <div className='type-message-chat'>
                <input
                    className='input-message-chat'
                    placeholder='Digite sua mensagem aqui'
                    onChange={(event) => setMessageText(event.target.value)}
                    value={messageText}
                    onKeyPress={handleKeyPress}
                />

                <SendIcon id='send-icon-chat' onClick={handleSendMessage} />
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