import React from 'react'
import './Home.css'
import Posts from '../../components/Posts/Posts'
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"


export default class Home extends React.Component {
    render()
    {
        return(
            <> 
            <Navbar />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
            </>
        );
    }
}
