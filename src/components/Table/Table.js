import React, { useState,  useRef } from 'react'
import './Table.scss'
import { NavLink } from 'react-router-dom';
import TableHeader from './TableHeader';
import TablePages from './TablePages';
export default function Table({row,datas}) {
  
  const [actions, setActions] = useState(null)
  const [checkAll, setCheckAll] = useState(false)
  const actionRef = useRef();

  console.log(datas&&datas)
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
  const handleConfirm = async (id)=>{
    console.log(id)
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
         datas && datas?.list?.map((item, index) => {
          let status;
          switch (item.orderStatus.filter(x=>x.isCompleted)[0]?.type) {
            case 'packed':
              status = <p className='tb_status' style={{ backgroundColor: '#293134' }}>Packed</p>
              break;
              case 'delivered':
              status = <p className='tb_status' style={{ backgroundColor: '#05b171' }}>Delivered</p>
              break;
            case 'shipped':
              status = <p className='tb_status' style={{ backgroundColor: '#faae42' }}>Shipped</p>
              break;
            default:
              status = <p className='tb_status' style={{ backgroundColor: '#ff6e40' }}>Ordered</p>
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
                  <p>{item.id.substring(item.id.length-6,item.id.length)}</p>
                </NavLink>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.items[0]?.productId?.name}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.createdAt.split('T')[0]}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>$ {item.totalAmount}</p>
              </div>
              <div style={{ width: '20%' }} >
                {status}
              </div>
              
              <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
                {
                  status.props.children == 'Ordered' && <p onClick={()=>handleConfirm(item.id)} style={{cursor:'pointer', color:'rgb(255, 110, 64)'}}>Confirm</p>
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
