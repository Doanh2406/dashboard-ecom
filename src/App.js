import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Dashboard, Orders, OrdersItems, Home, Cart, Products, Customers, ShopProductsDetail, AddProduct, Profile, Checkout, InVoices, ProductDetail, InVoiceDetail } from "./components/pages";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.scss";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import { useSelector } from "react-redux";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";
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
  const userSignin = useSelector(state => state.userSignIn)
  return (
    <Router>
      <ThemeProvider theme={outerTheme}>
        {
          true ?
            <div className="app">
              <div className="sidebar">
                <SideBar />
               
              </div>
              <div className="body">
                <div style={{ height: 80 }} />
                <Header />
                
                <Switch>
                  <Route exact path="/cart">
                    <Cart />
                  </Route>
                  <Route exact path="/shopping">
                    <Home />
                  </Route>
                  <Route exact path="/orders">
                    <Orders />
                  </Route>
                  <Route exact path="/orders/items">
                    <OrdersItems />
                  </Route>
                  <Route exact path="/products">
                    <Products />
                  </Route>
                  <Route exact path="/customers">
                    <Customers />
                  </Route>
                  <Route exact path="/shop/products">
                    <ShopProductsDetail />
                  </Route>
                  <Route exact path="/addproduct">
                    <AddProduct />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  <Route path="/checkout">
                    <Checkout />
                  </Route>
                  <Route path="/invoices">
                    <InVoices />
                  </Route>
                  <Route path="/productdetail">
                    <ProductDetail />
                  </Route>
                  <Route path="/invoicesdetail">
                    <InVoiceDetail />
                  </Route>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route exact path="*">
                    <NoMatchPage />
                  </Route>
                </Switch>
               
              </div>
              
            </div>
            :
            <Switch>
              <Route exact path="/" >
                <SignIn />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>



              <Route path="*">
                <NoMatchPage />
              </Route>
            </Switch>
        }






      </ThemeProvider>
    </Router>

  );
}

export default App;
