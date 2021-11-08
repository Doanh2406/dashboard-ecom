import React, { useEffect, useState } from 'react'
import './ChatList.scss'
import axios from 'axios'

export default function ChatList({onlineFriends,userId, handleConversation, dataCon }) {
  const [online, setOnline] = useState(false);
  const [friend, setFriend]  = useState();
  const fetchData =async ()=>{
    const friendId = await dataCon.members.find(m=>  m !== userId)
    const {data} = await axios.get(`/api/users/${friendId}`)
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
 
  
  return (
    <div className='list'>
      
          <div className='list__item' onClick={() => handleConversation(dataCon._id,friend.userAva,friend._id)}>
            {
              online && <div className='list__item__badge' />
            }
            <img src={friend?.userAva?`http://localhost:5000/${friend.userAva}`:'http://localhost:5000/upload/constants/ava.png'} alt='' />

            <div className='list__item__text'>
              <p className='list__item__text-name'>
               {
                 friend && friend.name
               }
              </p>
              
            </div>
          </div>
    </div>
  )
}
