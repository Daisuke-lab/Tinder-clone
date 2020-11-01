import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../assets/Chat.css'
import {Link, useHistory} from 'react-router-dom'
//you need to wrap name, message, image, timestamp by {} otherwise, it would cause the error that is use array instead...
function Chat({name, message, image, timestamp}) {
    const link = '/chats/' + {name}
    return (
        <Link to={link}>
        <div className='chat'>
            <Avatar className='chat_image' alt={name}
            src={image}/>
            <div className='chat_detail'>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className='chat_timestamp'>{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat