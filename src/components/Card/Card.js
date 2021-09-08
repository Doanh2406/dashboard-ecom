import React, { useEffect, useState } from 'react'
import './Card.scss'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { getCartReducer } from '../redux/reducers/cartReducers';



export default function Card({ data }) {

  const [inCart,setInCart] = useState(0)
  const productId = data._id;
  const userSignin = useSelector(state => state.userSignIn)

  const [cart , setCart] = useState(1);
  const dispatch = useDispatch();
  const getCart = useSelector(state => state.getCart)
  const handleOnclick = async () => {
    return await dispatch(detailProduct(productId))
  }
  const handleCart = ()=>{
      dispatch(addToCart(productId,cart,userSignin.userInfo._id))
  }
  useEffect(()=>{
    if(getCart.cart){
      getCart.cart.find(x=>x.product===productId?setInCart(parseInt(x.qty,10)):null)
    } 
  },[inCart,getCart])
  return (

    <div className='card_container'>
      <NavLink to={`/shopping/${productId}`} style={{ textDecoration: 'none' }} onClick={() => handleOnclick()}  >
        <img src={'http://localhost:5000/upload/product/' + data.image[0].filename} className='card_photo' alt='photso' />
      </NavLink>
      <div style={{ padding: 15 }}>
        <NavLink to={`/shopping/${productId}`} style={{ textDecoration: 'none' }}>
          <h2 style={{ fontSize: 18, color: '#ff6e40', marginBottom: -5, cursor: 'pointer' }}>{data.name}</h2>
        </NavLink>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
          {
            data.sale && <p style={{ textDecoration: 'line-through', marginRight: 10 }}>{'$'+data.sale}</p>
          }
          <p style={{ fontWeight: 530, fontSize: 16 }}>{'$' + data.price}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>
          {
            !data.rating && <>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p style={{ marginLeft: 10 }}>(Not rated yet)</p>
            </>
          }
          {
            data.rating - 1 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
          }
          {
            data.rating - 2 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
          }
          {
            data.rating - 3 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
          }
          {
            data.rating - 4 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
          }
          {
            data.rating - 5 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
          }
          {
            Number(data.rating) === data.rating && data.rating % 1 !== 0 && <StarHalfIcon style={{ color: 'yellow' }} />
          }
          {
            data.countRating && <p style={{ marginLeft: 10 }}>({data.countRating})</p>
          }
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
          {
            inCart > 0 ?
              <div className='card_btn_in'>
                In Cart ({inCart})
              </div> :
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <input onChange={(e)=>setCart(e.target.value)} style={{width:'25%',marginRight:20,height:28,marginTop:10,fontSize:13}} placeholder='Quantity' />
                <div className='card_btn' onClick={()=>handleCart()}>
                  Add to cart
                </div>
              </div>
          }
          {
            data.favorite ? <div className='card_heart' >
              <FavoriteIcon style={{ color: 'red', fontSize: 18 }} />
            </div> : <div className='card_heart'>
              <FavoriteBorderIcon style={{ color: 'red', fontSize: 18 }} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}
