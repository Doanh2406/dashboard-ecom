import React from 'react'
import './ShopProductsDetail.scss'
export default function Description({des}) {
  
  return (
    <div style={{padding:20}} className='des_container'>
        <p>{des}</p>
        
    </div>
  )
}
