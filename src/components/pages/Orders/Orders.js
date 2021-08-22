import React from 'react'
import './Orders.scss'
import LinkHome from '../../LinkHome/LinkHome';
import Table from '../../Table/Table';
export default function Orders() {
  return (
    <div className='or_container' >
      <LinkHome title='Orders' />
      <Table />
      
    </div>

  )
}
