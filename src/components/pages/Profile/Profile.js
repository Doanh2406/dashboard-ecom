import React from 'react'
import './Profile.scss'
import ava from '../../../assets/ava.png'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CachedIcon from '@material-ui/icons/Cached';
import { useSelector } from 'react-redux';
export default function Profile() {
  const state = useSelector(state => state.userSignIn.userInfo)
  
  return (
    <div className='pro_container'>
      <div className='pro_fc' >
        <div className='pro_fc_row'>
          
          <img style={{marginTop:20}} src={ava} alt='photos' />
          <div style={{ marginLeft: 20,  }}>
            <p style={{ fontWeight: 530, fontSize: 24 }}>{state.name}</p>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: -18 }}>
              <p className='pro_btn'>Change Avatar</p>
              <p style={{ marginLeft: 10, background: 'red' }} className='pro_btn'>Remove Avatar</p>
            </div>
          </div>
        </div>
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
            <p className='pro_title'>Date of birth</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <input type='radio' name='sex' value='Male' />
              <label for='Male'>Male</label>
              <input style={{ marginLeft: 20 }} type='radio' name='sex' value='Female' />
              <label for='Female'>Female</label>
              <input style={{ marginLeft: 20 }} type='radio' name='sex' value='Others' />
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
      </div>
      <div className='pro_sc'>
        <div className='pro_sc_setting'>
          <div className='pro_sc_setting_item pro_active' >
            <AccountBoxIcon />
            <p>Profile</p>
          </div>
          <div className='pro_sc_setting_item'>
            <LockIcon />
            <p>Password</p>
          </div>
          <div className='pro_sc_setting_item'>
            <NotificationsIcon  />
            <p>Notification</p>
          </div>
          <div className='pro_sc_setting_item'>
            <CachedIcon />
            <p>Intergration</p>
          </div>
        </div>
      </div>
    </div>
  )
}
