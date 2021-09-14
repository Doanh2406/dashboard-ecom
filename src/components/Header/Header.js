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
import { detailProduct, listProductsSearch } from "../redux/actions/productActions";
import { listUserSearch } from "../redux/actions/userActions";
import TabsInfor from "../Tabs/TabsInfor";
import "./Header.scss";

function Header() {
  const { userInfo } = useSelector(state => state.userSignIn)
  const [infor, setInfor] = useState(false);
  const { product } = useSelector(state => state.productSearch)
  const { list } = useSelector(state => state.userListSearch)
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
  console.log(list, product)
  useEffect(() => {
    
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
         list  &&
         <div className='header_search_form'>
           cc
          </div>
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
