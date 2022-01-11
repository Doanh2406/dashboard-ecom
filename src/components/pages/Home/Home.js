import React, { useState, useEffect } from 'react'
import LinkHome from '../../LinkHome/LinkHome'
import TableHeader from '../../Table/TableHeader'
import Card from '../../Card/Card'
import './Home.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import MySlider from './MySlider'
import TablePages from '../../Table/TablePages'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts, listProductsCategory, listProductsColor, listProductsPrice, listProductsSearch, searchProduct } from '../../redux/actions/productActions'
import LoadingPage from '../../LoadingPage/LoadingPage'


export default function Home() {
  const dispatch = useDispatch()
  const [value, setValue] = useState([0, 1000]);
  const [keywords, setKeywords] = useState(false)
  const [category, setCategory] = useState()
  const [categories, setCategories] = useState(false)
  const [price, setPrice] = useState(false)
  const [colors, setColors] = useState(false)
  const [color, setColor] = useState();
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState(0)
  const [count, setCount] = useState(6)
  const [search, setSearch] = useState()
  const [searchh, setSearchh] = useState('')
  const { loading, products } = useSelector(state => state.productList)
  const { userInfo } = useSelector(state => state.userSignIn)

  const handleNextPage = (n) => {
    setPage(n ? page + n : page + 1)
  }
  const handlePrePage = () => {
    if (page === 0) {
      return
    }
    setPage(page - 1)
  }
  const data = useSelector(state => state.productList)


  const handleSearch = async () => {
    await dispatch(listProductsSearch(userInfo.email, search))
  }

  useEffect(() => {

    dispatch(listProducts(userInfo.email, sort, (page - 1) * count))
  }, [dispatch, page, sort, count, colors, categories, price])


  useEffect(() => {
    if (categories === false) {
      return
    }
    if (category === 'All') {
      return dispatch(listProducts(userInfo.email, sort, (page - 1) * count))

    }
    dispatch(listProductsCategory(userInfo.email, category))

  }, [category])

  useEffect(() => {
    if (price === false) {
      return dispatch(listProducts(userInfo.email, sort, (page - 1) * count))
    }
    setTimeout(() => { dispatch(listProductsPrice(userInfo.email, value)) }, 1500);
  }, [value])
  useEffect(() => {
    if (colors === false) {
      return dispatch(listProducts(userInfo.email, sort, (page - 1) * count))
    }
    dispatch(listProductsColor(userInfo.email, color))
  }, [color])
  async function fetchData() {
    await dispatch(searchProduct(searchh, userInfo.email))
  }
  useEffect(() => {
    fetchData()
  }, [searchh])
  return (
    <>
      {
        loading ? <LoadingPage /> : <div className='h_container'>
          <div className='h_cl1'>
            <LinkHome title='Shop' />
            <div style={{ height: 20 }} />
            <TableHeader search={searchh} setSearch={setSearchh} home={true} count={count} setCount={setCount} sort={sort} handleSort={setSort} title='All products' />
            <div className='h1_cl1_card_container'>
              <div className='h1_cl1_row1'>
                {
                  products.slice(0, 3).map((item, index) => {

                    return (
                      <Card key={index} data={item} />
                    )
                  })
                }
              </div>
              <div className='h1_cl1_row1'>
                {
                  products.slice(3, 6).map((item, index) => {
                    return (
                      <Card key={index} data={item} />
                    )
                  })
                }
              </div>
              <div className='h1_cl1_row1'>
                {
                  count > 8 && products.slice(6, 9).map((item, index) => {
                    return (
                      <Card key={index} data={item} />
                    )
                  })
                }
              </div>
              <div className='h1_cl1_row1'>
                {
                  count > 11 && products.slice(9, 12).map((item, index) => {
                    return (
                      <Card key={index} data={item} />
                    )
                  })

                }
              </div>
            </div>
            <div style={{ height: 30 }} />
            <TablePages page={page} handleNextPage={handleNextPage} handlePrePage={handlePrePage} />

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
                  <input value={search} onChange={e => setSearch(e.target.value)} className='h_cl2_key_s_input' placeholder='Phone, Headphone, Shoe...' />
                  <SearchIcon onClick={() => handleSearch()} style={{ marginLeft: -30, cursor: 'pointer' }} />
                </div>
              }
            </div>



            <div className='h_cl2_ca'>
              <div className='h_cl2_key_f' onClick={() => setCategories(!categories)}>
                <p>Categories</p>
                <ExpandMoreIcon style={{ marginLeft: 'auto' }} />
              </div>
              {
                categories && <div className='h_cl2_ca_s'>
                  <div onChange={e => setCategory(e.target.value)} className='st_check'>
                    <label class="container">All
                      <input checked={category === 'All'} value='All' type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">Accessories
                      <input checked={category === 'Accessories'} value='Accessories' type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">Phone
                      <input checked={category === 'Phone'} value='Phone' type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">Headphone
                      <input checked={category === 'Headphone'} value='Headphone' type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">Camera
                      <input checked={category === 'Camera'} value='Camera' type="checkbox" />
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
                  <MySlider value={value} setValue={setValue} />
                </div>
              }
            </div>


            <div className='h_cl2_color'>
              <div className='h_cl2_key_f' onClick={() => setColors(!colors)}>
                <p>Color</p>
                <ExpandMoreIcon style={{ marginLeft: 'auto' }} />
              </div>
              {
                colors && <div onChange={e => setColor(e.target.value)} className='h_cl2_color_s'>
                  <label class="cl_container">
                    <input value='green' checked={color === 'green'} type="checkbox" />
                    <span style={{ background: 'green' }} class="cl_checkmark"></span>
                  </label>

                  <label class="cl_container">
                    <input value='yellow' checked={color === 'yellow'} type="checkbox" />
                    <span style={{ background: 'yellow' }} class="cl_checkmark"></span>
                  </label>
                  <label class="cl_container">
                    <input value='orange' checked={color === 'orange'} type="checkbox" />
                    <span style={{ background: 'orange' }} class="cl_checkmark"></span>
                  </label>
                  <label class="cl_container">
                    <input value='red' checked={color === 'red'} type="checkbox" />
                    <span style={{ background: 'red' }} class="cl_checkmark"></span>
                  </label>
                  <label class="cl_container">
                    <input value='blue' checked={color === 'blue'} type="checkbox" />
                    <span style={{ background: 'blue' }} class="cl_checkmark"></span>
                  </label>
                  <label class="cl_container">
                    <input value='black' checked={color === 'black'} type="checkbox" />
                    <span style={{ background: 'black' }} class="cl_checkmark"></span>
                  </label>
                </div>
              }
            </div>


          </div>
        </div>
      }
    </>
  )
}
