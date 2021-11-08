import React, { useState, useRef } from 'react'
import './Incomes.scss'
import LinkHome from '../../LinkHome/LinkHome';
import TableHeader from '../../Table/TableHeader';
import { NavLink } from 'react-router-dom';
import TablePages from '../../Table/TablePages';
import datas from './data'
export default function InVoices() {
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
    <div className='in_container' >
      <LinkHome title='Invoices' />
      <div className='tb_container'>
        <TableHeader title='All Invoices' />


        <div className='tb_first_row'>
          <div className='st_check' style={{ marginBottom: 40, width: '10%', marginLeft: 20 }}>
            <label class="container">
              <input type="checkbox" ref={actionRef} onChange={() => handleCheck()} />
              <span class="checkmark"></span>
            </label>
          </div>
          <div style={{ width: '10%' }} >
            <p>Invoice</p>
          </div>
          <div style={{ width: '20%' }} >
            <p>Customer</p>
          </div>
          <div style={{ width: '20%' }} >
            <p>Total</p>
          </div>
          <div style={{ width: '20%' }} >
            <p>Status</p>
          </div>
          <div style={{ width: '20%' }} >
            <p>Date</p>
          </div>


          <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
            <p>Actions</p>
          </div>

        </div>

        {
          datas.map((item, index) => {
            let status;
            switch (item.status) {
              case 'On pre-order(not paid)':
                status = <p className='tb_status' style={{ backgroundColor: '#9932e7' }}>On pre-order(not paid)</p>
                break;
              case 'Payment accepted':
                status = <p className='tb_status' style={{ backgroundColor: '#05b171' }}>Payment accepted</p>
                break;
              case 'Payment error':
                status = <p className='tb_status' style={{ backgroundColor: '#ea4444' }}>Payment error</p>
                break;
              case 'Preparing the order':
                status = <p className='tb_status' style={{ backgroundColor: '#faae42' }}>Preparing the order</p>
                break;
              case 'Shipped':
                status = <p className='tb_status' style={{ backgroundColor: '#9932e7' }}>Shipped</p>
                break;
              
              default:
                status = <p className='tb_status' style={{ backgroundColor: '#25c2e3' }}>Awaiting Paypal payment</p>
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
                  <NavLink className='tb_link' exact to='/invoicesdetail' >
                    <p>{item.invoice}</p>
                  </NavLink>
                </div>
                <div style={{ width: '20%' }} >
                  <p>{item.name}</p>
                </div>
                <div style={{ width: '20%' }} >
                  <p>{item.total}</p>
                </div>
                <div style={{ width: '20%' }} >
                  <p>{status}</p>
                </div>
                <div style={{ width: '20%' }} >
                  {item.date}
                </div>

                <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
                  <p className={actions === index ? 'tb_th_row_actions_clicked' : 'tb_th_row_actions'} onClick={() => { handleActions(index) }}>...</p>
                  {
                    actions == null ? null : actions === index ? (
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

    </div>

  )
}
