import React from 'react'
import './CustomerDetail.scss'
const data = [
  {
    id: '123',
    createAt: '10/9/2021',
    status: 'Pending',
    qty: 10,
    total: 229,

  },
  {
    id: '124',
    createAt: '11/9/2021',
    status: 'Proscessing',
    qty: 3,
    total: 232,

  },
  {
    id: '125',
    createAt: '1/9/2021',
    status: 'Shipped',
    qty: 7,
    total: 239,

  },
  {
    id: '126',
    createAt: '3/9/2021',
    status: 'Completed',
    qty: 4,
    total: 1229,

  },
  {
    id: '127',
    createAt: '6/9/2021',
    status: 'Refunded',
    qty: 8,
    total: 29,

  },
  {
    id: '121',
    createAt: '6/9/2021',
    status: 'Cancelled',
    qty: 2,
    total: 29,

  }
]

export default function TableCustomerDetail() {
  return (
    <div className='cd_tb_container'>
      <div className='cd_tb_row'>
        <p className='cd_title' style={{ width: '15%', marginLeft: 20 }}>Id</p>
        <p className='cd_title' style={{ width: '30%' }}>Orders At</p>
        <p className='cd_title' style={{ width: '30%' }}>Status</p>
        <p className='cd_title' style={{ width: '20%' }}>Quantity</p>
        <p className='cd_title' style={{ width: '5%' }}>Total</p>
      </div>
      <div style={{ height: 1, width: '100%', background: 'gray', opacity: 0.3, marginTop: 0, marginBottom: 20 }} />
      {
        data.map((item, index) => {
          let status;
          switch (item.status) {
            case 'Proscessing':
              status = <p className='cd_status' style={{ backgroundColor: '#ff6e40', }}>Proscessing</p>
              break;
            case 'Shipped':
              status = <p className='cd_status' style={{ backgroundColor: '#293134' }}>Shipped</p>
              break;
            case 'Completed':
              status = <p className='cd_status' style={{ backgroundColor: '#05b171' }}>Completed</p>

              break;
            case 'Refunded':
              status = <p className='cd_status' style={{ backgroundColor: '#faae42' }}>Refunded</p>
              break;
            default:
              status = <p className='cd_status' style={{ backgroundColor: '#ea4444' }}>Cancelled</p>
              break;
          }
          return (
            <div key={index}>
              <div className='cd_tb_row'>
                <p className='cd_sub' style={{ width: '15%', marginLeft: 20,color:'#ff6e40' }}>{item.id}</p>
                <p className='cd_sub' style={{ width: '30%' }}>{item.createAt}</p>
                <div style={{ width: '30%' }}>
                  {status}
                </div>
                <p className='cd_sub' style={{ width: '20%' }}>{item.qty+' items'}</p>
                <p className='cd_sub' style={{ width: '5%' }}>{'$ '+item.total}</p>
              </div>
              <div style={{ height: 1, width: '100%', background: 'gray', opacity: 0.3, marginTop: 0, marginBottom: 20 }} />
            </div>
          )
        })
      }
      <div style={{width:'100%',display:'flex',flexDirection:'row-reverse'}}>
      <p className='cd_title'>Summary : $ 2123</p>
      </div>
      <div style={{height:20}} />
    </div>
  )
}
