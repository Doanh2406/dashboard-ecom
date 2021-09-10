import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../LoadingPage/LoadingPage';
import { addReview, getReview } from '../../redux/actions/reviewActions';
import './ShopProductsDetail.scss';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function Review({productId,user}) {
  const dispatch = useDispatch()
  const [comment,setComment] = useState();
  const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1)
  const [dis,setDis] = useState(false)
  const {loading , error ,review} = useSelector(state=> state.reviewGet)
  const handleSend = async ()=>{
   
    await dispatch(addReview(productId,user._id,user.name,user.userAva,value,comment))
    dispatch(getReview(productId))
    setComment('')
  }
  useEffect(()=>{
    if(review){
      review.find(x=>x.userId===user._id&&setDis(true))
    }
  })
  
  return (
    <>
    {
      loading ? <LoadingPage />:<div className='rv_container'>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 22, marginTop: -30 }}>
        <p style={{marginRight:10}}>Your rate:</p>
        <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      
      </div>
      <div style={{ height: 20 }} />
      {
        review && review.map(item =>
          <div key={item._id} >
            <div  className='rv_comment'>
              <img src={item.userAva?'http://localhost:5000/'+item.userAva:'http://localhost:5000/upload/constants/ava.png'} alt='' />
              <div className='rv_cm'>
                <p style={{fontWeight:650}}>{item.userName}</p>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -10, }}>
                  {
                    item.rating - 1 > -0.5 && <StarIcon style={{ fontSize:14, color: '#ffb400' }} />
                  }
                  {
                    item.rating - 2 > -0.5 && <StarIcon style={{fontSize:14, color: '#ffb400'}} />
                  }
                  {
                    item.rating - 3 > -0.5 && <StarIcon style={{ fontSize:14,color: '#ffb400' }} />
                  }
                  {
                    item.rating - 4 > -0.5 && <StarIcon style={{ fontSize:14,color: '#ffb400' }} />
                  }
                  {
                    item.rating - 5 > -0.5 && <StarIcon style={{ fontSize:14,color: '#ffb400' }} />
                  }
                  {
                    Number(item.rating) === item.rating && item.rating % 1 !== 0 && <StarHalfIcon style={{fontSize:14, color: '#ffb400' }} />
                  }

                </div>
                <p style={{fontSize:14}}>{item.userComment}</p>
              </div>

            </div>
            <div style={{ width: '100%', height: 1, backgroundColor: '#dbdbdb',marginBottom:20 }} />
          </div>
        )
      }
      <p>Your review:</p>
      <textarea disabled={dis?true:false} value={comment} onChange={e=>setComment(e.target.value)} placeholder={dis?'You already review for this product':'Leave you review here'} />
      <p className='rv_send' style={dis? {pointerEvents:'none',background:'gray'}:null}  onClick={()=>handleSend()}>Send Review</p>
    </div>
    }
    </>
  )
}
