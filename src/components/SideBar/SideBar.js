import React, { useState } from 'react'
import './SideBar.scss'
import ava from '../../assets/ava.jpg'
import { NavLink } from 'react-router-dom';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Setting from './Setting';
export default function SideBar() {


  const [show, setShow] = useState(false)
  const [setting, setSetting] = useState(false)

  const menu = [
    {
      link: '/',
      name: 'Shop',
      icons: <HomeIcon className='sb_icons' />
    },
    {
      link: '/',
      name: 'Cart',
      icons: <ShoppingCartIcon className='sb_icons' />
    },
    {
      link: '/over',
      name: 'Over View',
      icons: <BarChartIcon className='sb_icons' />
    },
    {
      link: '/orders',
      name: 'Orders',
      icons: <ListAltIcon className='sb_icons' />
    },
    {
      link: '/products',
      name: 'Products',
      icons: <LocalShippingIcon className='sb_icons' />
    },
    {
      link: '/customer',
      name: 'Customer',
      icons: <AssignmentIndIcon className='sb_icons' />
    },
    {
      link: '/',
      name: 'Incomes',
      icons: <ReceiptIcon className='sb_icons' />
    },

  ];
  const handleClick = () => {
    setShow(!show)
  }
  const handleSetting = ()=>{
    setSetting(!setting)
   
  }
  return (
    <>
    {
      setting && (
        <Setting action={handleSetting} />
      )
    }
    <div className='sb_container'>
      <p className='sb_title'>Ekaf Ekin</p>
      <div className='sb_info' style={show?{background:'#ededed'}:null}  onClick={handleClick} >
        <img className='sb_ava' src={ava} alt='avatar' />
        <div className='sb_info_name_des' >
          <p className='sb_info_name'>Ygritte</p>
          <p className='sb_info_des'>iron</p>
          {
            show && (<>
              <div className='sb_info_menu'>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center', marginLeft:20, cursor:'pointer'}} onClick={()=>console.log('cc')} >
                  <PersonIcon style={{fontSize:20}} />
                  <p style={{fontSize:14,marginLeft:10}}>Profile</p>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center', marginLeft:20, marginTop:-5,cursor:'pointer'}} onClick={()=>console.log('ccc')} >
                  <MailOutlineIcon style={{fontSize:20}} />
                  <p style={{fontSize:14,marginLeft:10}}>Inbox</p>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center', marginLeft:20,marginTop:-5,cursor:'pointer'}}  onClick={()=>handleSetting()}>
                  <SettingsIcon style={{fontSize:20}} />
                  <p style={{fontSize:14,marginLeft:10}}>Setting</p>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center', marginLeft:20, marginTop:-5,cursor:'pointer',}} >
                  <ExitToAppIcon style={{fontSize:20,color:'#ff6e40'}} />
                  <p style={{fontSize:14,marginLeft:10,color:'#ff6e40'}}>Logout</p>
                </div>
              </div>
              <div style={{zIndex:1, top: 0, left: 0, position: 'absolute', width: '100vw', height: '100vh', cursor: 'context-menu' }} onClick={() => setShow(!show)}>

              </div>
            </>
            )
          }
        </div>
      </div>

      <p className='sb_title_lite'>
        E-Commerce
      </p>

      <div className='sb_menu'>
        {
          menu.map((item, index) => (
            <div key={index} className='sb_menu_container'>
              <NavLink className='sb_link' exact to={item.link} activeClassName="sb_selected"  >
                <div className='sb_menu_button' >
                  <div className='sb_icons_container'>
                    {item.icons}
                  </div>
                  <p style={{ marginLeft: 10, fontWeight: 530 }}>{item.name}</p>
                </div>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}
