import React, { Component } from 'react';
import "./header.css";
import { FaFacebook} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="header">
                <i className="icon"><FaInstagram/></i>
                <i className="icon"><FaFacebook/></i>
                <i className="icon"><FaTwitter/></i>
            </header>
         );
    }
}
 
export default Header;