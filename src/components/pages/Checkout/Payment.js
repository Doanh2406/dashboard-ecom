import React, { useState } from 'react'
import './Checkout.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
export default function Payment() {
  const [tab, setTab] = useState(null)
  const handleOnclick = (n)=>{
    if(n===tab){
      setTab(null)
    }else{
      setTab(n)
    }
  }
  return (
    <div>
      <h2>Payment</h2>
      <p style={{ opacity: 0.6 }}>Choose your payment method.</p>
      <div className='pm_menu' >
        <div className='pm_menu_btn' onClick={() => handleOnclick(1)} >
          <input checked={tab===1?true:false} style={{ width: 20, marginRight: 10, marginLeft: 10 }} type="radio" name="method" value="first" />
          <label for="first"> Card / Your payment method</label>
          {
            tab===1?  <KeyboardArrowUpIcon style={{ marginLeft: 'auto' }} /> :   <KeyboardArrowDownIcon style={{ marginLeft: 'auto' }} />
          }
        </div>
        {
          tab === 1 && <div className='pm_menu_show'>
            <p>Card Number</p>
            <input checked={tab===1?true:false} style={{ width: '98.%' }} />
            <p>Name of card</p>
            <input style={{ width: '98.5%' }} />
            <p>CVV code</p>
            <input placeholder='025' style={{ width: '98.5%' }} />
            <p>Expiry date</p>
            <input placeholder='MM?YY' style={{ width: '98.5%' }} />
          </div>
        }
      </div>
      <div className='pm_menu'  >
        <div className='pm_menu_btn' onClick={() => handleOnclick(2)} style={tab===null?{borderTop:0,borderBottom:0,borderTopLeftRadius:0,borderTopRightRadius:0}:tab===1?{borderTopLeftRadius: 0,borderTopRightRadius:0,borderBottom:0 }:{borderTopLeftRadius:0,borderTopRightRadius:0,borderTop:0}} >
          <input checked={tab===2?true:false} style={{ width: 20, marginRight: 10, marginLeft: 10 }} type="radio" name="method" value="first" />
          <label for="first"> Pay with paypal</label>
          {
            tab===2?  <KeyboardArrowUpIcon style={{ marginLeft: 'auto' }} /> :   <KeyboardArrowDownIcon style={{ marginLeft: 'auto' }} />
          }
        </div>
        {
          tab === 2 && <div className='pm_menu_show'>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img alt='photos' style={{ width: 80, heigth: 80 }} src='https://kieutruong.com/wp-content/uploads/2019/11/huong-dan-dang-ky-tai-khoan-paypal-1024x512.jpg' />
              <p style={{ marginLeft: 10 }}>You will be redirected to PayPal website to complete your purchase securely</p>
            </div>

          </div>
        }
      </div>
      <div className='pm_menu'  >
        <div className='pm_menu_btn' onClick={() => handleOnclick(3)} style={tab!==3?{ borderTopLeftRadius: 0, borderTopRightRadius: 0,borderBottomLeftRadius:10,borderBottomRightRadius:10 }:{borderTopLeftRadius:0,borderTopRightRadius:0,borderTop:0}} >
          <input checked={tab===3?true:false} style={{ width: 20, marginRight: 10, marginLeft: 10 }} type="radio" name="method" value="first" />
          <label for="first"> Cash on delivery</label>
          {
            tab===3?  <KeyboardArrowUpIcon style={{ marginLeft: 'auto' }} /> :   <KeyboardArrowDownIcon style={{ marginLeft: 'auto' }} />
          }
        </div>
        {
          tab === 3 && <div className='pm_menu_show' style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10,borderBottom:'1px solid rgba(160, 160, 160, 0.822)' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img alt='photos' style={{ width: 80, height: 80 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqdtOoqwkA8hkOqpRVigc8-CXx8WVOKqFLg&usqp=CAU' />
              <p style={{ marginLeft: 10 }}>Pay with cash when your order is delivered</p>
            </div>

          </div>
        }
      </div>


    </div>
  )
}
