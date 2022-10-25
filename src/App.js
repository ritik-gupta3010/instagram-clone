// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Page/Home/Home'
import Single from "../src/Page/single/Single"
import Write from "./Page/write/Write"
import Settings from "./Page/settings/Settings"
import Login from "./Page/login/Login"
import Register from "./Page/register/Register"
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import React from 'react';

function App() {
  const user=true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/home">
          <Navbar />
          <Home />
        </Route>
        {/* <Route path="/login">{user?<Home/>:<Login/>}</Route>//login */}
        {/* <Route path="/register">{user?<Home/>:<Register/>}</Route>//register */}
        {/* <Route path="/settings">{user?<Settings/>:<Register/>}</Route>//update your account */}
        <Route path="/write">{user?<Write/>:<Register/>}</Route>//create post 
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
