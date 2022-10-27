import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import Write from "../../Page/write/Write"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      openDialoge:false,
    }
  }
  openDialoge=()=>{
    // console.log("ritik")
    this.setState({openDialoge:!this.state.openDialoge})
  }
  render() {
    const user=true;
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
                  <button onClick={this.openDialoge}><i className="fa fa-plus-square-o" aria-hidden="true"></i></button>
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
        <Write openDiolog={this.state.openDialoge } onClose={this.openDialoge} />
      </>
    );
  }
}
