import React, { useEffect, useRef } from 'react'
import { format } from 'timeago.js'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import './Conversation.scss'

function YourMess({message}) {
 
  return (
    <div className='yourmess'>
      <div className='yourmess__text'>
        <p className='yourmess__text-message'>{message.text}</p>
  
        <CheckCircleOutlineOutlinedIcon className='yourmess__text-icon' />

        <p className='yourmess__text-time'>{format(message.createdAt)}</p>
      </div>
      
    </div>
  )
}
export default YourMess;