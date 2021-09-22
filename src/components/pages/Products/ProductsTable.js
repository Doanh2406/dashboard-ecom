import React, { useState, useRef, useEffect } from 'react'
import './ProductsTable.scss'
import { NavLink } from 'react-router-dom';
import TableHeader from '../../Table/TableHeader';
import TablePages from '../../Table/TablePages';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, detailProduct, searchProduct } from '../../redux/actions/productActions';
export default function ProductsTable({lite, products, page, handleNextPage, handlePrePage, count, setCount, sort, setSort }) {

  const [actions, setActions] = useState(null)
  const [checkAll, setCheckAll] = useState(false)
  const actionRef = useRef();
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const { userInfo } = useSelector(state => state.userSignIn)
  const { message } = useSelector(state => state.productDelete)

  const handleActions = (index) => {
    if (index === actions) {
      setActions(null)
      return;
    }
    setActions(index)
  }
  const handleCheck = () => {
    if (actionRef.current.checked) {
      setCheckAll(!checkAll)
    }
    else {
      setCheckAll(null)
    }
  }
  async function fetchData() {
    await dispatch(searchProduct(search, userInfo.email))
  }
  useEffect(() => {
    fetchData()

  }, [search, dispatch])
  return (
    <>
      {
        products && 
        <div className='tb_container'>
         <TableHeader search={search} setSearch={setSearch} count={count} setCount={setCount} sort={sort} handleSort={setSort} title='All Products' />
          


          <div className='tb_first_row'>
            <div className='st_check' style={{ marginBottom: 40, width: '10%', marginLeft: 20 }}>
              <label class="container">
                <input type="checkbox" ref={actionRef} onChange={() => handleCheck()} />
                <span class="checkmark"></span>
              </label>
            </div>
            <div style={{ width: '10%' }} >
              <p>Id</p>
            </div>
            <div style={{ width: '20%' }} >
              <p>Photo</p>
            </div>
            <div style={{ width: '20%' }} >
              <p>Name</p>
            </div>
            <div style={{ width: '20%' }} >
              <p>Stock</p>
            </div>
            <div style={{ width: '20%' }} >
              <p>Price</p>
            </div>
            <div style={{ width: '20%' }} >
              <p>Create At</p>
            </div>


            <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
              <p>Actions</p>
            </div>
            
          </div>
          
          {
            products && products.slice(0, count).map((item, index) => {
              let stock;
              item.countInStock > 0 ?
                stock = <p style={{ color: '#05b171' }}>In Stock</p> :

                stock = <p style={{ color: '#ea4444' }}>Out of Stock</p>
              return (
                <div className='tb_th_row' key={index} >
                  <div className='st_check' style={{ marginBottom: 40, width: '10%', marginLeft: 20 }}>
                    <label class="container">
                      <input type="checkbox" checked={checkAll ? true : null} />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div style={{ width: '10%', color: '#ff6e40', cursor: 'pointer' }}  >
                    <NavLink onClick={() => dispatch(detailProduct(item._id))} className='tb_link' exact to={`/product/${item._id}/edit`}
                    >
                      <p>{item._id.slice(19, 25)}</p>
                    </NavLink>
                  </div>
                  <div style={{ width: '20%' }} >
                    <img src={'http://localhost:5000/upload/product/' + item.image[0].filename} style={{ width: 50, height: 50, borderRadius: 10, }} alt='' />
                  </div>

                  <div style={{ width: '20%' }} >
                    <p>{item.name}</p>
                  </div>
                  <div style={{ width: '20%' }} >
                    {stock}
                  </div>
                  <div style={{ width: '20%' }} >
                    <p>{'$' + item.price}</p>
                  </div>
                  <div style={{ width: '20%' }} >
                    <p>{item.createdAt}</p>
                  </div>


                  <div style={{ width: '10%', display: 'flex', flexDirection: 'row-reverse', marginRight: 30 }} >
                    <p className={actions === index ? 'tb_th_row_actions_clicked' : 'tb_th_row_actions'} onClick={() => { handleActions(index) }}>...</p>
                    {
                      actions == null ? null : actions === index ? (
                        <>
                          <div >
                            <div className='tb_th_row_actions_active'>
                              <NavLink to={`/shopping/${item._id}`} style={{ textDecoration: 'none' }} onClick={() => dispatch(detailProduct(item._id))}>
                                <p className='tb_th_row_actions_active_item item1' style={{ marginTop: 0 }}>Show Detail</p>
                              </NavLink>
                              <NavLink onClick={() => dispatch(detailProduct(item._id))} className='tb_link' exact to={`/product/${item._id}/edit`} >
                                <p className='tb_th_row_actions_active_item ' >Edit  </p>
                              </NavLink>
                              <p className='tb_th_row_actions_active_item item3' onClick={() => dispatch(deleteProduct(item._id))} >Delete</p>
                            </div>
                          </div>
                        </>
                      ) : null
                    }
                  </div>
                </div>
              )
            })
          }
         <TablePages page={page} handleNextPage={handleNextPage} handlePrePage={handlePrePage} />
         
        </div>
      }
    </>
  )
}
