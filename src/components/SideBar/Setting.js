import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react'
import './Setting.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function Setting({ action }) {
  return (
    <div className='st_container'>
      <div className='st_overlay' onClick={() => action()} />
      <div className='st_form'>'
        <div className='st_title' >
          < SettingsIcon style={{ fontSize: 30 }} />
          <p className='st_setting'>Settings</p>
          <ArrowBackIcon style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={action} />
        </div>
        <hr style={{ opacity: 0.3 }} ></hr>
        <div className='st_check'>
          <label class="container">One
            <input type="checkbox"  />
            <span class="checkmark"></span>
          </label>
          <label class="container">Two
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="container">Three
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="container">Four
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>


        </div>
        <div style={{height:'64%'} } />
        <div className='st_apply' onClick={action}>
          <p className='st_apply_text'>Apply Setting</p>
        </div>
      </div>
    </div>
  )
}
