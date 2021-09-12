import React, {  useState } from 'react'
import './AddProduct.scss'
import LinkHome from '../../LinkHome/LinkHome'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/actions/productActions';


export default function AddProduct() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [sdescription,setSdescription]= useState();
  const [description, setDescription] = useState();
  const [price,setPrice] = useState()
  const [sale,setSale] = useState();
  const [countInStock, setCountInStock]= useState();
  const [fearture, setFearture] =  useState();
  const userSignin = useSelector(state => state.userSignIn)
  const userCreate = userSignin.userInfo.email;
  const [title,setTitle] = useState(true);
  const [color ,setColor] = useState();
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
  
  const handleSubmit = async ()=>{
    const formData = new FormData();
    formData.append('name',name)
    formData.append('category',category)
    formData.append('sdescription',sdescription)
    formData.append('price',price)
    formData.append('countInStock',countInStock)
    formData.append('fearture',fearture)
    formData.append('sale',sale)
    formData.append('description',description)
    formData.append('color',color)
    for(let i = 0 ; i < image.length;i++){
      formData.append('image',image[i])
    }
    formData.append('userCreate',userCreate);
    await dispatch(addProduct(formData))
    alert('Add success')
    
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
          <label className="add_btn" for="upload-photo">Choose files</label>
           <input  onChange={(e)=>setImage(e.target.files)} id='upload-photo' name='upload-photo' className='add_btn_choose' type='file' accept='image/*' name='uploadedImages' multiple/>
         </div>
        </div>
        <div className='spd_fr_sc'>
          <div className='spd_fr_sc_title'>
            <select onChange={(e)=>setCategory(e.target.value)} className='add_select' onClick={()=>setTitle(false)}>
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
          <input value={color} onChange={(e)=>setColor(e.target.value)} className='add_input'  placeholder='Enter your tags color. exp: Red, Blue, White, Black ' />
          <input value={name} onChange={(e)=>setName(e.target.value)} className='add_input'  placeholder='Enter your name of product' />
          
          <input value={sdescription} onChange={(e)=>setSdescription(e.target.value)} className='add_input'  placeholder='Enter your name of short desciption' />
          <div className='spd_fr_sc_price'>
          <input value={sale} onChange={(e)=>setSale(e.target.value)} style={{width:'10%'}} className='add_input'  placeholder='Sales?' />
          <input value={price} onChange={(e)=>setPrice(e.target.value)} style={{width:'10%',marginLeft:10}} className='add_input'  placeholder='Price' />
          </div>
          <div className='spd_fr_sc_star'>
            
          </div>
          <p style={{marginTop:50,marginBottom:-10}}>Feartures:</p>
          <p>{data.features}</p>
          <input value={fearture} onChange={(e)=>setFearture(e.target.value)} className='add_input'  placeholder='Enter your fearture' />
          <p  style={{marginTop:30,marginBottom:-0}}>Count in stock:</p>
          <input value={countInStock}  onChange={(e)=>setCountInStock(e.target.value)} className='add_input'  placeholder='Count in stock' />
          
        </div>
      </div>
      <div className='spd_sr_container'>
        <div className='spd_sr_fr'>
          <p className='spd_btn spd_active' >Descriptions</p>
        
        </div>
        <div style={{width:'100%',backgroundColor:'#dbdbdb',height:1,}} />
           <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Enter your detail description' style={{width:'98.5%'}} className='add_text' />
          

      </div>
      <div className='add_sub' onClick={()=>handleSubmit()}>
        <p>Submit </p>
      </div>
      <div style={{height:30}} />

    </div>
  )
}

