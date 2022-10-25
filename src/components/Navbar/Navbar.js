import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";


export default class Navbar extends React.Component {
  render() {
    // const user=true;
    return (
      <>
        <nav>
          <div className="top">
            <div className="topLeft">
              {/* <a href="" ></a> */}
              <a style={{ textDecoration: 'none' ,color:"black"}} href="/"> Instagram 
              <i className="fa fa-instagram instagram" aria-hidden="true"></i></a>
            </div>
            <div className="topRight">
              <ul className="topList">
                <li className="topListItem">
                  <input type="text" name="" id="" placeholder="Search" className="topRightSearch"/>
                </li>
              </ul>
            </div>
            <div className="topCenter">
              <ul className="topList">
                <li className="topListItem">
                  <a style={{ textDecoration: 'none' ,color:"black"}} href="/"><i className="fa fa-home" aria-hidden="true"></i></a>
                </li>
                <li className="topListItem">
                  <i className="fa fa-comments" aria-hidden="true"></i>
                </li>
                <li className="topListItem">
                  {/* <Link to="/write"><i className="fa fa-plus-square-o" aria-hidden="true"></i></Link> */}
                  <a href="/write"style={{ textDecoration: 'none' ,color:"black"}}><i className="fa fa-plus-square-o" aria-hidden="true"></i></a>
                </li>
                <li className="topListItem">
                  <i className="fa fa-compass" aria-hidden="true"></i>
                </li>
                <li className="topListItem">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
