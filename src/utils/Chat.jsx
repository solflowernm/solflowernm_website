import { useState, useEffect, useRef } from 'react'; 
import io from 'socket.io-client'; 
import './Chat.css'; 
import Message from './Message';

const Chat = () => { 
    const [socket, setSocket] = useState(null); 
    const [chat, setChat] = useState([{ user: "test", message: "tester" }]); 
    const message = useRef(null);

    const saveMessage = (text) => { 
        message.current = text.target.value; 
    }

    const sendMessage = () => { 
        if (socket) {
            socket.emit('send-message', message.current, socket.id); 
        }
    }
    
    const handleKeyUp = (e) => { 
        if(e.key === 'Enter'){ 
            sendMessage(); 
        }
    }
    useEffect(() => { 
        const newSocket = io("http://localhost:5000"); 
        newSocket.on('connect', () => { 
            console.log('You have connected with id ', newSocket.id);
            setSocket(newSocket);
        }); 
        
        newSocket.on('receive-message', (message, user) => {
            setChat(prevChat => [...prevChat, { user: user, message: message }]);
        });

        // Cleanup on unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);

    return (
        <div className='chat'>
            <div className='chat-container'>
                <div className='chat-content'> 
                    {chat.map((message, index) => { 
                        return (
                            <Message key={index} user={message.user} message={message.message}/> 
                           
                        );
                    })}
                </div> 
                <input 
                    onChange={saveMessage}
                    onKeyUp={handleKeyUp} /> 
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chat;
