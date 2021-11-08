import Badge from "@material-ui/core/Badge";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteCart, getCart } from "../redux/actions/cartActions";
import { detailProduct, listProductsSearch } from "../redux/actions/productActions";
import { searchHeader } from "../redux/actions/searchAction";
import { listUserSearch } from "../redux/actions/userActions";
import TabsInfor from "../Tabs/TabsInfor";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Header.scss";

function Header() {
  const { userInfo } = useSelector(state => state.userSignIn)
  const [infor, setInfor] = useState(false);
  const { product } = useSelector(state => state.productSearch)
  const { list } = useSelector(state => state.userListSearch)
  const [search, setSearch] = useState('')
  const [carts,setCarts] = useState(false)
  function handleBoxClick() {
    setInfor(!infor);
  }
  const userSignin = useSelector((state) => state.userSignIn);
  const cart = useSelector((state) => state.getCart);
  const cartItems = useSelector((state) => state.cart);
  const { loading, error, dataP, dataU } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const handleDelete = async  (item)=>{
    await dispatch(deleteCart(userSignin.userInfo._id,item))
    dispatch(getCart(userSignin.userInfo))
 }

  useEffect(() => {
    dispatch(getCart(userSignin.userInfo._id));
  }, [cartItems]);
  useEffect(() => {
    dispatch(searchHeader(search))
  }, [search])

  return (
    <div className="header">
      <div className="header__name"> OverView</div>
      <div className="header__search">
        <SearchIcon className="header__search-icon" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search ..."
          className="header__search-box"
        />
        {
          dataP !== undefined && dataP.length > 0 ?
            <div className='header_search_form'>
              <p style={{display:'absolute', marginLeft:5,color:'#ff6e40'}}>Product:</p>
              {
                dataP.map(item => (
                  <>
                    <NavLink onClick={() => dispatch(detailProduct(item._id))} to={`/shopping/${item._id}`} style={{ textDecoration: 'none' }}>
                      <div className='header_search_item' >

                        <img src={'http://localhost:5000/upload/product/' + item.image[0].filename} alt='' />
                        <div className='search_text'>
                          <p style={{ fontSize: 14 }} >Name: {item.name}</p>
                          <p style={{ marginTop: -12 }}>Category: {item.category}</p>
                          <p style={{ marginTop: -10 }}>Price: {'$' + item.price}</p>
                          {item.sale && <p style={{ marginTop: -10 }}>Sale: {'$' + item.sale}</p>}
                        </div>

                      </div>
                    </NavLink>

                  </>
                ))
              }
             
            </div> : null
        }
       {
          dataU !== undefined && dataU.length > 0 ?
            <div className={dataP !== undefined && dataP.length > 0 ? 'header_search_form_u':'header_search_form'}>
              <p style={{display:'absolute', marginLeft:5,color:'#ff6e40',marginRight:20}}>User:</p>
              {
                dataU.map(item => (
                  <>
                    <NavLink onClick={() => dispatch(detailProduct(item._id))} to={`/shopping/${item._id}`} style={{ textDecoration: 'none' }}>
                      <div className='header_search_item' >

                        <img src={'http://localhost:5000/' + item.userAva} alt='' /> 
                        <div className='search_text'>
                            <p style={{ fontSize: 14 }} >Name: {item.name}</p>
                            <p style={{ marginTop: -12 }}>Email: {item.email}</p>
                            <p style={{ marginTop: -10 }}>Country: { item.country?item.country:'Not set yet'}</p>
                    
                          </div>

                      </div>
                    </NavLink>

                  </>
                ))
              }
          
            </div> : null
        }
      </div>
      <div className="header__bage-icon">
        <Badge badgeContent={4} color="error" onClick={handleBoxClick}>
          <NotificationsNoneIcon className="header__bage-icon__item" />
        </Badge>

        {infor ? (
          <div className="header__information">
            <div className="header__overlay" onClick={handleBoxClick}></div>
            <div className="header__infor">
              <div className="header__infor__title">
                <span>Notifications</span>
                <ArrowRightAltIcon
                  style={{ color: "gray" }}
                  onClick={handleBoxClick}
                />
              </div>
              <div className="header__infor__tabs">
                <TabsInfor />
              </div>
            </div>
          </div>
        ) : null}
        <Badge badgeContent={cart.cart ? cart.cart.length : null} color="error" >
          <AddShoppingCartIcon className="header__bage-icon__item" onClick={()=>setCarts(!carts)}/>
        </Badge>
       {
         carts ? 
         <div className='header_cart_form'>
           <p style={{fontSize:14,fontWeight:600,color:'#ff6e40'}}>Shopping cart</p>
          <div style={{width:'100%',background:'black',height:1,opacity:0.2}} />
          {
            cart.cart !== undefined && cart.cart.length>0 ? cart.cart.map(item=>{
             
              return(
              
              <div className='header_cart_item'>
               <DeleteIcon className='header_delete' style={{marginRight:-5,cursor:'pointer' }} onClick={()=>handleDelete(item._id)} />
               <img src={'http://localhost:5000/upload/product/' + item.image[0].filename} style={{ marginLeft: 20, borderRadius: 10, width: 50, height: 50 }} alt='photos' />
              <div className='header_cart_item_sub'>
                <p style={{marginTop:10}}>Name: {item.name}</p>
                <p>Quantity: {item.qty}</p>
                <p>Price: {'$'+item.price}</p>
              </div>
              </div>
            )}):null
          }
          
          </div>:null
       }
      </div>
      <NavLink exact to="/products/add" style={{ textDecoration: "none" }}>
        <div className="header__button">
          <AddCircleOutlineIcon className="header__button-icon" />

          <span className="header__button-tittle">Add Product</span>
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
