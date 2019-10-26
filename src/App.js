import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home/home'
import LandingPage from './Login/LandingPage';
import Parts from './particles/Parts';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" strict exact>
          <LandingPage />
        </Route>
        <Route path="/Sigup" strict exact>
          <Parts />
        </Route>
        <Route path="/home" strict exact>
          <Home />
        </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
