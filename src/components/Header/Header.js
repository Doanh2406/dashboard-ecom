import Badge from "@material-ui/core/Badge";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCart } from "../redux/actions/cartActions";
import { detailProduct } from "../redux/actions/productActions";
import TabsInfor from "../Tabs/TabsInfor";
import "./Header.scss";

function Header() {
  const [infor, setInfor] = useState(false);
  const { product } = useSelector(state => state.productSearch)
  const { list } = useSelector(state =>state.userListSearch)
  const [search, setSearch] = useState()
  function handleBoxClick() {
    setInfor(!infor);
  }
  const userSignin = useSelector((state) => state.userSignIn);
  const cart = useSelector((state) => state.getCart);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(userSignin.userInfo._id));
  }, [cartItems]);
  return (
    <div className="header">
      <div className="header__name"> OverView</div>
      <div className="header__search">
        <SearchIcon className="header__search-icon" />
        <input
          type="text"
          placeholder="Search ..."
          className="header__search-box"
        />
         {
              product ? <div style={product===undefined?{display:'none',}:null} className='search_container_form'>
                {
                  product && product.map(item => {
                    return (
                      <NavLink onClick={()=>dispatch(detailProduct(item._id))} to={`/shopping/${item._id}`} style={{ textDecoration: 'none' }}>
                        <div className='search_container_item' >

                          <img src={'http://localhost:5000/upload/product/' + item.image[0].filename} alt='' />
                          <div className='search_text'>
                            <p style={{ fontSize: 14 }} >Name: {item.name}</p>
                            <p style={{ marginTop: -12 }}>Category: {item.category}</p>
                            <p style={{ marginTop: -10 }}>Price: {'$' + item.price}</p>
                            {item.sale && <p style={{ marginTop: -10 }}>Sale: {'$' + item.sale}</p>}
                          </div>

                        </div>
                      </NavLink>)
                  })

                }
              </div> : null
            }
              {
              list ? <div style={{width:'17%'}}  className='search_container_form'>
                {
                  list && list.map(item => {
                    return (
                      <NavLink onClick={()=>dispatch(detailProduct(item._id))} to={`/shopping/${item._id}`} style={{ textDecoration: 'none' }}>
                        <div  className='search_container_item' >

                          <img src={'http://localhost:5000/' + item.userAva} alt='' />
                          <div className='search_text'>
                            <p style={{ fontSize: 14 }} >Name: {item.name}</p>
                            <p style={{ marginTop: -12 }}>Email: {item.email}</p>
                            <p style={{ marginTop: -10 }}>Country: { item.country?item.country:'Not set yet'}</p>
                    
                          </div>

                        </div>
                      </NavLink>)
                  })

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
        <Badge badgeContent={cart.cart ? cart.cart.length : null} color="error">
          <AddShoppingCartIcon className="header__bage-icon__item" />
        </Badge>
      </div>
      <NavLink exact to="/addproduct" style={{ textDecoration: "none" }}>
        <div className="header__button">
          <AddCircleOutlineIcon className="header__button-icon" />

          <span className="header__button-tittle">Add Product</span>
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
