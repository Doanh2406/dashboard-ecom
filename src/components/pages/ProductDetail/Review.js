import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import './ProductDetail.scss'

export default function Review() {
  const data = {
    stars: 4.5,

  }
  const ao = [
    {
      name: 'nhat',
      stars: 5,
      comment: 'nhat oc ga',
      img: 'https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png',

    },
    {
      name: 'doanh',
      stars: 1,
      comment: 'nhat oc ba',
      img: 'https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png',

    }
  ]
  return (
    <div className='rv_container'>
      <h1>4.0</h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 24, marginTop: -30 }}>
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
        <p>(3)</p>
      </div>
      <div style={{ height: 50 }} />
      {
        ao.map(item =>
          <>
            <div className='rv_comment'>
              <img src={item.img} alt='ava' />
              <div className='rv_cm'>
                <h3>{item.name}</h3>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10 }}>
                  {
                    item.stars - 1 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                  }
                  {
                    item.stars - 2 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                  }
                  {
                    item.stars - 3 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                  }
                  {
                    item.stars - 4 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                  }
                  {
                    item.stars - 5 > -0.5 && <StarIcon style={{ color: 'yellow' }} />
                  }
                  {
                    Number(item.stars) === item.stars && item.stars % 1 !== 0 && <StarHalfIcon style={{ color: 'yellow' }} />
                  }

                </div>
                <p>{item.comment}</p> <p className='prd_delete'>Delete this comment</p>
              </div>

            </div>
            <div style={{ width: '100%', height: 1, backgroundColor: '#dbdbdb',marginBottom:20 }} />
          </>
        )
      }
      
      <p style={{background:'red'}} className='prd_delete'>Disable Review</p>
    </div>
  )
}
