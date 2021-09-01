import React from 'react'

export default function Billing() {
  return (
    <div>
      <h2>Billing</h2>
      <p style={{ opacity: 0.6 }}>Enter your billing infomation</p>
      <div className='ch_fc_fr_half'>
        <div style={{ width: '48%', marginRight: 35 }}>
          <p>First Name</p>
          <input />
        </div>
        <div style={{ width: '48%' }}>
          <p>Last Name</p>
          <input />
        </div>
      </div>
      <p>Delivery address</p>
      <input style={{ width: '97.5%' }} />

      <div className='ch_fc_fr_half'>
        <div style={{ width: '48%', marginRight: 35 }}>
          <p>City</p>
          <input />
        </div>
        <div style={{ width: '48%' }}>
          <p>Stage</p>
          <input />
        </div>
      </div>
      <div>
        <div className='st_check'>
          <label class="container" style={{ fontSize: 16, marginTop: -5 }}>Shipping Address is same as above

            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>

      </div>
    </div>
  )
}
