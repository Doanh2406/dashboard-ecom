import React, { useEffect } from 'react'
import './Card.scss'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
export default function Card({ data }) {

  return (
    <div className='card_container'>
      <img src={data.photo} className='card_photo' alt='phots' />
      <div style={{ padding: 15 }}>
        <h2 style={{  fontSize: 18, color: '#ff6e40', marginBottom:-5 }}>{data.name}</h2>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
          {
            data.sales && (<p style={{ textDecoration: 'line-through', marginRight: 10 }}>{data.sales}</p>)
          }
          <p style={{ fontWeight: 530, fontSize: 16 }}>{data.price}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginTop:-10 }}>
          {
            data.stars - 1 > -0.5 && <StarIcon />
          }
          {
            data.stars - 2 > -0.5 && <StarIcon />
          }
          {
            data.stars - 3 > -0.5 && <StarIcon />
          }
          {
            data.stars - 4 > -0.5 && <StarIcon />
          }
          {
            data.stars - 5 > -0.5 && <StarIcon />
          }
          {
            Number(data.stars) === data.stars && data.stars % 1 !== 0 && <StarHalfIcon />
          }
          <p style={{ marginLeft: 10 }}>({data.count})</p>
        </div>
        <div style={{display:'flex',flex:1,flexDirection:'row'}}>
          {
            data.inCart ? 
            <div className='card_btn_in'>
              In Cart ({data.inCart})
              </div>:<div className='card_btn'>
            Add to cart
          </div>
          }
          {
            data.favorite ?<div className='card_heart'>
            <FavoriteIcon style={{color:'red',fontSize:18}} />
            </div> :<div className='card_heart'>
              <FavoriteBorderIcon style={{color:'red',fontSize:18}} />
              </div>
          }
        </div>
      </div>
    </div>
  )
}
