import React from 'react'
import Notification from './Notification'
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import StorageIcon from '@material-ui/icons/Storage';
import LockIcon from '@material-ui/icons/Lock';

function Notifications() {
    return (
        <div className="notifications-layout">
            <Notification
          icon={<PersonOutlineIcon/>}
          title="You joined a Group"
          time="Yesterday"
          status="warning"
        />
            <Notification
          icon={<StorageIcon/>}
          title="Storage is running low"
          time="Today"
          status="primary"
          
        />
            <Notification
          icon={<LockIcon/>}
          title="2 step verification"
          time="20 minute ago"
          status="succes"
        />
            <Notification
          icon={<LockIcon/>}
          title="2 step verification"
          time="20 minute ago"
          status="secondary"
        />
        </div>
    )
}

export default Notifications
