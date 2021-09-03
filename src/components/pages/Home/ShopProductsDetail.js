import React, { useEffect, useState } from 'react'
import './ShopProductsDetail.scss'
import LinkHome from '../../LinkHome/LinkHome'
import { useLocation } from "react-router-dom"
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
export default function ShopProductsDetail() {
  const [tab,setTab] = useState(1);
 
  const location = useLocation();
  const data = location.datas.data;
  const [photos, setPhotos] = useState(0);
 
  const handleArrow = (n) => {
    if (n > data.photo.length - 1) {
      setPhotos(0)
     
      return;
    }
    if (n < 0) {
      setPhotos(data.photo.length - 1)
      return;
    }
    setPhotos(n)
  }


  console.log(photos)

  return (
    <div className='spd_container' >
      <LinkHome title='Products Detail' />
      <div className='spd_fr_container'>
        <div className='spd_fr_fc'>
          <div className='spd_fr_fc_fr'>
            <div className='spd_arrow' onClick={() => handleArrow(photos - 1)}>
              <ChevronLeftIcon />
            </div>
            <img src={data.photo[photos]} alt='photos' />
            <div className='spd_arrow' onClick={() => handleArrow(photos + 1)}>
              <ChevronRightIcon />
            </div>
          </div>
          <div className='spd_fr_fc_sr'>
            <div className='spd_arrow' onClick={() => handleArrow(photos - 1)}>
              <ChevronLeftIcon />
            </div>
          
            <img className='spd_photo_active' src={data.photo[photos]} alt='' />
            <img className='spd_photo' src={photos+1===data.photo.length?data.photo[0]:data.photo[photos+1]} alt='' />
            <img className='spd_photo' src={photos+2===data.photo.length?data.photo[0]:photos+1===data.photo.length?data.photo[1]:data.photo[photos+2]} alt='' />
            <img className='spd_photo' src={photos+3===data.photo.length?data.photo[0]:photos+2===data.photo.length?data.photo[1]:photos+1===data.photo.length?data.photo[2]:data.photo[photos+3]} alt='' />
          
            <div className='spd_arrow' onClick={() => handleArrow(photos + 1)}>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <div className='spd_fr_sc'>
          <div className='spd_fr_sc_title'>
            <p style={{ fontSize: 14, color: '#8f8f8f' }}>{data.category}</p>
            {
              data.favorite ? <div style={{ marginLeft: 'auto' }}>
                <FavoriteIcon style={{ color: 'red', fontSize: 18, }} />
              </div> : <div style={{ marginLeft: 'auto' }}>
                <FavoriteBorderIcon style={{ color: 'red', fontSize: 18, }} />
              </div>
            }

          </div>
          <h1 style={{ marginTop: -5 }}>{data.name}</h1>
          <p>{data.descriptions}</p>
          <div className='spd_fr_sc_price'>
            <p style={{ marginRight: 20, color: '#8f8f8f', textDecoration: 'line-through' }}>{data.sales}</p>
            <p>{data.price}</p>
          </div>
          <div className='spd_fr_sc_star'>
            {
              data.stars - 1 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
            }
            {
              data.stars - 2 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
            }
            {
              data.stars - 3 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
            }
            {
              data.stars - 4 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
            }
            {
              data.stars - 5 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
            }
            {
              Number(data.stars) === data.stars && data.stars % 1 !== 0 && <StarHalfIcon style={{ color: 'yellow' }} />
            }
            <p style={{ marginLeft: 10 }}>({data.count})</p>
          </div>
          <p>Feartures:</p>
          <p>{data.features}</p>
          <div className='spd_fr_sc_add'>
            <div className='spd_show'>
              <input className='spd_input' value={data.inCart} />
              <div className='spd_row' >
                <ArrowDropUpIcon className='spd_row_up' />
                <ArrowDropDownIcon className='spd_row_down' />
              </div>
            </div>
            <div className='spd_add'>
              <p>Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
      <div className='spd_sr_container'>
        <div className='spd_sr_fr'>
          <p className={tab===1?'spd_active':'spd_btn'} onClick={()=>setTab(1)}>Descriptions</p>
          <p className={tab===2?'spd_active':'spd_btn'} onClick={()=>setTab(2)}>Review</p>
          <p className={tab===3?'spd_active':'spd_btn'} onClick={()=>setTab(3)}>SSS</p>
        </div>
        <div style={{width:'100%',backgroundColor:'#dbdbdb',height:1,}} />
            {
              tab===1?<Description des={data.des} />:tab===2?<Review />:<SSS />
            }


      </div>
      <div style={{height:30}} />
    </div>
  )
}

