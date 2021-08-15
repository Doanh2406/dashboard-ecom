import React,{useRef} from 'react'
import './SideBar.scss'
import ava from '../../assets/ava.jpg'
import { NavLink } from 'react-router-dom';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


export default function SideBar() {
  

  const menu = [
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

  ];

  return (
    <div className='sb_container'>
      <p className='sb_title'>Ekaf Ekin</p>
      <div className='sb_info'>
        <img className='sb_ava' src={ava} alt='avatar' />
        <div className='sb_info_name_des'>
          <p className='sb_info_name'>Ygritte</p>
          <p className='sb_info_des'>iron</p>
        </div>
      </div>

      <p className='sb_title_lite'>
        E-Commerce
      </p>

      <div className='sb_menu'>
        {
          menu.map((item, index) => (
            <div className='sb_menu_container'>
              <NavLink key={index} className='sb_link' exact to={item.link} activeClassName="sb_selected"  >
                    <div className='sb_menu_button' >
                      <div className='sb_icons_container'>
                      {item.icons}
                      </div>
                      <p style={{ marginLeft: 10,fontWeight:530 }}>{item.name}</p>
                    </div>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div>
  )
}
