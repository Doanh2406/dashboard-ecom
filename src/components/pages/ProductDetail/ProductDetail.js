import React, {  useState } from 'react'
import './ProductDetail.scss'
import LinkHome from '../../LinkHome/LinkHome'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Review from './Review';


export default function ProductDetail() {
  const [tab,setTab] = useState(1);
  const [title,setTitle] = useState(true)
  const data={
    photo:''
  }
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

  return (
    <div className='spd_container' >
      <LinkHome title='Products Detail' />
      <div className='spd_fr_container'>
        <div className='spd_fr_fc'>
          <div className='spd_fr_fc_fr'>
            <div className='spd_arrow' onClick={() => handleArrow(photos - 1)}>
              <ChevronLeftIcon />
            </div>
            <img src={data.photo[photos]} alt='' />
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
         <div className='add_btn_container'>
           <p className='add_btn'>Set main photos</p>
           <p className='add_btn'>Add photo</p>
           <p className='add_btn'>Delete photo</p>
         </div>
        </div>
        <div className='spd_fr_sc'>
          <div className='spd_fr_sc_title'>
            <select className='add_select' onClick={()=>setTitle(false)}>
              {
                title&& <option>Select your categories</option>

              }
              <option>Accessories</option>
              <option>Phone</option>
              <option>Camera</option>
              <option>Headphone</option>
              <option>Others</option>
            </select>
          

          </div>
          <input className='add_input'  placeholder='Enter your name of product' />
          <input className='add_input'  placeholder='Enter your name of short desciption' />
          <div className='spd_fr_sc_price'>
          <input style={{width:'10%'}} className='add_input'  placeholder='Sales?' />
          <input style={{width:'10%',marginLeft:10}} className='add_input'  placeholder='Price' />
          </div>
          <div className='spd_fr_sc_star'>
            
          </div>
          <p style={{marginTop:50,marginBottom:-10}}>Feartures:</p>
          <p>{data.features}</p>
          <input className='add_input'  placeholder='Enter your fearture' />

        </div>
      </div>
      <div className='spd_sr_container'>
        <div className='spd_sr_fr'>
          <p className={tab===1?'spd_active':'spd_btn'} onClick={()=>{setTab(1)}} >Descriptions</p>
          <p className={tab===2?'spd_active':'spd_btn'} onClick={()=>{setTab(2)}} >Review</p>
        </div>
        <div style={{width:'100%',backgroundColor:'#dbdbdb',height:1,}} />
           
          
           {
              tab===1?<textarea placeholder='Enter your detail description' style={{width:'98.5%'}} className='add_text' />:<Review />
            }

      </div>
      <div className='add_sub'>
        <p>Submit </p>
      </div>
      <div style={{height:30}} />

    </div>
  )
}

