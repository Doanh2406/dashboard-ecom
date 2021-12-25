import React from 'react'
import './Footer.scss'
function Foooter(){

  return (
    <div className='footer'>
      <div className='footer__left'>
        <p>©2021<span style={{color:'#ff6e40'}}> Ekaf Ekin</span>  </p>
      </div>
      <div className='footer__right'>
        <p>Licenses</p>
        <p>Change log</p>
        <p>Get help</p>
      </div>
    </div>
  )
}
export default Foooter;
