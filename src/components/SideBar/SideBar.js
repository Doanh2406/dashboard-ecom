import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutline";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { signout } from "../redux/actions/userActions";
import Setting from "./Setting";
import "./SideBar.scss";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  const { loading, error, userInfo } = useSelector((state) => state.userSignIn);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [setting, setSetting] = useState(false);
  const history = useHistory();
  const menu = [
    {
      // link: "/",
      name: "Home",
      icons: <HomeOutlinedIcon className="sb_icons" />,
      children: [
        { link: "/", name: "Home" },
        { link: "/", name: "Notifications" },
      ],
    },
    {
      // link: "/shopping",
      name: "Analytics",
      icons: <BarChartOutlinedIcon className="sb_icons" />,
      children: [
        { link: "/shopping", name: "Dashboards" },
        { link: "/shopping/:id", name: "Report" },
        { link: "/shop/add", name: "Live View" },
      ],
    },
    {
      // link: "/products",
      name: "Products",
      icons: <CategoryOutlinedIcon className="sb_icons" />,
      children: [
        { link: "/products/manager", name: "All Product" },
        { link: "/productdetail", name: "Inventory" },
        { link: "/products/add", name: "Add Product" },
      ],
    },
    {
      // link: "/orders",
      name: "Orders",
      icons: <ListAltOutlinedIcon className="sb_icons" />,
      children: [
        { link: "/orders", name: "All Order" },
        { link: "/orders/cancele", name: "Canceled Order" },
        { link: "/orders/refund", name: "Refund Order" },
      ],
    },
    {
      // link: "/finance",
      name: "Finance Report",
      icons: <ReceiptOutlinedIcon className="sb_icons" />,
      children: [
        { link: "/finance", name: "Revenue" },
        { link: "/finance/add", name: "Sales Statistics" },
      ],
    },
    // {
    //   // link: "/dilivery",
    //   name: "Dilivery",
    //   icons: <LocalShippingOutlinedIcon className="sb_icons" />,
    //   children: [
    //     { link: "/dilivery", name: "Dilivery Management" },
    //     { link: "/dilivery/mass", name: "Mass Diliverys" },
    //     { link: "/dilivery/setting", name: "Dilivery Setting" },
    //   ],
    // },
   
    {
      // link: "/customers",
      name: "Customer",
      icons: <AssignmentIndOutlinedIcon className="sb_icons" />,
      children: [
        { link: "/customer", name: "All Customer" },
        { link: "/customer/add", name: "Add Customer" },
        { link: "/customer/import", name: "Import Customer" },
      ],
    },
    {
      // link: "/cart",
      name: "Discount",
      icons: <ShoppingCartOutlinedIcon className="sb_icons" />,
      children: [
        { link: "/cart", name: "Cart" },
        { link: "/discount/manager", name: "Cart Managerment" },
      ],
    },
    {
      // link: "/cart",
      name: "Marketing",
      icons: <LanguageOutlinedIcon className="sb_icons" />,
      children: [
        { link: "/coupon", name: "Coupon" },
        { link: "/couponslist", name: "Coupons List" },
      
      ],
    },
    {
      // link: "/cart",
      name: "MY STORE",
      icons: <LanguageOutlinedIcon className="sb_icons" />,
      children: [
        { link: "/store", name: "General" },
        { link: "/store/payment", name: "Campaigns" },
        { link: "/store/dilivery", name: "Dilivery" },
        { link: "/store/checkout", name: "Checkout" },
        { link: "/store/gift", name: "Gift cards" },
        { link: "/store/sales", name: "Sales Channels" },
        { link: "/store/files", name: "Files" },
      ],
    },
  ];

  const handleClick = () => {
    setShow(!show);
  };

  const handleSetting = () => {
    setSetting(!setting);
  };
  const handleLogOut = () => {
    dispatch(signout());
    history.push("/");
  };
  return (
    <>
      {setting && <Setting action={handleSetting} />}
      <div className="sb_container">
        <p className="sb_title">Ekaf Ekin</p>
        <div
          className="sb_info"
          style={show ? { background: "#ededed" } : null}
          onClick={handleClick}
        >
          <img
            className="sb_ava"
            src={
              userInfo.userAva
                ? "http://localhost:5000/" + userInfo.userAva
                : "http://localhost:5000/upload/constants/ava.png"
            }
            alt="avatar"
          />
          <div className="sb_info_name_des">
            <p className="sb_info_name">{userInfo.name}</p>
            <p className="sb_info_des">{userInfo.role}</p>
            {show && (
              <>
                <div className="sb_info_menu">
                  <NavLink to="/profile" style={{ textDecoration: "none" }}>
                    <div className="sb_info_menu_item">
                      <PersonOutlinedIcon style={{ fontSize: 20 }} />

                      <p style={{ fontSize: 14, marginLeft: 10 }}>Profile</p>
                    </div>
                  </NavLink>
                  <div className="sb_info_menu_item">
                    <MailOutlineOutlinedIcon style={{ fontSize: 20 }} />
                    <p style={{ fontSize: 14, marginLeft: 10 }}>Inbox</p>
                  </div>
                  <div
                    className="sb_info_menu_item"
                    onClick={() => handleSetting()}
                  >
                    <SettingsOutlinedIcon style={{ fontSize: 20 }} />
                    <p style={{ fontSize: 14, marginLeft: 10 }}>Setting</p>
                  </div>
                  <div className="sb_info_menu_item">
                    <ExitToAppIcon style={{ fontSize: 20, color: "#ff6e40" }} />
                    <p
                      style={{ fontSize: 14, marginLeft: 10, color: "#ff6e40" }}
                      onClick={() => handleLogOut()}
                    >
                      Logout
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    zIndex: 1,
                    top: 0,
                    left: 0,
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    cursor: "context-menu",
                  }}
                  onClick={() => setShow(!show)}
                ></div>
              </>
            )}
          </div>
        </div>

        <p className="sb_title_lite">E-Commerce</p>

        <div className="sb_menu">
          {menu.map((item, index) => (
            <SideBarItem
              key={index}
              // link={item.link}
              icons={item.icons}
              name={item.name}
              children={item.children}
              className="sidebar-items"
            />
          ))}
        </div>
      </div>
    </>
  );
}
