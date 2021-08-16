import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


function Header() {
  return (
   
    <div className="header" >
      <div className="header__name"> OverView</div>
      <div className="header__search">
        <SearchIcon className="header__search-icon"/>
        <input
          type="text"
          placeholder="Search ..."
          className="header__search-box"
        />
      </div>
      <div className="header__bage-icon">
        <Badge badgeContent={4} color="primary" >
          <NotificationsNoneIcon className="header__bage-icon__item" />
        </Badge>
        <Badge badgeContent={4}  color="primary">
          <AddShoppingCartIcon  className="header__bage-icon__item" />
        </Badge>
      </div>
      <div className="header__button">
            <AddCircleOutlineIcon className="header__button-icon"/>
          <span className="header__button-tittle" >Add Product</span>
      </div>
    </div>
  );
}

export default Header;
