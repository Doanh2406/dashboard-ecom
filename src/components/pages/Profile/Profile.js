import React,{useEffect, useState} from 'react'
import './Profile.scss'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CachedIcon from '@material-ui/icons/Cached';
import ProfileDetails from './ProfileDetails';
import PasswordDetails from './PasswordDetails';
import Notification from './Notification';
import Integrations from './Integrations';

export default function Profile() {
  const [tab,setTab] = useState(1)
  return (
    <>
     <div className='pro_container'>
      <div className='pro_fc' >
        
      {
        tab===1? <ProfileDetails /> :tab===2 ?<PasswordDetails />:tab===3?<Notification />:<Integrations />
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
          <div className={tab===3?'pro_sc_setting_item pro_active':'pro_sc_setting_item'} onClick={()=>setTab(3)} >
            <NotificationsIcon  />
            <p>Notification</p>
          </div>
          <div className={tab===4?'pro_sc_setting_item pro_active':'pro_sc_setting_item'} onClick={()=>setTab(4)} >
            <CachedIcon />
            <p>Intergration</p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
