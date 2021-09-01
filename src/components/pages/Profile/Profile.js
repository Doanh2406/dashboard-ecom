import React,{useState} from 'react'
import './Profile.scss'
import ava from '../../../assets/ava.png'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CachedIcon from '@material-ui/icons/Cached';
import { useSelector } from 'react-redux';
import ProfileDetails from './ProfileDetails';
import PasswordDetails from './PasswordDetails';
export default function Profile() {
  const state = useSelector(state => state.userSignIn.userInfo)
  const [tab,setTab] = useState(1)
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
      {
        tab===1? <ProfileDetails /> :tab===2 &&<PasswordDetails />
      }
          

      </div>
      <div className='pro_sc'>
        <div className='pro_sc_setting'>
          <div className={tab===1?'pro_sc_setting_item pro_active':'pro_sc_setting_item'} onClick={()=>setTab(1)} >
            <AccountBoxIcon />
            <p>Profile</p>
          </div>
          <div className={tab===2?'pro_sc_setting_item pro_active':'pro_sc_setting_item'} onClick={()=>setTab(2)} > 
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
