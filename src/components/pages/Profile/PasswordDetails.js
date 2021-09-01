import React from 'react'
import './Profile.scss'
export default function PasswordDetails() {
  return (
    <div>
    <div className='pro_fc_row'>
      <div style={{width:'95%'}} className='pro_fc_cl'>
        <h2>Change paswword</h2>
        <p className='pro_title'>
          Your current password
        </p>
        <input className='pro_input' />
        <p className='pro_title'>
          New password
        </p>
        <input security type='password' className='pro_input' />
        <p className='pro_title'>
          Confirm new passowrd
        </p>
        <input security type='password' className='pro_input' />
     
      </div>
      
    </div>
    <div className='pro_submit'>Submit</div>
</div>
  )
}
