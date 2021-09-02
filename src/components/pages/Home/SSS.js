import React from 'react'
import './ShopProductsDetail.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
export default function SSS() {
  const [item,setItem] = React.useState(null)
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
        <div style={item===2?{borderBottom:0}:{borderTopLeftRadius:10,borderTopRightRadius:10,}} className={item===1?'sss_menu_item_active':' sss_menu_item'} onClick={()=>handleOnclick(1)} >
          <p>How are the delivery processes carried out?</p>
          {item===1?
            <KeyboardArrowUpIcon style={{marginLeft:'auto'}} />:<KeyboardArrowDownIcon style={{marginLeft:'auto'}} />
          }
        </div>
        {item===1 &&<p className='sss_hide'>1</p>}
      </div>
      <div className='sss_menu'>
        <div style={item===null?{borderTop:0,borderBottom:0}:item===1?{borderBottom:0}:item===3?{borderTop:0,borderBottom:0}:null} className={item===2?'sss_menu_item_active':' sss_menu_item'} onClick={()=>handleOnclick(2)} >
          <p>Is there a payment option at the door?</p>
          {item===2?
            <KeyboardArrowUpIcon style={{marginLeft:'auto'}} />:<KeyboardArrowDownIcon style={{marginLeft:'auto'}} />
          }
        </div>
        {item===2 &&<p className='sss_hide'>Yes there are</p>}
      </div>
      <div className='sss_menu'>
        <div style={item===3?{borderBottomLeftRadius:0,borderBottomRightRadius:0}:{borderBottomLeftRadius:10,borderBottomRightRadius:10,}} className={item===3?'sss_menu_item_active':' sss_menu_item'}  onClick={()=>handleOnclick(3)}>
          <p>How manu ca I order at same time?</p>
          {item===3?
            <KeyboardArrowUpIcon style={{marginLeft:'auto'}} />:<KeyboardArrowDownIcon style={{marginLeft:'auto'}} />
          }
        </div>
        {item===3 &&<p style={{borderBottom:'1px solid rgb(167, 167, 167)',borderBottomRightRadius:10,borderBottomLeftRadius:10}} className='sss_hide'>3</p>}
      </div>
    </div>
  )
}
