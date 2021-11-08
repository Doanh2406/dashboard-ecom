import React from 'react'
import './Coupon.scss';
import LinkHome from '../../LinkHome/LinkHome'
export default function CouponDetail() {
  return (
    <>
      <LinkHome title='Coupon' />
      <div className='cou'>

        <div className='cou__left'>
          <p className='title'>Basic infomation</p>
          <p>Code</p>
          <input placeholder='example: QWEJS213' />
          <p style={{ marginBottom: 0 }}>Type</p>
          <div className='radio__item'>
            <input className='radio' type="radio" name="type" id="1" />
            <label for="1">Percentage</label>
          </div>
          <div className='radio__item'>
            <input className='radio' type="radio" name="type" id="2" />
            <label for="2">Fixed amount</label>
          </div>
          <div className='radio__item'>
            <input className='radio' type="radio" name="type" id="3" />
            <label for="3">Free shipping</label>
          </div>
          <p>Discount value</p>
          <input placeholder='$10.00' />
          <p>Usage limit</p>
          <input placeholder='Usage limit' />
          <div className='radio__item'>
            <input className='radio' type="checkbox" name="type" value="JavaScript" />
            <label for="javascript">Only for registered customers</label>
          </div>

        </div>





        <div className='cou__right'>
          <div className='cou__right__item'>
            <p className='title'>Status</p>
            <div className='radio__item'>
              <input className='radio' type="radio" name="status" id="en" />
              <label for="en">Enable</label>

            </div>
            <div className='radio__item'>
              <input className='radio' type="radio" name="status" id="di" />
              <label for="di">Disable</label>
            </div>
          </div>
          <div className='cou__right__item'>
            <p className='title'>Schedule</p>
            <p style={{fontWeight:300,display:'flex'}}>Use these settings to limit the coupon expiration date.</p>
            <p>Start date</p>
            <input placeholder='example: 20/09/2021' />
            <p>End date </p>
            <input placeholder='example: 20/09/2022' />
          </div>
         
        </div>
        
      </div>
      <div className='cou-btn'>
        <p>Edit this coupon</p>
      </div>
    </>
  )
}
