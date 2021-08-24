import React, { useState, useEffect, useRef } from 'react'
import './Table.scss'
import datas from '../data';

import { NavLink } from 'react-router-dom';
import TableHeader from './TableHeader';
import TablePages from './TablePages';
export default function Table({row}) {
  
  const [actions, setActions] = useState(null)
  const [checkAll, setCheckAll] = useState(false)
  const actionRef = useRef();

 
  const handleActions = (index) => {
    if (index === actions) {
      setActions(null)
      return;
    }
    setActions(index)
  }
  const handleCheck = () => {
    if (actionRef.current.checked) {
      setCheckAll(!checkAll)
    }
    else {
      setCheckAll(null)
    }
  }

  return (
    <div className='tb_container'>
     <TableHeader />


      <div className='tb_first_row'>
        <div className='st_check' style={{ marginBottom: 40, width: '10%', marginLeft: 20 }}>
          <label class="container">
            <input type="checkbox" ref={actionRef} onChange={() => handleCheck()} />
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
         datas.map((item, index) => {
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
            <div className='tb_th_row' key={index} >
              <div className='st_check' style={{ marginBottom: 40, width: '10%', marginLeft: 20 }}>
                <label class="container">
                  <input type="checkbox" checked={checkAll ? true : null} />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div style={{ width: '10%', color: '#ff6e40', cursor: 'pointer' }}  >
                <NavLink className='tb_link' exact to={{
                  pathname: '/orders/items',
                  datas: { data:item }
                }}  >
                  <p>{item.id}</p>
                </NavLink>
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
                <p className={actions == index ? 'tb_th_row_actions_clicked' : 'tb_th_row_actions'} onClick={() => { handleActions(index) }}>...</p>
                {
                  actions == null ? null : actions == index ? (
                    <>
                      <div >
                        <div className='tb_th_row_actions_active'>
                          <p className='tb_th_row_actions_active_item item1' style={{ marginTop: 0 }}>Show Detail</p>
                          <p className='tb_th_row_actions_active_item ' >Edit  </p>
                          <p className='tb_th_row_actions_active_item item3' >Delete</p>
                        </div>
                      </div>
                    </>
                  ) : null
                }
              </div>
            </div>
          )
        })
      }
    <TablePages />
    </div>
  )
}
