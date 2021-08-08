import React, { Component } from 'react';//imrc
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";

class  NavBar extends Component {       //cc
    state = {};
    render() { 
        return (<nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <div className="flexBox">
               <i className="expandBar"><FaAlignJustify/></i> 
            </div>
            
            <div>
              <h1>Beach Bum Lifestyle</h1>   
            </div>
            <div className="flexBox">
              <i className="checkOut"><FaShoppingCart/></i>  
            </div>
                
        </div>
      </nav>
      )
    };

    test() {
        console.log("this is a test");
    }
}
 
export default NavBar;

