import React from 'react'
import './LinkHome.scss'
import AppsIcon from '@material-ui/icons/Apps';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { NavLink } from 'react-router-dom';
export default function LinkHome({title}) {
  return (
    
      <div className='or_home'>
        <NavLink to='/' className='or_link'>
          <AppsIcon style={{ fontSize: 16, marginRight: 10 }} />
          <p>Home</p>
        </NavLink>

        <ChevronRightIcon style={{ fontSize: 14,marginRight:10 }} />
        <p>{title}</p>
      </div>
   
  )
}
