import React, { useEffect, useState } from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import './Dashboard.scss'

const reviews = [
    {
      name: 'Nhat',
      rating: 5,
      comment: 'Useful',
      image: 'http://localhost:5000/upload/user/1F102150910-1.jpg'
    },
    {
      name: 'Doanh',
      rating: 1,
      comment: 'So bad, this product is useless',
      image: 'http://localhost:5000/upload/user/5a1b7375b6f8b.jpg'
    },
    {
      name: 'Cay',
      rating: 1,
      comment: 'I am from Viet Nam, so I like a star',
      image: 'http://localhost:5000/upload/user/5a2f6b267df66.jpg'
    }
  ]
export default function RecentReview() {
    const [review, setReview] = useState(0)
    function reviewUpdate() {
      if(review===2){
        return setReview(0)
      }
      setReview(review+1)
    }
    useEffect(() => {
      setTimeout(reviewUpdate,2000);
    }, [review])
    return (
        <div>
             <div style={review===0?null:{display:'none'}} className='dashboard_review'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img src={reviews[0].image} alt='' />
              <div>
                <p style={{ fontWeight: 600, marginTop: 0 }}>{reviews[0].name}</p>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10, }}>
                  {
                    reviews[0].rating - 1 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[0].rating - 2 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[0].rating - 3 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[0].rating - 4 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[0].rating - 5 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    Number(reviews[0].rating) === reviews[0].rating && reviews[0].rating % 1 !== 0 && <StarHalfIcon style={{ fontSize: 14, color: '#ffb400' }} />
                  }

                </div>
              </div>

            </div>
            
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ fontWeight: 600 }}>Comment: </p>
              <p style={{ marginLeft: 20 }}>{reviews[0].comment}</p>
            </div>
          </div>



          <div style={review===1?null:{display:'none'}} className='dashboard_review'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img src={reviews[1].image} alt='' />
              <div>
                <p style={{ fontWeight: 600, marginTop: 0 }}>{reviews[1].name}</p>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10, }}>
                  {
                    reviews[1].rating - 1 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[1].rating - 2 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[1].rating - 3 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[1].rating - 4 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[1].rating - 5 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    Number(reviews[1].rating) === reviews[1].rating && reviews[1].rating % 1 !== 0 && <StarHalfIcon style={{ fontSize: 14, color: '#ffb400' }} />
                  }

                </div>
              </div>

            </div>
            
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ fontWeight: 600 }}>Comment: </p>
              <p style={{ marginLeft: 20 }}>{reviews[1].comment}</p>
            </div>
          </div>
          <div style={review===2?null:{display:'none'}} className='dashboard_review'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img src={reviews[2].image} alt='' />
              <div>
                <p style={{ fontWeight: 600, marginTop: 0 }}>{reviews[2].name}</p>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10, }}>
                  {
                    reviews[2].rating - 1 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[2].rating - 2 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[2].rating - 3 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[2].rating - 4 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    reviews[2].rating - 5 > -0.5 && <StarIcon style={{ fontSize: 24, color: '#ffb400' }} />
                  }
                  {
                    Number(reviews[2].rating) === reviews[2].rating && reviews[2].rating % 1 !== 0 && <StarHalfIcon style={{ fontSize: 14, color: '#ffb400' }} />
                  }

                </div>
              </div>

            </div>
            
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ fontWeight: 600 }}>Comment: </p>
              <p style={{ marginLeft: 20 }}>{reviews[2].comment}</p>
            </div>
          </div>



        </div>
    )
}
