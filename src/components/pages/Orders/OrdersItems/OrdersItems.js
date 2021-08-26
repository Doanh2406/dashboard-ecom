import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import LinkHome from '../../../LinkHome/LinkHome'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import './OrdersItems.scss'
import orders_data from './orders_data';
export default function OrdersItems() {
  const location = useLocation();
  const data = location.datas.data;
  const [status, setStatus] = useState(null)
  useEffect(() => {
    switch (data.status) {
      case 'Proscessing':
        setStatus(<p className='ori_status' style={{ backgroundColor: '#ff6e40' }}>Proscessing</p>)
        break;
      case 'Shipped':
        setStatus(<p className='ori_status' style={{ backgroundColor: '#293134' }}>Shipped</p>)
        break;
      case 'Completed':
        setStatus(<p className='ori_status' style={{ backgroundColor: '#05b171' }}>Completed</p>
        )
        break;
      case 'Refunded':
        setStatus(<p className='ori_status' style={{ backgroundColor: '#faae42' }}>Refunded</p>)
        break;
      default:
        setStatus(<p className='ori_status' style={{ backgroundColor: '#ea4444' }}>Cancelled</p>)
        break;
    }
  }, [])
  return (
    <>
      <LinkHome title='Order Detail' />
      <div className='ori_container'>
        <div className='ori_first_container'>
          <div className='ori_first_container_first_row'>
            <div className='ori_fcfr_title'>
              <p>Order No: <span style={{ color: '#ff6e40' }}>{data.id}</span></p>
              {status}
            </div>
            <div className='ori_fcfr_second_row'>
              <div>
                <p style={{ fontWeight: 530 }}>Order Created at</p>
                <p>{data.date}</p>
              </div>
              <div>
                <p style={{ fontWeight: 530 }}>Name</p>
                <p>{data.name}</p>
              </div>
              <div>
                <p style={{ fontWeight: 530 }}>email</p>
                <p>Cai ni data ao k co</p>
              </div>
              <div>
                <p style={{ fontWeight: 530 }}>Contact No</p>
                <p>nhu ben</p>
              </div>
            </div>
            <div className='ori_fcfr_third_row'>
              <div className='ori_fcfr_third_row_card'>
                <div style={{ display: 'flex', padding: 10, alignItems: 'center', flexDirection: 'row', }}>
                  <p style={{ fontWeight: 530, fontSize: 18 }}>Deliver Address</p>
                  <p style={{ marginLeft: 'auto', color: '#ff6e40', cursor: 'pointer' }}>Edit</p>
                </div>
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <LocationOnIcon />
                  <p style={{ marginRight: 10 }}>Tan Lien Huong Hoa Quang Tri</p>
                </div>
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <PhoneIcon />
                  <p style={{ marginRight: 10 }}>012 021 012 000</p>
                </div>
              </div>
              <div className='ori_fcfr_third_row_card'>
                <div style={{ display: 'flex', padding: 10, alignItems: 'center', flexDirection: 'row', }}>
                  <p style={{ fontWeight: 530, fontSize: 18 }}>Billing Address</p>
                  <p style={{ marginLeft: 'auto', color: '#ff6e40', cursor: 'pointer' }}>Edit</p>
                </div>
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <LocationOnIcon />
                  <p style={{ marginRight: 10 }}>Tan Lien Huong Hoa Quang Tri</p>
                </div>
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <PhoneIcon />
                  <p style={{ marginRight: 10 }}>012 021 012 000</p>
                </div>
              </div>
            </div>

          </div>


          <div className='ori_first_container_second_row'>
            <p style={{ marginrTop: 10, marginLeft: 20, fontSize: 24, fontWeight: 520 }}>Orders Items</p>

            <div className='ori_fcsr_container'>
              <div className='ori_fcsr_fr_container_ori'>
                <div className='ori_fcsr_fr'>
                  <p style={{ marginLeft: 30 }}>Photo</p>
                </div>
                <div className='ori_fcsr_fr'>
                  <p>Name</p>
                </div>
                <div className='ori_fcsr_fr'>
                  <p>Quantity</p>
                </div><div className='ori_fcsr_fr'>
                  <p>Price</p>
                </div>
                <div className='ori_fcsr_fr'>
                  <p>Total</p>
                </div>
              </div>
            </div>
            {
              orders_data.map(item => (
                <div className='ori_fcsr_container'>
                  <div className='ori_fcsr_fr_container'>
                    <div className='ori_fcsr_fr'>
                      <img src={item.photo} style={{ marginLeft: 20, borderRadius: 10, width: 50, height: 50 }} alt='photos' />
                    </div>
                    <div className='ori_fcsr_fr'>
                      <p>{item.name}</p>
                    </div>
                    <div className='ori_fcsr_fr'>
                      <p>{item.quantity}</p>
                    </div><div className='ori_fcsr_fr'>
                      <p>{item.price}</p>
                    </div>
                    <div className='ori_fcsr_fr'>
                      <p>{item.total}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div style={{ height: 300 }} />
        </div>



        <div className='ori_second_container'>

          <div className='ori_second_container_first_row'>
            <p style={{ fontWeight: 520, fontSize: 24, marginLeft: 20 }}>Price</p>
            <div className='or_scfr_container'>
              <div className='ori_scfr_price'>
                <p style={{ marginLeft: 'auto' }}>Sub total:</p>
                <p style={{ marginLeft: 'auto' }}>Shiping: </p>
                <p style={{ marginLeft: 'auto' }} >Tax(18%): </p>
                <p style={{ fontWeight: 520, marginLeft: 'auto' }}>Total:</p>

              </div>
              <div className='ori_scfr_price'>
                <p style={{ marginLeft: 20 }}>$1520,94</p>
                <p style={{ marginLeft: 20 }}>Free </p>
                <p style={{ marginLeft: 20 }} >$237 </p>
                <p style={{ fontWeight: 520, marginLeft: 20 }}>$555</p>

              </div>
            </div>
          </div>




          <div className='ori_second_container_second_row'>
          <p style={{ fontWeight: 520, fontSize: 24, marginLeft: 20 }}>Price</p>
            <div className='or_scfr_container'>
              <div className='ori_scfr_price'>
                <p style={{ marginLeft: 'auto' }}>Invoice No:</p>
                <p style={{ marginLeft: 'auto' }}>Seller GST: </p>
                <p style={{ marginLeft: 'auto' }} >Purchase GST: </p>

              </div>
              <div className='ori_scfr_price'>
                <p style={{ marginLeft: 20, color:'#ff6e40' }}>{data.id}</p>
                <p style={{ marginLeft: 20 }}> 12HY87072641Z0</p>
                <p style={{ marginLeft: 20 }} >22HG9838964Z1 </p>

              </div>

            </div>
          <div className='ori_scfr_btn_container'>
            <div className='ori_scfr_btn'>
              <p>Download PDF</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
