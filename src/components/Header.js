import React from "react";
import logo from "./logo.svg";


class Header extends React.Component{

    render(){
        return(
            <div className="header">
                <a>
                <img src={logo} className="logo" />
                </a>
                {this.props.children}
            </div>
        )
    }
}

export default Header;