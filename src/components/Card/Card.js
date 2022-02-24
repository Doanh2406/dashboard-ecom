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



export default function Card({ data }) {
  const [inCart, setInCart] = useState(0)
  const productId = data._id;
  const userSignin = useSelector(state => state.userSignIn)
  const [countRating, setCountRating] = useState(0);
  const [rating, setRating] = useState(0)
  const [cart, setCart] = useState(1);
  const dispatch = useDispatch();
  const getCart = useSelector(state => state.getCart)

  
  const handleOnclick = async () => {
    return await dispatch(detailProduct(productId))
  }
 
  
  async function ratingRound() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    
  
    setRating(getRandomInt(5))
    setCountRating(getRandomInt(1000))
  }

  const handleCart = () => {
    dispatch(addToCart(productId, cart, userSignin.userInfo._id))
  }
  useEffect(() => {
    if(data.review){
      ratingRound();
    }
    
    if (getCart.cart) {
      getCart.cart.find(x => x.product === productId ? setInCart(parseInt(x.qty, 10)) : null)
    }
  }, [inCart, getCart])
  return (

    <div className='card_container'>
      <NavLink to={`/shopping/${productId}`} style={{ textDecoration: 'none' }} onClick={() => handleOnclick()}  >
        <img src={'http://localhost:5000/upload/product/' + data?.productPicture[0]?.img} className='card_photo' alt='photso' />
      </NavLink>
      <div style={{ padding: 15 }}>
        <NavLink to={`/shopping/${productId}`} style={{ textDecoration: 'none' }}>
          <h2 style={{ fontSize: 18, color: '#ff6e40', marginBottom: -5, cursor: 'pointer' }}>{data.name}</h2>
        </NavLink>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
         
          <p style={{ fontWeight: 530, fontSize: 16 }}>{'$' + data.variant[0]?.price}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>
       

          {
            rating < 1 && <StarIcon style={{ color: '#ffb400' }} />
          }
          {
            rating < 2 && <StarIcon style={{ color: '#ffb400' }} />
          }
          {
            rating  < 3 && <StarIcon style={{ color: '#ffb400' }} />
          }
          {
            rating  < 4 && <StarIcon style={{ color: '#ffb400' }} />
          }
          {
            rating  < 5 && <StarIcon style={{ color: '#ffb400' }} />
          }

          {
            rating > 0 && <StarIcon />
          }
          {
            rating > 1 && <StarIcon />
          }
          {
            rating  > 2 &&<StarIcon />
          }
          {
            rating > 3 && <StarIcon />
          }
          {
            rating > 4 && <StarIcon />
          }


         
          {
            Number(rating) === rating && rating % 1 !== 0 && <StarHalfIcon style={{ color: '#ffb400' }} />
          }
          {
            countRating && <p style={{ marginLeft: 10 }}>({countRating})</p>
          }
        </div>
        <div style={{ height: 10 }} />
        {
          data.variant[0]?.inventoryQly > 0 ? <p className='spd_stock'> In Stock ({data.variant[0]?.inventoryQly}) </p> : <p style={{background:'red'}} className='spd_stock'>Out of stock</p>
        }
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        </div>
      </div>
    </div>
  )
}
