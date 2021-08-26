import React, { useEffect } from 'react'
import './Card.scss'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavLink } from 'react-router-dom';
export default function Card({ data }) {

  return (
    <div className='card_container'>
      <NavLink to={{
        pathname: '/shop/products',
        datas: { data }
      }} style={{ textDecoration: 'none' }}>
        <img src={data.photo} className='card_photo' alt='photso' />
      </NavLink>
      <div style={{ padding: 15 }}>
        <NavLink to='/shop/products' style={{ textDecoration: 'none' }}>
          <h2 style={{ fontSize: 18, color: '#ff6e40', marginBottom: -5, cursor: 'pointer' }}>{data.name}</h2>
        </NavLink>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
          {
            data.sales && (<p style={{ textDecoration: 'line-through', marginRight: 10 }}>{data.sales}</p>)
          }
          <p style={{ fontWeight: 530, fontSize: 16 }}>{data.price}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>
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
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
          {
            data.inCart ?
              <div className='card_btn_in'>
                In Cart ({data.inCart})
              </div> : <div className='card_btn'>
                Add to cart
              </div>
          }
          {
            data.favorite ? <div className='card_heart'>
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
