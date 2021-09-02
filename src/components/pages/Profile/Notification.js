import React from 'react'
import './Profile.scss'
export default function Notification() {
  return (
    <div className='no_container'>
      <h2>Notifications</h2>
      <p style={{ fontWeight: 550 }}>Activity Notifications</p>
      
      <div className='no_row'>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Someone assigns me to a task</p>
      </div>
      <div className='no_row'>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Someone mentions me in a conversation</p>
      </div>
      <div className='no_row'>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Someone adds me to a project</p>
      </div>
      <div className='no_row'>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Activity on a project I am a member of</p>
      </div>
      <p style={{ fontWeight: 550 }}>Service Notifications</p>
      <div className='no_row'>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Monthly newsletter</p>
      </div>
      <div className='no_row'>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Major feature enhancements</p>
      </div>
      <div className='no_row'>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Minor updates and bug fixes</p>
      </div>
    </div>

  )
}
