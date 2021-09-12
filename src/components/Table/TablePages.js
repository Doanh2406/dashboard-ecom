import React from 'react'
import './Table.scss'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './TableFooter.scss'
export default function TablePages({page,handleNextPage,handlePrePage}) {
  
  return (
    <div className='tb_foot' >
    <div onClick={()=>handlePrePage()} className='tb_page' style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
      <ChevronLeftIcon />
    </div>
    <div className='tb_page_active' style={{ borderLeft: 'none' }}>
      <p >{page?page:1}</p>
    </div>
    <div onClick={()=>handleNextPage()} className='tb_page'  style={{ borderLeft: 'none' }}>
      <p>{page?page+1:2}</p>
    </div>
    <div onClick={()=>{handleNextPage(2)}} className='tb_page' style={{ borderLeft: 'none' }}>
      <p>{page?page+2:3}</p>
    </div>
    <div onClick={()=>handleNextPage()} className='tb_page' style={{ borderLeft: 'none', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
      <ChevronRightIcon />
    </div>
  </div>
  )
}
