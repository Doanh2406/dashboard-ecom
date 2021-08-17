import React from 'react'
import './Table.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import datas from '../data';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
export default function Table() {

  return (
    <div className='tb_container'>
      <div className='tb_header'>
        <p style={{ marginLeft: 30 }}>All Orders</p>
        <div className='tb_sort'>
          <p >Sort by</p>
          <ExpandMoreIcon style={{ marginLeft: 20, marginTop: 5 }} />
        </div>
        <div className='tb_sort'>
          <p>10</p>
          <ExpandMoreIcon style={{ marginLeft: 20, marginTop: 5 }} />
        </div>
        <div>
          <form class="search-container">
            <input type="text" id="search-bar" placeholder="What can I help you with today?" />
            <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
          </form>
        </div>
        <div style={{ width: '40%' }} />
        <div className='tb_a_btn'>
          <p>Actions</p>
          <ExpandMoreIcon style={{ marginLeft: 20, marginTop: 5 }} />
        </div>

      </div>


      <div className='tb_first_row'>
        <div className='st_check' style={{ marginBottom: 40, width: '10%', marginLeft: 20 }}>
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div style={{ width: '10%' }} >
          <p>Id</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Name</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Date</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Total</p>
        </div>
        <div style={{ width: '20%' }} >
          <p>Status</p>
        </div>
        <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
          <p>Actions</p>
        </div>

      </div>

      {
        datas.map((item) => {
          let status;
          switch (item.status) {
            case 'Proscessing':
              status = <p className='tb_status' style={{ backgroundColor: '#ff6e40' }}>Proscessing</p>
              break;
            case 'Shipped':
              status = <p className='tb_status' style={{ backgroundColor: '#293134' }}>Shipped</p>
              break;
            case 'Completed':
              status = <p className='tb_status' style={{ backgroundColor: '#05b171' }}>Completed</p>
              break;
            case 'Refunded':
              status = <p className='tb_status' style={{ backgroundColor: '#faae42' }}>Refunded</p>
              break;
            default:
              status = <p className='tb_status' style={{ backgroundColor: '#ea4444' }}>Cancelled</p>
              break;
          }


          return (
            <div className='tb_th_row'>
              <div className='st_check' style={{ marginBottom: 40, width: '10%', marginLeft: 20 }}>
                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div style={{ width: '10%', color: '#ff6e40' }} >
                <p>{item.id}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.name}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.date}</p>
              </div>
              <div style={{ width: '20%' }} >
                <p>{item.total}</p>
              </div>
              <div style={{ width: '20%' }} >
                {status}
              </div>
              <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
                <p style={{ cursor: 'pointer' }}>...</p>
              </div>
            </div>
          )
        })
      }
      <div className='tb_foot' >
        <div className='tb_page' style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
          <ChevronLeftIcon />
        </div>
        <div className='tb_page' style={{borderLeft:'none'}}>
          <p>1</p>
        </div>
        <div className='tb_page'style={{borderLeft:'none'}}>
          <p>2</p>
        </div>
        <div className='tb_page'style={{borderLeft:'none'}}>
          <p>3</p>
        </div>
        <div className='tb_page' style={{borderLeft:'none',borderTopRightRadius:10,borderBottomRightRadius:10}}>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  )
}
