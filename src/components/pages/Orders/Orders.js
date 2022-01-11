import React, { useEffect } from 'react'
import './Orders.scss'
import LinkHome from '../../LinkHome/LinkHome';
import Table from '../../Table/Table';
import { useSelector, useDispatch } from 'react-redux';
import { orderList } from '../../redux/actions/orderActions';
export default function Orders() {
  const orders = useSelector(state => state.orderList)
  const dispatch = useDispatch();
 
  
  async function fetchData(){
    await dispatch(orderList())
  }
  useEffect(()=>{
    fetchData();
  },[])
  console.log(orders)
  return (
    <div className='or_container' >
      <LinkHome title='Orders' />
      <Table datas={orders&&orders} />
      
    </div>

  )
}
