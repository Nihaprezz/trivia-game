import React from "react";
import "./Header.css"

class Header extends React.Component {
    render(){
        return (
            <div className="header">
               <div className="header-text">
                   <span>T</span>
                   <span>R</span>
                   <span>I</span>
                   <span>V</span>
                   <span>I</span>
                   <span>A</span>
               </div>
            </div>
        )
    }
}

export default Header;