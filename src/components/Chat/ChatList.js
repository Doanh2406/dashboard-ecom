import React, { useEffect, useState } from 'react'
import './ChatList.scss'
import axios from 'axios'

export default function ChatList({onlineFriends,userId, handleConversation, dataCon,bot }) {
  const [online, setOnline] = useState(false);
  const [friend, setFriend]  = useState();
 
  const fetchData =async ()=>{
    if(bot){
      return
    }
    const friendId = await dataCon.members.find(m=>  m !== userId)
    const {data} = await axios.get(`/api/users/get/${friendId}`)
     let check = false ;
     await onlineFriends.map(x=>{
      if(x.userId === data._id){
        return check=true;
      }
     
    })
    setOnline(check)
    setFriend(data)
  }
  useEffect(()=>{
    fetchData()
  },[onlineFriends])
  console.log(friend)
  console.log(bot)

 

  return (
    <div className='list'>
          <div className='list__item' onClick={() => handleConversation(dataCon._id, bot?'http://localhost:5000/upload/constants/bot.png':friend.userAva,bot?null:friend._id, bot&&bot)}>
            {
              online && <div className='list__item__badge' />
            }
            <img src={bot?'http://localhost:5000/upload/constants/bot.png':friend?.userAva ? `http://localhost:5000/${friend.userAva}`:'http://localhost:5000/upload/constants/ava.png'} alt='' />

            <div className='list__item__text'>
              <p className='list__item__text-name'>
               {
                bot? <p>Bot</p>: friend && friend.firstName+' '+ friend.lastName
               }
              </p>
              
            </div>
          </div>
    </div>
  )
}
