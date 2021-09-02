import React from 'react'
import './Profile.scss'
function Integrations() {
  return (
    <div className='int_container'>
      <h2>Integrations</h2>
      <div className='int_item'>
        <img alt='slack' src='https://luna1.co/dc739c.png' />
        <div className='int_text'>
          <h4 style={{ marginBottom: -5 }}>Slack</h4>
          <p>Permissions: Read, write, Comment</p>
        </div>
        <div className='int_btn_danger'>
          <p>Disconnect</p>
        </div>
      </div>
      <div className='int_item'>
        <img alt='slack' src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png' />
        <div className='int_text'>
          <h4 style={{ marginBottom: -5 }}>Google Drive</h4>
          <p>Permissions: Read, write</p>
        </div>
        <div className='int_btn'>
          <p>Connect</p>
        </div>
      </div>
      <div className='int_item'>
        <img alt='slack' src='https://cfl.dropboxstatic.com/static/images/logo_catalog/twitter-card-glyph_m1@2x-vflrCAzPX.png' />
        <div className='int_text'>
          <h4 style={{ marginBottom: -5 }}>Dropbox</h4>
          <p>Permissions: Read, write, Upload</p>
         
        </div>
        <div className='int_btn_danger'>
            <p>Disconnect</p>
          </div>
      </div>
    </div>

  )
}

export default Integrations
