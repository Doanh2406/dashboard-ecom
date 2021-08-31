import React from 'react'
import './ShopProductsDetail.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
export default function SSS() {
  const [item,setItem] = React.useState(1)
  const handleOnclick = (n)=>{
    if(n===item){
      setItem(null)
    }else{
      setItem(n)
    }
  }
  return (
    <div className='sss_container'>
      <div className='sss_menu'>
        <div className={item===1?'sss_menu_item_active':' sss_menu_item'} onClick={()=>handleOnclick(1)} >
          <p>How are the delivery processes carried out?</p>
          <KeyboardArrowDownIcon style={{marginLeft:'auto'}} />
        </div>
        {item===1 &&<p className='sss_hide'>1</p>}
      </div>
      <div className='sss_menu'>
        <div className={item===2?'sss_menu_item_active':' sss_menu_item'} onClick={()=>handleOnclick(2)} >
          <p>Is there a payment option at the door?</p>
          <KeyboardArrowDownIcon style={{marginLeft:'auto'}} />
        </div>
        {item===2 &&<p className='sss_hide'>Yes there are</p>}
      </div>
      <div className='sss_menu'>
        <div className={item===3?'sss_menu_item_active':' sss_menu_item'}  onClick={()=>handleOnclick(3)}>
          <p>How manu ca I order at same time?</p>
          <KeyboardArrowDownIcon style={{marginLeft:'auto'}} />
        </div>
        {item===3 &&<p className='sss_hide'>3</p>}
      </div>
    </div>
  )
}
