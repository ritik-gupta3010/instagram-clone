import React from "react";
import "./Login.css";
import {Link} from "react-router-dom"

export default class Login extends React.Component {
  render(){
    return(
      <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label > Email</label>
          <input type="email" placeholder="Enter Your Email.." className="loginInput"/>
          <label >Password</label>
          <input type="password" placeholder="Enter Your Email.." className="loginInput"/>
          <button className="loginButton"><a href="/">Login</a></button>
          </form>
          <a href="/register"><button className="loginRegisterButton">Register</button></a>
        </div>
      </>
    );
  }
}
