import React, { useState, useEffect, useRef } from 'react'
import './Table.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import datas from '../data';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Table() {
  const [sort, setSort] = useState(true)
  const [sortV, setSortV] = useState('Sort By')
  const [count, setCount] = useState(true)
  const [countV, setCountV] = useState(10)
  const [actionBig, setActionBig] = useState(false)
  const [actions, setActions] = useState(null)
  const [checkAll,setCheckAll] = useState(false)
  const actionRef = useRef();

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
  const handleActions = (index)=>{
    if(index===actions){
      setActions(null)
      return;
    }
    setActions(index)
  }
  const handleCheck = ()=>{
    if(actionRef.current.checked){
      setCheckAll(!checkAll)
    }
    else{
      setCheckAll(null)
    }
  }
  return (
    <div className='tb_container'>
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
            <input type="text" id="search-bar" placeholder="What can I help you with today?" />
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


      <div className='tb_first_row'>
        <div className='st_check' style={{ marginBottom: 40, width: '10%', marginLeft: 20 }}>
          <label class="container">
            <input type="checkbox" ref={actionRef} onChange={()=>handleCheck()} />
            <span class="checkmark"></span>
          </label>
        </div>
        <div style={{ width: '10%' }} >
          <p>Id</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Name</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Date</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Total</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Status</p>
        </div>
        <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
          <p>Actions</p>
        </div>

      </div>

      {
        datas.map((item,index) => {
          let status;
          switch (item.status) {
            case 'Proscessing':
              status = <p className='tb_status' style={{ backgroundColor: '#ff6e40' }}>Proscessing</p>
              break;
            case 'Shipped':
              status = <p className='tb_status' style={{ backgroundColor: '#293134' }}>Shipped</p>
              break;
            case 'Completed':
              status = <p className='tb_status' style={{ backgroundColor: '#05b171' }}>Completed</p>
              break;
            case 'Refunded':
              status = <p className='tb_status' style={{ backgroundColor: '#faae42' }}>Refunded</p>
              break;
            default:
              status = <p className='tb_status' style={{ backgroundColor: '#ea4444' }}>Cancelled</p>
              break;
          }


          return (
            <div className='tb_th_row' >
              <div className='st_check' style={{ marginBottom: 40, width: '10%', marginLeft: 20 }}>
                <label class="container">
                  <input type="checkbox" checked={checkAll?true:null}/>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div style={{ width: '10%', color: '#ff6e40' }} >
                <p>{item.id}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.name}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.date}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.total}</p>
              </div>
              <div style={{ width: '20%' }} >
                {status}
              </div>
              <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
                <p className={actions==index?'tb_th_row_actions_clicked':'tb_th_row_actions'}  onClick={()=>{handleActions(index)}}>...</p>
                {
                  actions==null ? null: actions==index ? (
                    <>
                      <div >
                        <div className='tb_th_row_actions_active'>
                          <p className='tb_th_row_actions_active_item item1' style={{ marginTop: 0 }}>Show Detail</p>
                          <p className='tb_th_row_actions_active_item ' >Edit  </p>
                          <p className='tb_th_row_actions_active_item item3' >Delete</p>
                        </div>
                      </div>
                    </>
                  ):null
                }
              </div>
            </div>
          )
        })
      }
      <div className='tb_foot' >
        <div className='tb_page' style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
          <ChevronLeftIcon />
        </div>
        <div className='tb_page_active' style={{ borderLeft: 'none' }}>
          <p >1</p>
        </div>
        <div className='tb_page' style={{ borderLeft: 'none' }}>
          <p>2</p>
        </div>
        <div className='tb_page' style={{ borderLeft: 'none' }}>
          <p>3</p>
        </div>
        <div className='tb_page' style={{ borderLeft: 'none', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  )
}
