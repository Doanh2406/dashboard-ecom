import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState, useEffect, useRef } from 'react'
import './TableHeader.scss'
export default function TableHeader() {
 
  const [sort, setSort] = useState(true)
  const [sortV, setSortV] = useState('Sort By')
  const [count, setCount] = useState(true)
  const [countV, setCountV] = useState(10)
  const [actionBig, setActionBig] = useState(false)


  const handleSort = () => {
    setSort(!sort)
  }
  const handleCount = () => {
    setCount(!count)
  }
  
  useEffect(() => {
    setCount(!count)
  }, [countV])
  useEffect(() => {
    setSort(!sort)
  }, [sortV])
  return (
    <div className='tb_header'>
    <p style={{ marginLeft: 30 }}>All Orders</p>
    <div className={sort ? 'tb_sort_clicked' : 'tb_sort'} onClick={handleSort}>
      <p style={{ width: 51 }}>{sortV}</p>

      <ExpandMoreIcon style={{ marginLeft: 20, marginTop: 5 }} />
    </div>
    {
      sort && (
        <div className='tb_sort_active'>
          <p className='tb_sort_active_item item1' onClick={() => setSortV('None')}>None</p>
          <p className='tb_sort_active_item' onClick={() => setSortV('Desc')}>Desc</p>
          <p className='tb_sort_active_item item3' onClick={() => setSortV('Asc')}>Asc</p>
        </div>
      )
    }
    <div className={count ? 'tb_sort_clicked' : 'tb_sort'} onClick={handleCount}>
      <p>{countV}</p>
      <ExpandMoreIcon style={{ marginLeft: 20, marginTop: 5 }} />
    </div>
    {
      count && (
        <div className='tb_count_active'>
          <p className='tb_count_active_item item1' style={{ marginTop: 0 }} onClick={() => setCountV(10)}>10</p>
          <p className='tb_count_active_item' onClick={() => setCountV(20)} >20</p>
          <p className='tb_count_active_item item3' onClick={() => setCountV(30)}>30</p>
        </div>
      )
    }
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
