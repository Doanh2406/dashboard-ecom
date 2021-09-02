import React from 'react'
import './InVoiceDetail.scss'
import LinkHome from '../../LinkHome/LinkHome'
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import PrintIcon from '@material-ui/icons/Print';
export default function InVoiceDetail() {
  return (
    <div className='ivd_container'>
      <LinkHome title='Invoice Detail' />
      <div className='ivd_btn_container'>
        <div className='ivd_btnd'>
          <GetAppIcon style={{ marginRight: 10 }} />
          <p>Download</p>
        </div>
        <div className='ivd_btnp'>
          <PrintIcon style={{ marginRight: 10 }} />
          <p>Print</p>
        </div>
        <div className='ivd_btns'>
          <ShareIcon style={{ marginRight: 10 }} />
          <p>Share</p>
        </div>
      </div>
      <div className='ivd_form' >
        <div className='ivd_form_fl'>
          <p>Invoice no : #000223</p><p style={{ marginLeft: 'auto' }}>Date: 8/29/2021</p>
        </div>
        <div className='ivd_form_fl'>
          <h3>Invoice</h3><h3 style={{ marginLeft: 'auto', color: '#ff6e40' }}>Ekaf Ekin</h3>
        </div>
        <div style={{ width: '100%', background: 'black', opacity: 0.2, height: 1 }} />
        <div className='ivd_form_fl'>
          <h4>Bill from</h4><h4 style={{ marginLeft: 'auto' }}>Bill to</h4>
        </div>
        <div className='ivd_form_fl'>
          <p>Hoa hiep, Tan lien, Huong Hoa</p><p style={{ marginLeft: 'auto' }}>Tan hop, Huong Hoa</p>
        </div>
        <div style={{ marginTop: -25 }} className='ivd_form_fl'>
          <p>Quang tri, Viet Nam</p><p style={{ marginLeft: 'auto' }}>Quang tri, Viet Nam</p>
        </div>
        <div style={{ fontWeight: 530, fontSize: 16 }} className='ivd_form_row'>
          <p style={{ width: '10%' }}>#</p>
          <p style={{ width: '40%' }}>DESCRIPTION</p>
          <p style={{ width: '25%' }}>QUANTITY</p>
          <p style={{ width: '20%' }}>PRICE</p>
          <p style={{ marginLeft: 'auto' }}>TOTAL</p>
        </div>
        <div style={{ width: '100%', background: 'black', opacity: 0.4, height: 1 }} />
        <div className='ivd_form_row'>
          <p style={{ width: '10%' }}>1</p>
          <p style={{ width: '40%' }}>	Digital clock</p>
          <p style={{ width: '25%' }}>Toy Car</p>
          <p style={{ width: '20%' }}>$2132</p>
          <p style={{ marginLeft: 'auto' }}>$213</p>
        </div>
        <div style={{ width: '100%', background: 'black', opacity: 0.2, height: 1 }} />
        <div className='ivd_form_row'>
          <p style={{ width: '10%' }}>2</p>
          <p style={{ width: '40%' }}>Toy Car</p>
          <p style={{ width: '25%' }}>3</p>
          <p style={{ width: '20%' }}>$212</p>
          <p style={{ marginLeft: 'auto' }}>$222</p>
        </div>
        <div style={{ width: '100%', background: 'black', opacity: 0.2, height: 1 }} />
        <div className='ivd_form_row'>
          <p style={{ width: '10%' }}>3</p>
          <p style={{ width: '40%' }}>	Sunglasses</p>
          <p style={{ width: '25%' }}>2</p>
          <p style={{ width: '20%' }}>#223</p>
          <p style={{ marginLeft: 'auto' }}>$332</p>
        </div>
        <div style={{ width: '100%', background: 'black', opacity: 0.2, height: 1 }} />
        <div className='ivd_form_row'>
          <p style={{ width: '10%' }}>4</p>
          <p style={{ width: '40%' }}>	Cake</p>
          <p style={{ width: '25%' }}>1</p>
          <p style={{ width: '20%' }}>$333</p>
          <p style={{ marginLeft: 'auto' }}>$333</p>
        </div>
        <div style={{ width: '100%', background: 'black', opacity: 0.2, height: 1 }} />
        <p style={{marginTop:20}} className='ivd_foot' >Sub total: $1.223,13</p>
        <p className='ivd_foot' >Shipping: free</p>
        <p className='ivd_foot'>Tax(18%): $213</p>
        <h3  className='ivd_foot'>Total: $2000</h3>
      </div>
      <div style={{height:30}}/>
    </div>
  )
}
