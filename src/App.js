import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard } from "./components/pages";
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
        
            <Switch>
            {/* <Header/> */}
              <Route exact path="/">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
