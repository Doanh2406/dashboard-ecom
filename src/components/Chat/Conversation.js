import React, { useState, useEffect, useRef } from 'react'
import './Conversation.scss'
import SendIcon from '@material-ui/icons/Send';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage, newMessage } from '../redux/actions/messageActions';
import MyMess from './MyMess';
import YourMess from './YourMess';

export default function Conversation({ receiverId, socket, conversationId, friendAvar, userId }) {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [messages, setMessages] = useState();
  const { loading, error, data } = useSelector(state => state.getMessage)
  const handleSend = async () => {
    await dispatch(newMessage(conversationId, userId, text))
    await socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId: receiverId,
      text: text
    })
    setMessages(prev=>[...prev,{conversationId,sender:userId,text,createAt:Date.now()}])
    setText('')
  }
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    socket.current.on("getMessage", mes => {
      setMessages(prev=>[...prev, {sender:mes.senderId, text:mes.text,createAt:Date.now()}])
    })
    
  }, [socket])

  useEffect(()=>{
    if(data){
      setMessages(data);
    }
  },[])
 
  return (
    <>
      <div className='conversation'>
     
        {
          messages && messages.map((m, index) => m.sender === userId ?
            <YourMess key={index} message={m} />

            :
            <MyMess key={index} avar={friendAvar} message={m} />

          )
        }
        <div ref={messagesEndRef} />
      </div>

      <div className='conversation__send'>
        <input value={text} onChange={e => setText(e.target.value)} />
        <SendIcon className='conversation__send-icon' onClick={() => handleSend()} />
      </div>

    </>
  )
}
