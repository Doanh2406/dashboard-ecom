import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
export default function Shipping() {
  return (
    <div>
      <h2>Shipping</h2>
      <p style={{ opacity: 0.6 }}>Choose where you want to recived your product.</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className='sh_cl'>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: -10 }}>
            <input type="radio" value="home" name='add' style={{ width: 20 }} />
            <label for="home">Home</label>
          </div>
          <p>Viet Nam</p>
          <p>Quang tri</p>
          <p>Hoa hiep, Tan lien , Huong hoa</p>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>
            <PhoneIcon style={{ fontSize: 16 }} />
            <p style={{ marginLeft: 5 }}>0337334724</p>
          </div>
        </div>
        <div style={{ width: 50 }} />
        <div className='sh_cl'>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: -10 }}>
            <input type="radio" value="home" name='add' style={{ width: 20 }} />
            <label for="home">Work Place</label>
          </div>
          <p>Viet Nam</p>
          <p>Quang tri</p>
          <p>Hoa hiep, Tan lien , Huong hoa</p>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>
            <PhoneIcon style={{ fontSize: 16 }} />
            <p style={{ marginLeft: 5 }}>0337334724</p>
          </div>
        </div>

      </div>
      <div className='sh_add'>
        <AddCircleOutlineIcon style={{marginRight:5}} />
        <p>Add New Address</p>
      </div>
    </div>
  )
}
