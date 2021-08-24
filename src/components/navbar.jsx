import React, { Component } from 'react';//imrc
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import storeContext from '../store/storeContext';
import { Link } from "react-router-dom"

class  NavBar extends Component { 
    static contextType = storeContext;
    state = {};
    render() { 
        return (<nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <div className="titleCheckout">
              <div className="bumHeader">
                <h1>Beach Bum Lifestyle</h1>   
              </div>
              <div className="flexBox">
                <Link to="/cart" className="cart"><i><FaShoppingCart/></i><span className="cartCounter"> {this.context.cart.length}</span></Link>  
              </div>
            </div>
            
            <div className="navLinks">
              <div>
                <Link to="/home">Home</Link>
              </div>
              <div>
                <Link to="/about">About</Link>
              </div>
              <div>
                <Link to="/catalog">Catalog</Link>
              </div>
              <div>
                <Link to="/admin">Admin</Link>
              </div>
                
              
                
              
                

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

