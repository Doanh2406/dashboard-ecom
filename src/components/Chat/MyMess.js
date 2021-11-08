import React from 'react'
import { format } from 'timeago.js'
import './Conversation.scss'

function MyMess({message,avar}) {

  return (
    <div className='mymess'>
      <img src={avar? `http://localhost:5000/${avar}`: 'http://localhost:5000/upload/constants/ava.png'} alt='' />
      <div className='mymess__text'>
        <p className='mymess__text-message'>{message.text}</p>
        
        <p className='mymess__text-time'>{format(message.createdAt)}</p>
      </div>
    </div>
  )
}
export default MyMess;