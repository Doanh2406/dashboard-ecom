import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { detailProduct, searchProduct } from '../redux/actions/productActions';
import './TableHeader.scss'
export default function TableHeader({search,setSearch, home, count, setCount, sort, handleSort, title }) {
  const [actionBig, setActionBig] = useState(false)
  
  const dispatch = useDispatch()
  const { product } = useSelector(state => state.productSearch)
  const {  list } = useSelector(state =>state.userListSearch)
  
   return (
    <>
      <div className='tb_header'>
        <p style={{ marginLeft: 30, width: 130 }}>{title ? title : 'All Order'}</p>
        <select value={sort} onChange={e => handleSort(e.target.value)} className='tb_select' >
          <option value={''}>None</option>
          <option value={1}>Asc</option>
          <option value={-1}>Des</option>
        </select>
        {
          home ? <select value={count} onChange={e => setCount(e.target.value)} className='tb_select'>
            <option valaue={6}>6</option>
            <option valaue={9}>9</option>
            <option valaue={12}>12</option>

          </select> : <select value={count} onChange={e => setCount(e.target.value)} className='tb_select'>
            <option>10</option>
            <option>20</option>
            <option>30</option>

          </select>
        }
        <div>
          <form class="search-container">
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" id="search-bar" placeholder="Search..." />
            <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt='' />
            {
              product !== undefined && product.length > 0 ?  <div  className='search_container_form'>
                {
                  product.map(item => {
                    return (
                      <NavLink onClick={()=>dispatch(detailProduct(item._id))} to={`/shopping/${item._id}`} style={{ textDecoration: 'none' }}>
                        <div className='search_container_item' >

                          <img src={'http://localhost:5000/upload/product/' + item.image[0].filename} alt='' />
                          <div className='search_text'>
                            <p style={{ fontSize: 14 }} >Name: {item.name}</p>
                            <p style={{ marginTop: -12 }}>Category: {item.category}</p>
                            <p style={{ marginTop: -10 }}>Price: {'$' + item.price}</p>
                            {item.sale && <p style={{ marginTop: -10 }}>Sale: {'$' + item.sale}</p>}
                          </div>

                        </div>
                      </NavLink>)
                  })

                }
              </div> :null
            }
              {
               list !== undefined && list.length > 0  ? <div style={{width:'17%'}}  className='search_container_form'>
                {
                  list && list.map(item => {
                    return (
                      <NavLink onClick={()=>dispatch(detailProduct(item._id))} to={`/shopping/${item._id}`} style={{ textDecoration: 'none' }}>
                        <div  className='search_container_item' >

                          <img src={'http://localhost:5000/' + item.userAva} alt='' />
                          <div className='search_text'>
                            <p style={{ fontSize: 14 }} >Name: {item.name}</p>
                            <p style={{ marginTop: -12 }}>Email: {item.email}</p>
                            <p style={{ marginTop: -10 }}>Country: { item.country?item.country:'Not set yet'}</p>
                    
                          </div>

                        </div>
                      </NavLink>)
                  })

                }
              </div> : null
            }
          </form>
        </div>
        <div style={{ width: '45.8%' }} />
        <div className={actionBig ? 'tb_a_btn_clicked' : 'tb_a_btn'} onClick={() => setActionBig(!actionBig)}>
          <p>Actions</p>
          <ExpandMoreIcon style={{ marginLeft: 20, marginTop: 5 }} />
        </div>
        {
          actionBig && (
            <>
              <div >
                <div className='tb_actionbig_active'>
                  <p className='tb_actionbig_active_item item1' style={{ marginTop: 0 }}>Show Picked</p>
                  <p className='tb_actionbig_active_item'  >Edit Picked </p>
                  <p className='tb_actionbig_active_item item3' >Delete Picked</p>
                </div>
              </div>
            </>
          )
        }
      </div>

    </>
  )
}
