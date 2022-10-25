import React from 'react'
import './Header.css'
import banner from '../../image/bannner.jpg'

export default class Header extends React.Component {
    render()
    {
        return(
            <>
            <div className="header">
                <div className="headerTitles"></div>
                <img src={banner} alt="homeImage" className='banner'/>
            </div>
            </>
        );
    }
}
