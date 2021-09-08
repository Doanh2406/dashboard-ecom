import React, { useEffect, useState } from 'react'
import './ShopProductsDetail.scss'
import LinkHome from '../../LinkHome/LinkHome'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Description from './Description';
import Review from './Review';
import SSS from './SSS';
import { useDispatch, useSelector } from 'react-redux';


import LoadingPage from '../../LoadingPage/LoadingPage';
import { addToCart } from '../../redux/actions/cartActions';





export default function ShopProductsDetail() {
  const productDetail = useSelector(state => state.productDetail);
  const cart = useSelector(state => state.getCart)
  const { loading, error, product } = productDetail;
  const [tab, setTab] = useState(1);
  const [photos, setPhotos] = useState(0);
  const [addCart, setAddCart] = useState();
  const dispatch = useDispatch()
  const userSignin = useSelector(state => state.userSignIn)

  const handleArrow = (n) => {
    if (n > product.image.length - 1) {
      setPhotos(0)

      return;
    }
    if (n < 0) {
      setPhotos(product.image.length - 1)
      return;
    }
    setPhotos(n)
  }
  useEffect(() => {
   if(cart.cart&&product){
     cart.cart.find(x=>x.product===product._id?setAddCart(x.qty):null)
   }

  }, [cart,product])


  const handleAdd = async()=>{
    await dispatch(addToCart(product._id,addCart,userSignin.userInfo._id))

  }
  
  return (
    <>
      {
        loading ? <LoadingPage /> : error ? <p>error</p> : <div className='spd_container' >
          <LinkHome title='Products Detail' />
          <div className='spd_fr_container'>
            <div className='spd_fr_fc'>
              <div className='spd_fr_fc_fr'>
                <div className='spd_arrow' onClick={() => handleArrow(photos - 1)}>
                  <ChevronLeftIcon />
                </div>
                <img src={'http://localhost:5000/upload/product/' + product.image[photos].filename} alt='' />
                <div className='spd_arrow' onClick={() => handleArrow(photos + 1)}>
                  <ChevronRightIcon />
                </div>
              </div>
              <div className='spd_fr_fc_sr'>
                <div className='spd_arrow' onClick={() => handleArrow(photos - 1)}>
                  <ChevronLeftIcon />
                </div>

                <img className='spd_photo_active' src={'http://localhost:5000/upload/product/' + product.image[photos].filename} alt='' />
                <img className='spd_photo' src={photos + 1 === product.image.length ?'http://localhost:5000/upload/product/' + product.image[0].filename :'http://localhost:5000/upload/product/' + product.image[photos + 1].filename} alt='' />
                <img className='spd_photo' src={photos + 2 === product.image.length ?'http://localhost:5000/upload/product/' + product.image[0].filename : photos + 1 === product.image.length ?'http://localhost:5000/upload/product/' + product.image[1].filename :'http://localhost:5000/upload/product/'+ product.image[photos + 2].filename} alt='' />
                <img className='spd_photo' src={photos + 3 === product.image.length ?'http://localhost:5000/upload/product/' + product.image[0].filename : photos + 2 === product.image.length ? 'http://localhost:5000/upload/product/' + product.image[1].filename : photos + 1 === product.image.length ?'http://localhost:5000/upload/product/' + product.image[2].filename :'http://localhost:5000/upload/product/' + product.image[photos + 3].filename} alt='' />

                <div className='spd_arrow' onClick={() => handleArrow(photos + 1)}>
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
            <div className='spd_fr_sc'>
              <div className='spd_fr_sc_title'>
                <p style={{ fontSize: 16, color: '#8f8f8f' }}>{product.category}</p>
                {
                  true ? <div style={{ marginLeft: 'auto' }}>
                    <FavoriteIcon style={{ color: 'red', fontSize: 18, }} />
                  </div> : <div style={{ marginLeft: 'auto' }}>
                    <FavoriteBorderIcon style={{ color: 'red', fontSize: 18, }} />
                  </div>
                }

              </div>
              <p style={{ marginTop: 0, marginLeft: 'auto0', color: 'black', fontWeight: 590, fontSize: 32 }}>{product.name}</p>
              {
                product.countInStock > 0 ? <p className='spd_stock'> In Stock ({product.countInStock}) </p> : <p className='spd_stock'>Out of stock</p>
              }
              <p>{product.sdescription}</p>

              <div style={{ marginTop: -20 }} className='spd_fr_sc_price'>
                {
                  product.sale && <p style={{ marginRight: 20, color: '#8f8f8f', textDecoration: 'line-through' }}>{'$' + product.sale}</p>
                }
                <p>${product.price}</p>
              </div>
              <div className='spd_fr_sc_star'>
                {
                  !product.rating && <>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <p style={{ marginLeft: 10 }}>(Not rated yet)</p>
                  </>
                }
                {
                  product.rating - 1 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                }
                {
                  product.rating - 2 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                }
                {
                  product.rating - 3 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                }
                {
                  product.rating - 4 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                }
                {
                  product.rating - 5 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                }
                {
                  Number(product.rating) === product.rating && product.rating % 1 !== 0 && <StarHalfIcon style={{ color: 'yellow' }} />
                }
                {
                  product.count && <p style={{ marginLeft: 10 }}>({product.count})</p>
                }
              </div>
              <p>Feartures:</p>
              <p>{product.fearture}</p>
              <div className='spd_fr_sc_add'>
                <div className='spd_show'>
                  <input className='spd_input' value={addCart} onChange={(e)=>setAddCart(e.target.value)} />
                  <div className='spd_row' >
                    <ArrowDropUpIcon className='spd_row_up' />
                    <ArrowDropDownIcon className='spd_row_down' />
                  </div>
                </div>
                <div className='spd_add' onClick={()=>{handleAdd()}}>
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
          <div className='spd_sr_container'>
            <div className='spd_sr_fr'>
              <p className={tab === 1 ? 'spd_active' : 'spd_btn'} onClick={() => setTab(1)}>Descriptions</p>
              <p className={tab === 2 ? 'spd_active' : 'spd_btn'} onClick={() => setTab(2)}>Review</p>
              <p className={tab === 3 ? 'spd_active' : 'spd_btn'} onClick={() => setTab(3)}>SSS</p>
            </div>
            <div style={{ width: '100%', backgroundColor: '#dbdbdb', height: 1, }} />
            {
              tab === 1 ? <Description des={product.name} /> : tab === 2 ? <Review /> : <SSS />
            }


          </div>
          <div style={{ height: 30 }} />
        </div>
      }
    </>
  )
}

