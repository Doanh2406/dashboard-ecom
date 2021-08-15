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
  },
});

function App() {
  return (

    <ThemeProvider theme={outerTheme}>
      <Router>
        <div style={{ display: "flex", flexDriection: "row" }}>
          <SideBar />

          <Header />

          <Switch>

          <Route exact path="/over">
            <Dashboard />
          </Route>
        
        </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
