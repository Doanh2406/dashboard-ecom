import { createTheme, ThemeProvider } from "@material-ui/core/styles";
<<<<<<< HEAD
import React, {useEffect} from "react";
=======
import React from "react";
>>>>>>> 80b1d743bba691c678969bb96b30e8a83c633088
import { useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.scss";
import "./components/styles/_value.scss";
import Header from "./components/Header/Header";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";
import {
  AddProduct,
  Cart,
  Checkout,
  Customers,
  Dashboard,
  Home,
  InVoiceDetail,
  InVoices,
  Orders,
  OrdersItems,
  ProductDetail,
  Products,
  Profile,
  ShopProductsDetail,
<<<<<<< HEAD
  CustomerDetail,
  Coupon,
  CouponsList,
  CouponDetail
} from "./components/pages";
import Footer from './components/Footer/Footer'
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import SideBar from "./components/SideBar/SideBar";
import Chat from "./components/Chat/Chat";
=======
  CustomerDetail
} from "./components/pages";

import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import SideBar from "./components/SideBar/SideBar";
>>>>>>> 80b1d743bba691c678969bb96b30e8a83c633088

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#ff6e40",
    },
    secondary: {
      main: "#9932e7",
    },
    light: {
      main: "#ededed",
    },
    backgroundColor: {
      main: "#f5f4fe",
    },
  },
});

function App() {
  const { loading, error, userInfo } = useSelector((state) => state.userSignIn);

  return (
    <ThemeProvider theme={outerTheme}>
      {loading ? <LoadingPage /> : null}
      {userInfo ? (
        <div className="app ">
          <div className="sidebar hide-on-tab-left">
            <SideBar />
          </div>
          <div className="body-app grid ">
            <div className="body-header">
              <Header />
            </div>
            <div className="body-content">
<<<<<<< HEAD
              <Chat userId={userInfo._id} />
              <Switch>

=======
              <Switch>
>>>>>>> 80b1d743bba691c678969bb96b30e8a83c633088
                <Route exact path="/cart" key={document.location.href}>
                  <Cart />
                </Route>
                <Route exact path="/shopping" key={document.location.href}>
                  <Home />
                </Route>
                <Route exact path="/shopping/:id" key={document.location.href}>
                  <ShopProductsDetail />
                </Route>
                <Route exact path="/orders" key={document.location.href}>
                  <Orders />
                </Route>
                <Route exact path="/orders/items" key={document.location.href}>
                  <OrdersItems />
                </Route>
                <Route exact path="/products/manager" key={document.location.href}>
                  <Products />
                </Route>
                <Route exact path="/customer" key={document.location.href}>
                  <Customers />
                </Route>

<<<<<<< HEAD
                <Route exact path="/products/add" key={document.location.href}>
=======
                <Route exact path="/products/add"key={document.location.href}>
>>>>>>> 80b1d743bba691c678969bb96b30e8a83c633088
                  <AddProduct />
                </Route>
                <Route path="/profile" key={document.location.href}>
                  <Profile />
                </Route>
                <Route path="/checkout" key={document.location.href}>
                  <Checkout />
                </Route>
                <Route path="/invoices" key={document.location.href}>
                  <InVoices />
                </Route>
                <Route path="/product/:id/edit" key={document.location.href}>
                  <ProductDetail />
                </Route>
                <Route path="/invoicesdetail" key={document.location.href}>
                  <InVoiceDetail />
                </Route>
                <Route path="/customers/:id" key={document.location.href}>
                  <CustomerDetail />
                </Route>
<<<<<<< HEAD
                <Route path="/coupon" key={document.location.href}>
                  <Coupon />
                </Route>
                <Route path="/couponslist" key={document.location.href}>
                  <CouponsList />
                </Route>
                <Route path="/coupon/:id" key={document.location.href}>
                  <CouponDetail />
                </Route>
=======
>>>>>>> 80b1d743bba691c678969bb96b30e8a83c633088
                <Route exact path="/" key={document.location.href}>
                  <Dashboard />
                </Route>
                <Route exact path="*" key={document.location.href}>
                  <NoMatchPage />
                </Route>
              </Switch>
            </div>
<<<<<<< HEAD
            <div className='footer-main'>
              <Footer />
            </div>
=======
>>>>>>> 80b1d743bba691c678969bb96b30e8a83c633088
          </div>
        </div>
      ) : (
        <Switch>
          <Route exact path="/" key={document.location.href}>
            <SignIn />
          </Route>
          <Route path="/signup" key={document.location.href}>
            <SignUp />
          </Route>

          <Route path="*" key={document.location.href}>
            <NoMatchPage />
          </Route>
        </Switch>
      )}
    </ThemeProvider>
  );
}

export default withRouter(App);
