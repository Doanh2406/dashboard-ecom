import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard, Orders } from "./components/pages";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.scss";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

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
  return (
    <ThemeProvider theme={outerTheme}>
      <Router>
        <div className="app">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="body">
<<<<<<< HEAD
        
=======
            <div className="header__class">

            <Header />
            <div style={{height:100}} />
            </div>

>>>>>>> 07db25a5a6613f661f19f0a92218a75df948fa40
            <Switch>
            {/* <Header/> */}
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/orders">
                <Orders />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
