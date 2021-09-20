import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../LoadingPage/LoadingPage';
import { addResponse, addReview, getReview } from '../../redux/actions/reviewActions';
import './ShopProductsDetail.scss';



export default function Review({ productId, user }) {
  const dispatch = useDispatch()
  const [comment, setComment] = useState()
  const [response, setResponse] = useState()
  const { loading, error, review } = useSelector(state => state.reviewGet)
  const [test ,setTest ] = useState(false)

  const handleResponse = (index)=>{
    if(index===response){
      return setResponse(null)
    }
    setResponse(index)
  }
  const handleSend = async (stt) => {
    await dispatch((addResponse(productId, user._id, user.name, user.userAva, comment, stt)))
    await dispatch(getReview(productId))
    setComment('')
  }
  useEffect(() => {
    console.log(productId)
  }, [review])
  return (
    <>
      {
        loading ? null : <div className='rv_container'>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 22, marginTop: -30 }}>

            <h3>Customer's Review for your prodct:</h3>

          </div>
          <div style={{ height: 20 }} />
          {
            review && review.map((item, index) =>
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
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -5 }}>
                  
                  <p className='rv_btn_res' onClick={()=>handleResponse(index)}>Response</p>
                  
                  {
                    response===index && <div className='rv_res'>
                      <input  value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Response for this review' style={{ opacity: 0.7, fontSize: 14, height: 30, marginLeft: 70, width: '50%' }} />
                      <p className='rv_btn' onClick={() => handleSend(index)}>Send</p>

                    </div>
                  }
                </div>
                <div style={{ width: '100%', height: 1, backgroundColor: '#dbdbdb', marginBottom: 20 }} />
              </div>
            )
          }

        </div>
      }
    </>
  )
}
