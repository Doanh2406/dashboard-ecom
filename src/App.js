import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard, Orders, OrdersItems, Home, Cart, Products, Customers, ShopProductsDetail } from "./components/pages";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.scss";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import { useSelector } from "react-redux";
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
    <>

      <Router>
        <ThemeProvider theme={outerTheme}>
          <Switch>
            {
              userSignin.userInfo ?
                <div className="app">

                  <div className="sidebar">
                    <SideBar />
                  </div>
                  <div className="body">
                    <div style={{ height: 80 }} />
                    <Header />

                    <Route exact path="/cart">
                      <Cart />
                    </Route>
                    <Route exact path="/overview">
                      <Dashboard />
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





                    <Route exact path="/">
                      <Home />
                    </Route>


                  </div>

                </div> :
                <>
                  <Route exact path='/' >
                    <SignIn />
                  </Route>
                  <Route exact path="/signup">
                    <SignUp />
                  </Route>
                </>
            }





          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
