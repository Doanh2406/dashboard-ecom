import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import { Dashboard, Orders, OrdersItems, Home, Cart, Products, Customers, ShopProductsDetail, AddProduct, Profile, Checkout, InVoices, ProductDetail, InVoiceDetail } from "./components/pages";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.scss";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";
import { getCart } from "./components/redux/actions/cartActions";
import axios from "axios";
import LoadingPage from "./components/LoadingPage/LoadingPage";


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
  const { loading, error, userInfo } = useSelector(state => state.userSignIn)


  return (

    <ThemeProvider theme={outerTheme}>
      {
        loading ? <LoadingPage /> : null
      }
      {
        userInfo ?
          <div className="app">
            <div className="sidebar">
              <SideBar />

            </div>
            <div className="body">
              <div style={{ height: 80 }} />
              <Header />

              <Switch>
                <Route exact path="/cart" key={document.location.href} >
                  <Cart />
                </Route>
                <Route exact path="/shopping" key={document.location.href} >
                  <Home />
                </Route>
                <Route exact path="/shopping/:id" key={document.location.href} >
                  <ShopProductsDetail />
                </Route>
                <Route exact path="/orders" key={document.location.href} >
                  <Orders />
                </Route>
                <Route exact path="/orders/items" key={document.location.href} >
                  <OrdersItems />
                </Route>
                <Route exact path="/products" key={document.location.href} >
                  <Products />
                </Route>
                <Route exact path="/customers" key={document.location.href} >
                  <Customers />
                </Route>

                <Route exact path="/addproduct" key={document.location.href} >
                  <AddProduct />
                </Route>
                <Route path="/profile" key={document.location.href} >
                  <Profile />
                </Route>
                <Route path="/checkout" key={document.location.href} >
                  <Checkout />
                </Route>
                <Route path="/invoices" key={document.location.href} >
                  <InVoices />
                </Route>
                <Route path="/productdetail" key={document.location.href} >
                  <ProductDetail />
                </Route>
                <Route path="/invoicesdetail" key={document.location.href} >
                  <InVoiceDetail />
                </Route>
                <Route exact path="/" key={document.location.href} >
                  <Dashboard />
                </Route>
                <Route exact path="*" key={document.location.href} >
                  <NoMatchPage />
                </Route>
              </Switch>

            </div>

          </div>
          :
          <Switch>
            <Route exact path="/" key={document.location.href} >
              <SignIn />
            </Route>
            <Route path="/signup" key={document.location.href} >
              <SignUp />
            </Route>



            <Route path="*" key={document.location.href} >
              <NoMatchPage />
            </Route>
          </Switch>
      }
    </ThemeProvider>


  );
}

export default withRouter(App);