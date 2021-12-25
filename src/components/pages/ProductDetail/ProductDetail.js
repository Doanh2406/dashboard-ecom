import React, { useEffect, useState } from 'react'
import './ProductDetail.scss'
import LinkHome from '../../LinkHome/LinkHome'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { detailProduct, editProduct,} from '../../redux/actions/productActions';
import LoadingPage from '../../LoadingPage/LoadingPage';


export default function ProductDetail() {
  let { id } = useParams();
  const history = useHistory()

  const dispatch = useDispatch()
  const [tab, setTab] = useState(1);
  const [photos, setPhotos] = useState(0);
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [sdescription, setSdesciption] = useState();
  const [sale, setSale] = useState();
  const [price, setPrice] = useState();
  const [fearture, setFearture] = useState();
  const [description, setDescription] = useState();
  const [color, setColor] = useState();
  const [countInStock, setCountInStock] = useState();
  const [image, setImage] = useState()
  const { loading, error, product } = useSelector(state => state.productDetail)
 
  const handleArrow = (n) => {
    if (n > product.image.length - 1) {
      setPhotos(0)
      return;
    }
    if (n < 0) {
      setPhotos(product.image.length - 1)
      return;
    }
    setPhotos(n)
  }
  const handleOnSubmit = async () =>{
    
    await dispatch(editProduct(id,name,category,sdescription,price,
      countInStock,fearture,sale,description,color))
    alert('success')
    history.goBack();
    // await dispatch(editProductImage(id,))
  }
  async function fetchData(){
    
    if(product){
      if(product.length===0){
        return await dispatch(detailProduct(id))
      }
    }
    if(product){
      return
    }
    
  }
  useEffect(() => {
    if (product) {
      setName(product.name)
      setColor(product.color)
      setSdesciption(product.sdescription)
      setSale(product.sale)
      setPrice(product.price)
      setDescription(product.description)
      setFearture(product.fearture)
      setCountInStock(product.countInStock)
    }
    fetchData()

  }, [dispatch,product])

  return (
    <>
      {
        loading ? <LoadingPage /> :
          product.length!==0 && <div className='spd_container' >
            <LinkHome title='Products Detail' />
            <div className='spd_fr_container'>
              <div className='spd_fr_fc'>
                <div className='spd_fr_fc_fr'>
                  <div className='spd_arrow' onClick={() => handleArrow(photos - 1)}>
                    <ChevronLeftIcon />
                  </div>
                  <img src={'http://localhost:5000/upload/product/' + product.image[photos].filename} alt='' />
                  <div className='spd_arrow' onClick={() => handleArrow(photos + 1)}>
                    <ChevronRightIcon />
                  </div>
                </div>
                <div className='spd_fr_fc_sr'>
                  <div className='spd_arrow' onClick={() => handleArrow(photos - 1)}>
                    <ChevronLeftIcon />
                  </div>
                  <img className='spd_photo_active' src={'http://localhost:5000/upload/product/' + product.image[photos].filename} alt='' />


                  {
                    product.image.length > 1 && <img className='spd_photo' src={photos + 1 === product.image.length ? 'http://localhost:5000/upload/product/' + product.image[0].filename : 'http://localhost:5000/upload/product/' + product.image[photos + 1].filename} alt='' />
                  }
                  {
                    product.image.length > 2 && <img className='spd_photo' src={photos + 2 === product.image.length ? 'http://localhost:5000/upload/product/' + product.image[0].filename : photos + 1 === product.image.length ? 'http://localhost:5000/upload/product/' + product.image[1].filename : 'http://localhost:5000/upload/product/' + product.image[photos + 2].filename} alt='' />
                  }
                  {
                    product.image.length > 3 && <img className='spd_photo' src={photos + 3 === product.image.length ? 'http://localhost:5000/upload/product/' + product.image[0].filename : photos + 2 === product.image.length ? 'http://localhost:5000/upload/product/' + product.image[1].filename : photos + 1 === product.image.length ? 'http://localhost:5000/upload/product/' + product.image[2].filename : 'http://localhost:5000/upload/product/' + product.image[photos + 3].filename} alt='' />
                  }
                  <div className='spd_arrow' onClick={() => handleArrow(photos + 1)}>
                    <ChevronRightIcon />
                  </div>
                </div>
                <div className='add_btn_container'>
                  <label style={image&&{background:'gray'}} className="add_btn" htmlFor="upload-photo">Add new photos for your product</label>
                  <input value={image} onChange={(e) => setImage(e.target.files)} id='upload-photo' name='upload-photo' className='add_btn_choose' type='file' accept='image/*' multiple />
                </div>
              </div>
              <div className='spd_fr_sc'>
                <div className='spd_fr_sc_title'>
                  <select value={category} onChange={e => setCategory(e.target.value)} className='add_select' >

                    <option>Accessories</option>
                    <option>Phone</option>
                    <option>Camera</option>
                    <option>Headphone</option>
                    <option>Others</option>
                  </select>


                </div>
                <input value={color} onChange={(e) => setColor(e.target.value)} className='add_input' placeholder='Enter your tags color. exp: Red, Blue, White, Black ' />

                <input value={name} onChange={e => setName(e.target.value)} className='add_input' placeholder='Enter your name of product' />
                <input value={sdescription} onChange={e => setSdesciption(e.target.value)} className='add_input' placeholder='Enter your short desciption' />
                <div className='spd_fr_sc_price'>
                  <input value={sale} onChange={e => setSale(e.target.value)} style={{ width: '10%' }} className='add_input' placeholder='Sales?' />
                  <input value={price} onChange={e => setPrice(e.target.value)} style={{ width: '10%', marginLeft: 10 }} className='add_input' placeholder='Price' />
                </div>
                <div className='spd_fr_sc_star'>

                </div>
                <p style={{ marginTop: 50, marginBottom: -10 }}>Feartures:</p>
                <p>{product.features}</p>
                <input value={fearture} onChange={e => setFearture(e.target.value)} className='add_input' placeholder='Enter your fearture' />
                <p style={{ marginTop: 30, marginBottom: -0 }}>Count in stock:</p>
                <input value={countInStock} onChange={(e) => setCountInStock(e.target.value)} className='add_input' placeholder='Count in stock' />
              </div>
            </div>
            <div className='spd_sr_container'>
              <div className='spd_sr_fr'>
                <p className={tab === 1 ? 'spd_active' : 'spd_btn'} onClick={() => { setTab(1) }} >Descriptions</p>
                <p className={tab === 2 ? 'spd_active' : 'spd_btn'} onClick={() => { setTab(2) }} >Review</p>
              </div>
              <div style={{ width: '100%', backgroundColor: '#dbdbdb', height: 1, }} />


              {
                tab === 1 ? <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Enter your detail description' style={{ width: '98.5%' }} className='add_text' /> : <Review />
              }

            </div>
            <div className='add_sub' onClick={()=>handleOnSubmit()}>
              <p>Submit </p>
            </div>
            <div style={{ height: 30 }} />

          </div>
      }
    </>
  )
}

