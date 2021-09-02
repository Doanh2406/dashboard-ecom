import React from 'react'
import './Profile.scss'
export default function ProfileDetails() {
  return (
    <div>
        <div className='pro_fc_row'>
          <div className='pro_fc_cl'>
            <h2>Basic Infomation</h2>
            <p className='pro_title'>
              Name
            </p>
            <input className='pro_input' />
            <p className='pro_title'>
              User Name
            </p>
            <input className='pro_input' />
            <p className='pro_title'>
              Email
            </p>
            <input className='pro_input' />
            <p className='pro_title'>Date of birth</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <input className='pro_input' />
              <input style={{ marginLeft: 20 }} className='pro_input' />
              <input style={{ marginLeft: 20 }} className='pro_input' />
            </div>
            <p className='pro_title'>Sex</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <input style={{width:20}} type='radio' name='sex' value='Male' />
              <label for='Male'>Male</label>
              <input style={{ marginLeft: 20,width:20 }} type='radio' name='sex' value='Female' />
              <label for='Female'>Female</label>
              <input style={{ marginLeft: 20,width:20 }} type='radio' name='sex' value='Others' />
              <label for='Others'>Others</label>
            </div>
          </div>
          <div style={{ marginLeft: 50 }} className='pro_fc_cl'>
            <div style={{ height: 56 }} />
            <p className='pro_title'>
              Role
            </p>
            <select className='pro_select'>
              <option>Staft</option>
            </select>
            <p className='pro_title'>
              Status
            </p>
            <select className='pro_select'>
              <option>Active</option>
            </select>
            <p className='pro_title'>
              Department
            </p>
            <select className='pro_select'>
              <option>Staft</option>
            </select>
          </div>
        </div>
        <div className='pro_fc_row'>
          <div className='pro_fc_cl'>
            <h2>Contact</h2>
            <p className='pro_title'>
              Phone
            </p>
            <input className='pro_input' />
            <p className='pro_title'>
              Website
            </p>
            <input className='pro_input' />
            <p className='pro_title'>
              Addres line 1
            </p>
            <input className='pro_input' />
            
            <p className='pro_title'>
              Addres line 2
            </p>
            <input className='pro_input' />
            
          </div>
          
          <div style={{ marginLeft: 50 }} className='pro_fc_cl'>
            <div style={{ height: 56 }} />
            <p className='pro_title'>
              City
            </p>
            <input className='pro_input' />
            <p className='pro_title'>
              Country
            </p>
            <input className='pro_input' />
            <p className='pro_title'>
              Language
            </p>
            <input className='pro_input' />
            <p className='pro_title'>
              Post code
            </p>
            <input className='pro_input' />
          </div>
          

        </div>
        
        <div className='pro_fc_row'>
          <div className='pro_fc_cl'>
            <h2>Social</h2>
            <p className='pro_title'>
              Twiter
            </p>
            <input className='pro_input' />
            <p className='pro_title'>
              Facebook
            </p>
            <input className='pro_input' />
        
          </div>
          <div style={{ marginLeft: 50 }} className='pro_fc_cl'>
            <div style={{ height: 56 }} />
            <p className='pro_title'>
              Instagram
            </p>
            <input className='pro_input' />
            <p className='pro_title'>
              Zalo
            </p>
            <input className='pro_input' />
          </div>
        </div>
        <div className='pro_submit'>Submit</div>
        <div style={{height:50}} />
    </div>
  )
}
