import React, { useEffect, useState } from 'react'
import './Cart.scss'
import LinkHome from '../../LinkHome/LinkHome'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getCart } from '../../redux/actions/cartActions';
import LoadingPage from '../../LoadingPage/LoadingPage';

export default function Cart() {
  const [qty, setQty] = useState();
  const {loading,error,cart }= useSelector(state => state.getCart)
  const userSignin = useSelector(state => state.userSignIn)
  const dispatch = useDispatch()
  const handleDelete = async  (item)=>{
     await dispatch(deleteCart(userSignin.userInfo._id,item))
     dispatch(getCart(userSignin.userInfo))
  }
  useEffect(()=>{
    
  },[dispatch,cart,loading,error])

  return (
    <>
      {
        loading ? <LoadingPage />:<>
        <LinkHome title='List Cart' />
      <div className='ori_container'>
      <div className='ori_first_container'>
          <div className='ori_first_container_second_row'>
            <div className='ori_fcsr_container'>
              <div className='ori_fcsr_fr_container_ori'>
                <div style={{width:'20%'}} className='ori_fcsr_fr'>
                  <p style={{ marginLeft: 30 }}>Photo</p>
                </div>
                <div style={{width:'30%'}} className='ori_fcsr_fr'>
                  <p>Name</p>
                </div>
                <div style={{width:'30%'}} className='ori_fcsr_fr'>
                  <p>Quantity</p>
                </div>
                <div  className='ori_fcsr_fr'>
                  <p >Price</p>
                </div>
                <div className='ori_fcsr_fr'>
                  <p>Total</p>
                </div>
                <div style={{width:'10%'}} className='ori_fcsr_fr'>
                </div>
              </div>
            </div>
            {
             cart && cart.map(item => (
                <div key={item._id} className='ori_fcsr_container'>
                  <div className='ori_fcsr_fr_container'>
                    <div style={{width:'20%'}} className='ori_fcsr_fr'>
                      <img src={'http://localhost:5000/upload/product/' + item.image[0].filename} style={{ marginLeft: 20, borderRadius: 10, width: 50, height: 50 }} alt='photos' />
                    </div>
                    <div style={{width:'30%'}} className='ori_fcsr_fr'>
                      <p>{item.name}</p>
                    </div>
                    <div style={{width:'30%'}} className='ori_fcsr_fr'>
                      <input onChange={(e)=>setQty(e.target.value)} value={item.qty} className='ca_input' />
                    </div><div className='ori_fcsr_fr'>
                      <p>{'$'+item.price}</p>
                    </div>
                    <div className='ori_fcsr_fr'>
                      <p>{'$'+item.price*item.qty}</p>
                    </div>
                    <div style={{width:'10%'}} className='ori_fcsr_fr'>
                      <div style={{marginLeft:'auto',marginRight:20}} className='ca_delete'onClick={()=>handleDelete(item._id)}  >
                        <DeleteOutlineIcon className='ca_delete_icon' />

                      </div>
                    </div>
                  </div>

                </div>

              ))
            }

            <div style={{ height: 30 }} />
          </div>

        </div>



        <div className='ori_second_container'>

          <div className='ori_second_container_first_row' style={{ marginTop: 20 }}>
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



          <div className='ori_second_container_first_row' style={{ marginTop: 20, paddingBottom: 10 }}>
            <div className='ca_container'>
              <input style={{borderTopRightRadius:0,borderBottomRightRadius:0}} placeholder='Coupon Code' />
              <p className='ca_apply'>Apply</p>
            </div>
            <p style={{ marginLeft: 20, marginTop: -10 }}>Order notes</p>
            <div className='ca_container'>
              <textarea className='ca_textarea' rows="25" />
            </div>

          </div>

          <div className='ca_btn_container'>
            <NavLink exact to='/checkout' style={{ textDecoration: 'none' }} >
              <p style={{marginLeft:15}} className='ca_btn_checkout'>Checkout</p>
            </NavLink>
            <p className='ca_btn_clear'>All Clears</p>

          </div>


        </div>
      </div>
        </>
      }
    </>
  )
}
