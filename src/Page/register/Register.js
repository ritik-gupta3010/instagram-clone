import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
  render()
  {
    return(
        <>
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label > Username</label>
                <input type="text" placeholder="Enter Your username.." className="registerInput"/>
                <label > Email</label>
                <input type="email" placeholder="Enter Your Email.." className="registerInput"/>
                <label >Password</label>
                <input type="password" placeholder="Enter Your Email.." className="registerInput"/>
                <button className="registerButton"><a href="/login">Register</a></button>
            </form>
            <button className="registerLoginButton"><a href="/login">Login</a></button>
        </div>
        </>
    );
  }
}
