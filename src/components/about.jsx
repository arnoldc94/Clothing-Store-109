import React, { Component } from 'react';

import "./about.css";

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about-page">
                <div className="aboutHeader">
                   <h1>Beach Bum Information</h1> 
                </div>
                
                <div className="body-about">
                    <h3>Who We Are</h3>
                    <p>We are a veteran owned cothing company who is dedicated to bring you new styles and tremendous customer service.</p>
                    <ul>
                        <li>Shorts</li>
                        <li>Shirts</li>
                        <li>Sunglasses</li>
                        <li className="coming-soon">Shoes: &nbsp;&nbsp;&nbsp;* Coming Soon *</li>
                    </ul>

                </div>
            </div>
         );
    }
}
 
export default About;