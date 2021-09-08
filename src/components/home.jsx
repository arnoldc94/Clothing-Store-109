import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./home.css";

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home-page">
                <div className="homeHeader">
                    <div className="homeHeaderText">
                        <h1>Beach Bum Clothing</h1> 
                        <div className="h2Home">
                            <h2>The Perfect Beach Apparel</h2>  
                        </div>
                        
                    </div>
                </div>
                <img className="surfImg" src="./images/surf.jpeg" alt="Beach" />
                <div>
                    <div>
                        
                        <p></p>
                        <div className="pageBreak">
                            <Link className="catalogLink" to="/catalog">
                            Browse Our Clothing Selection
                            </Link>
                        </div>
                        
                    </div>

                </div>
            </div>

            
         );
    }
}
 
export default Home;