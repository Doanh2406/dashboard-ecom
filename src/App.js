import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard, Orders, OrdersItems, Home, Cart, Products, Customers, ShopProductsDetail } from "./components/pages";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.scss";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
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
  const [user, setUser] = React.useState(true)
  return (
    <>
      <Router>
<<<<<<< HEAD
        {
          user ?
=======
      
        <div className="app">
        
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="body">
        
>>>>>>> bfd7a661cdc6edc554ac42ec1bdbd3e8ea8104d3
            <Switch>
               <Route exact path="/">
                <SignIn />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
            
            </Switch>
            :
            <ThemeProvider theme={outerTheme}>


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
                  </Switch>

                </div>

              </div>


            </ThemeProvider>
        }
      </Router>
    </>
  );
}

export default App;
