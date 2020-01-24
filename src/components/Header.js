import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

class Header extends React.Component {
    render(){
        return (
            <div className="header">
               <div className="header-text">
                   < Link to="/">
                    <span>T</span>
                    <span>R</span>
                    <span>I</span>
                    <span>V</span>
                    <span>I</span>
                    <span>A</span>
                   </Link>
               </div>
            </div>
        )
    }
}

export default Header;