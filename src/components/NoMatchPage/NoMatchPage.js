import React from 'react'
import { NavLink } from 'react-router-dom'
import './NoMatchPage.scss'
export default function NoMatchPage() {
  return (
    <div className='nmp_container' >
      <h1> Your link is not exits or you were not login yet</h1>
      <NavLink to='/' style={{textDecoration:'none'}}>
      <p style={{fontSize:20}}>Move to our homepage or login</p>
      </NavLink>
    </div>
  )
}
