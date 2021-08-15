import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Dashboard } from './components/pages'
import SideBar from './components/SideBar/SideBar'
import './App.scss'
function App() {
  return (
    <Router>
     
      <div style={{ display: 'flex', flexDriection: 'row' }}>


        <SideBar />
        
        <Switch>

          <Route path="/">
            <Dashboard />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
