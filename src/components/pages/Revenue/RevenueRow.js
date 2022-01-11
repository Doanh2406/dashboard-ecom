import React from 'react'

export default function RevenueRow({data}) {

  return(
    <div className='rev__row'>
      <p>{data?._id.substring(data._id.length-6, data._id.length)}</p>
      <p>{data?.orderStatus[0].date.substring(0,10)}</p>
      <p>{data?.orderStatus.filter(x=>x.isCompleted)[0].type}</p>
      <p>{data?.items?.reduce((acc,current)=>acc+current.payablePrice,0)}</p>
    </div>
  )
}
