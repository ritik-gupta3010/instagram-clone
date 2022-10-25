import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"


export default class Home extends React.Component {
    render()
    {
        return(
            <>
            {/* <Header /> */}
            <Navbar />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
            </>
        );
    }
}
