import React, { useState, useRef, useEffect } from 'react'
import './CustomersTable.scss'
import customers_data from './customers_data';
import { NavLink } from 'react-router-dom';
import TableHeader from '../../Table/TableHeader';
import TablePages from '../../Table/TablePages'
import { useDispatch } from 'react-redux';
import { listUser } from '../../redux/actions/userActions';
export default function CustomersTable({search, setSearch, list,page, setPage ,sort, setSort, count, setCount }) {
  const dispatch = useDispatch()
  const actionRef = useRef();
  
  const [actions, setActions] = useState(null)
  const [checkAll, setCheckAll] = useState(false)
//skip=>page, count=>limit,sort

console.log(list)
console.log(count,sort,page)
const handleNextPage = (n) => {
  setPage(n ? page + n : page + 1)
}
const handlePrePage = () => {
  if (page === 0) {
    return
  }
  setPage(page - 1)
}
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
    <>
    {
      list && <div className='tb_container'>
      <TableHeader search={search} setSearch={setSearch} count={count} setCount={setCount} sort={sort} handleSort={setSort} title='All customers' />


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
        <div style={{ width: '10%' }} >
          <p>Photo</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Full Name</p>
        </div>
        <div style={{ width: '30%' }} >
          <p>Email</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Country</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Date</p>
        </div><div style={{ width: '20%' }} >
          <p>Status</p>
        </div>


        <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
          <p>Actions</p>
        </div>

      </div>

      {
        list.map((item, index) => {
          let status;
          switch (item.accepts_marketing) {
            case true:
              status = <p className='tb_status' style={{ backgroundColor: '#05b171' }}>Accepted</p>
              break;
        
            default:
              status = <p className='tb_status' ></p>
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
                  pathname: `/customers/${item._id}`,
                  datas: { data: item }
                }}  >
                  <p>{item._id.slice(19,25)}</p>
                </NavLink>
              </div>
              <div style={{ width: '10%' }} >
                <img src={item.userAva?'http://localhost:5000/'+item.userAva:'http://localhost:5000/upload/constants/ava.png'} style={{ width: 50, height: 50, borderRadius: 10, }} alt='' />
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.first_name+' '+ item.last_name}</p>
              </div>
              
              <div style={{ width: '30%' }} >
                <p>{item.email}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.addresses[0].country_name?item.addresses[0].country_name:'Not Set Yet'}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.createdAt.slice(0,10)}</p>
              </div>
              <div style={{ width: '20%' }} >
                {status}
              </div>

              <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
               {
                 !item.accepts_marketing && <p style={{color:'#ff470d',cursor:'pointer',fontWeight:'bold'}}>Accept</p>
               }
              </div>
            </div>
          )
        })
      }
      <TablePages page={page} handleNextPage={handleNextPage} handlePrePage={handlePrePage} />
    </div>
    }
    </>
  )
}
