import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import LoadingPage from '../../LoadingPage/LoadingPage';
import {  deleteComment, getReview } from '../../redux/actions/reviewActions';
import { deleteCommentReducer } from '../../redux/reducers/reviewReducers';
import './ProductDetail.scss';



export default function Review() {
  let { id } = useParams();
  const [rating, setRating] = useState(0)
  const [countRating, setCountRating] = useState(0);
  const dispatch = useDispatch()
  


  const { loading, review } = useSelector(state => state.reviewGet)
 
  async function ratingRound() {
    if (review) {
      if (review) {

        let count = 0;
        await review.map(item => item.rating && count++)
        setCountRating(count)
        const sum = await review.reduce((partial_sum, a) => partial_sum + a.rating, 0)
        if (Math.round(sum / count) - Math.ceil(sum / count) === 1) {
          setRating(Math.ceil(sum / count) + 0.5)
        } else {
          setRating(Math.ceil(sum / count))
        }
      }
    }

  }
  const handleDelete = async(idR)=>{
    
    await dispatch(deleteComment(id,idR))
    await dispatch(getReview(id))
  }
  async function getData(){
    await dispatch(getReview(id))

  }
  useEffect(() => {
    getData()
    ratingRound()
   
  }, [dispatch])

  return (
    <>
      {
        loading ? <LoadingPage /> : <div className='rv_container'>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 22, marginTop: -30 }}>
            <p style={{ marginRight: 10 }}>Your rate:</p>
            {
              !rating && <>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <p style={{ marginLeft: 10 }}>(Not rated yet)</p>
              </>
            }
            {
              rating - 1 > -0.5 && <StarIcon style={{ color: '#ffb400' }} />
            }
            {
              rating - 2 > -0.5 && <StarIcon style={{ color: '#ffb400' }} />
            }
            {
              rating - 3 > -0.5 && <StarIcon style={{ color: '#ffb400' }} />
            }
            {
              rating - 4 > -0.5 && <StarIcon style={{ color: '#ffb400' }} />
            }
            {
              rating - 5 > -0.5 && <StarIcon style={{ color: '#ffb400' }} />
            }
            {
              Number(rating) === rating && rating % 1 !== 0 && <StarHalfIcon style={{ color: '#ffb400' }} />
            }
            {
              countRating && <p style={{ marginLeft: 10 }}>({countRating})</p>
            }
          </div>
          <div style={{ height: 20 }} />
          {
            review && review.map(item =>
              <div key={item._id} >
                <div className='rv_comment'>
                  <img src={item.userAva ? 'http://localhost:5000/' + item.userAva : 'http://localhost:5000/upload/constants/ava.png'} alt='' />
                  <div className='rv_cm'>
                    <p style={{ fontWeight: 650 }}>{item.userName}</p>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10, }}>
                      {
                        item.rating - 1 > -0.5 && <StarIcon style={{ fontSize: 14, color: '#ffb400' }} />
                      }
                      {
                        item.rating - 2 > -0.5 && <StarIcon style={{ fontSize: 14, color: '#ffb400' }} />
                      }
                      {
                        item.rating - 3 > -0.5 && <StarIcon style={{ fontSize: 14, color: '#ffb400' }} />
                      }
                      {
                        item.rating - 4 > -0.5 && <StarIcon style={{ fontSize: 14, color: '#ffb400' }} />
                      }
                      {
                        item.rating - 5 > -0.5 && <StarIcon style={{ fontSize: 14, color: '#ffb400' }} />
                      }
                      {
                        Number(item.rating) === item.rating && item.rating % 1 !== 0 && <StarHalfIcon style={{ fontSize: 14, color: '#ffb400' }} />
                      }

                    </div>
                    <p style={{ fontSize: 14 }}>{item.userComment}</p>
                  </div>

                </div>
                {
                  item.response && item.response.length > 0 && item.response.map(itemm =>
                    <div style={{ marginLeft: 70, marginTop: 20 }} key={itemm._id} >
                      <div className='rv_comment'>
                        <img src={itemm.userAva ? 'http://localhost:5000/' + itemm.userAva : 'http://localhost:5000/upload/constants/ava.png'} alt='' />
                        <div className='rv_cm'>
                          <p style={{ fontWeight: 650 }}>{itemm.userName}</p>

                          <p style={{ fontSize: 14, marginTop: -10 }}>{itemm.userComment}</p>
                        </div>

                      </div>


                    </div>
                  )
                }
                <p className='rv_delete' onClick={()=>handleDelete(item._id)} >Delete Comment</p>
                <div style={{ width: '100%', height: 1, backgroundColor: '#dbdbdb', marginBottom: 20 }} />
              </div>
            )
          }
         
        </div>
      }
    </>
  )
}
