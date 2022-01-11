import React from 'react'
import './Revenue.scss'
import RevenueNoData from "./RevenueNoData";
import RevenueRow from './RevenueRow';

export default function RevenueWillPay({data}) {

  return (
    <div className='revP__container'>
      <div className='revP__first-row'>
         <p>Orders</p>
         <p>Date pay</p>
         <p>Status</p>
         <p>Total</p>
      </div>
      <div className='revP__second-row'>
      { (data&&data.length>0)? data?.map((x) => <RevenueRow data={x} />) : <RevenueNoData />}
      </div>
    </div>
  )
}
