import React from 'react'
import './ChatSearch.scss'

export default function ChatSearch({searchList,handelNewConversation}) {
  
  return (
    <div className='chat__search'>
      {
        (searchList && searchList.length>0 ) && searchList.map(
          (item, index)=>(
            <div onClick={()=>handelNewConversation(item._id)} key={index} className='chat__search__item'>
              <img className='chat__search__item-avar' src={item.userAva?`http://localhost:5000/${item.userAva}`:'http://localhost:5000/upload/constants/ava.png'} alt='' />
              <p className='chat__search__item-name' >{item.firstName+' '+item.lastName}</p>
            </div>
          )
        )
      }
    </div>
  )
}
