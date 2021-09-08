import React, { Component } from 'react';
import "./orderSaved.css";
import {Link} from "react-router-dom"

class  OrderSaved extends Component {
    state = {  };
    render() { 
        return ( 
            <div className = "orderPlacedContainer">
                <div className="bodyBorder">
                    <div>
                        <h3>You Succesfully Placed your order</h3> 
                        <h4>Thank You For Being a Loyal Customer!</h4> 
                    </div>
                
                
                    <Link className="historyLink" to="/purchase-history">
                        Check your Orders History
                        
                    </Link> 
                </div>
                
            </div>
         )
    };
}
 
export default OrderSaved;