import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState, useEffect, useRef } from 'react'
import './TableHeader.scss'
export default function TableHeader({title}) {
  const [actionBig, setActionBig] = useState(false)
  const [sort,setSort] = useState(true)
  return (
    <div className='tb_header'>
    <p style={{ marginLeft: 30,width:130 }}>{title?title:'All Order'}</p>
    <select className='tb_select' onClick={()=>setSort(false)}>
      {
        sort && <option>Sort by</option>
      }
      <option>None</option>
      <option>Asc</option>
      <option>Des</option>
    </select>
    <select className='tb_select'>
      <option>10</option>
      <option>20</option>
      <option>30</option>
    
    </select>
    <div>
      <form class="search-container">
        <input type="text" id="search-bar" placeholder="Search..." />
        <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
      </form>
    </div>
    <div style={{ width: '45.8%' }} />
    <div className={actionBig ? 'tb_a_btn_clicked' : 'tb_a_btn'} onClick={() => setActionBig(!actionBig)}>
      <p>Actions</p>
      <ExpandMoreIcon style={{ marginLeft: 20, marginTop: 5 }} />
    </div>
    {
      actionBig && (
        <>
          <div >
            <div className='tb_actionbig_active'>
              <p className='tb_actionbig_active_item item1' style={{ marginTop: 0 }}>Show Picked</p>
              <p className='tb_actionbig_active_item'  >Edit Picked </p>
              <p className='tb_actionbig_active_item item3' >Delete Picked</p>
            </div>
          </div>
        </>
      )
    }
  </div>
  )
}
