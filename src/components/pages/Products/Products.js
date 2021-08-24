import React, { useState } from 'react'
import LinkHome from '../../LinkHome/LinkHome'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import MySlider from '../Home/MySlider'
import ProductsTable from './ProductsTable'
export default function Products() {
  const [keywords, setKeywords] = useState(false)
  const [category, setCategory] = useState(false)
  const [price, setPrice] = useState(false)
  const [color, setColor] = useState(false)



  return (
    <div className='h_container'>
      <div className='h_cl1'>
        <LinkHome title='Products' />
          <ProductsTable />
        <div style={{ height: 100 }} />
      </div>

      <div className='h_cl2' >
        <h3>Filter Products</h3>


        <div className='h_cl2_key'>
          <div className='h_cl2_key_f' onClick={() => setKeywords(!keywords)}>
            <p>Keywords</p>
            <ExpandMoreIcon style={{ marginLeft: 'auto' }} />
          </div>
          {
            keywords && <div className='h_cl2_key_s'>
              <input className='h_cl2_key_s_input' placeholder='Phone, HeadPHone, Shoe...' />
              <SearchIcon style={{ marginLeft: -30, cursor: 'pointer' }} />
            </div>
          }
        </div>



        <div className='h_cl2_ca'>
          <div className='h_cl2_key_f' onClick={() => setCategory(!category)}>
            <p>Categories</p>
            <ExpandMoreIcon style={{ marginLeft: 'auto' }} />
          </div>
          {
            category && <div className='h_cl2_ca_s'>
              <div className='st_check'>
                <label class="container">All
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">Accessories
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">Phone
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">Headphone
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">Camera
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>


              </div>

            </div>
          }
        </div>
        <div className='h_cl2_price'>
          <div className='h_cl2_key_f' onClick={() => setPrice(!price)}>
            <p>Price</p>
            <ExpandMoreIcon style={{ marginLeft: 'auto' }} />
          </div>
          {
            price && <div className='h_cl2_price_s'>
              <MySlider />
            </div>
          }
        </div>


        <div className='h_cl2_color'>
          <div className='h_cl2_key_f' onClick={() => setColor(!color)}>
            <p>Color</p>
            <ExpandMoreIcon style={{ marginLeft: 'auto' }} />
          </div>
          {
            color && <div className='h_cl2_color_s'>
              <label class="cl_container">
                <input type="checkbox"  />
                <span style={{background:'green'}} class="cl_checkmark"></span>
              </label>

              <label class="cl_container">
                <input type="checkbox" />
                <span style={{background:'yellow'}} class="cl_checkmark"></span>
              </label>
              <label class="cl_container">
                <input type="checkbox" />
                <span style={{background:'orange'}} class="cl_checkmark"></span>
              </label>
              <label class="cl_container">
                <input type="checkbox" />
                <span style={{background:'red'}} class="cl_checkmark"></span>
              </label>
              <label class="cl_container">
                <input type="checkbox" />
                <span style={{background:'blue'}} class="cl_checkmark"></span>
              </label>
              <label class="cl_container">
                <input type="checkbox" />
                <span  style={{background:'black'}} class="cl_checkmark"></span>
              </label>
            </div>
          }
        </div>


      </div>
    </div>
  )
}