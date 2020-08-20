import React from 'react'
import "./Header.css";
import logo from "../../img/instagram-log.png"

const Header =()=> {
    return (
        <div className="app__header">
            <img 
                className="app__headerImage"
                src={logo}
                alt="instagram_logo"
            />
        </div>
    )
}


export default Header;