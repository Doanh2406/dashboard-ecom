import React, { useState } from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import TabsInfor from "../Tabs/TabsInfor";

function Header() {
  const [infor, setInfor] = useState(false);
  function handleBoxClick() {
    setInfor(!infor);
  }
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
      </div>
      <div className="header__bage-icon">
        <Badge badgeContent={4} color="primary" onClick={handleBoxClick}>
          <NotificationsNoneIcon className="header__bage-icon__item" />
        </Badge>

        {infor ? (
          <div className="header__information">
            <div className="header__overlay" onClick={handleBoxClick}></div>
            <div className="header__infor">
              <div className="header__infor__title">
                <span>Notifications</span>
                <ArrowRightAltIcon style={{color:"gray"}} onClick={handleBoxClick}/>
              </div>
              <div className="header__infor__tabs">
                <TabsInfor />
              </div>
            </div>
          </div>
        ) : null}
        <Badge badgeContent={4} color="primary">
          <AddShoppingCartIcon className="header__bage-icon__item" />
        </Badge>
      </div>
      <div className="header__button">
        <AddCircleOutlineIcon className="header__button-icon" />
        <span className="header__button-tittle">Add Product</span>
      </div>
    </div>
  );
}

export default Header;
