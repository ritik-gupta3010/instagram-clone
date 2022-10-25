import React from 'react'
import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"


export default class Settings extends React.Component {
  render()
  {
    return(
        
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">update your account</span>
                    <span className="settingsDeleteTitle">delete your account</span>
                </div>
                <form className="settingsForm">
                    <label htmlFor="">profile picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa fa-user-circle-o" aria-hidden="true"></i>
                        </label>
                        <input type="file" id='fileInput'style={{display:'none'}}/>
                    </div>
                    <label>userName</label>
                    <input type="text" placeholder=''/>
                    <label>Email</label>
                    <input type="email" placeholder=''/>
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">update</button>
                </form>
            </div>
            <Sidebar />
        </div>

    );
  }
}
