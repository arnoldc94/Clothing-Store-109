import React, { Component } from 'react';
import"./cart.css";
import storeContext from '../store/storeContext';
import ItemInCart from "./itemInCart";



class Cart extends Component {
    static contextType = storeContext;
    state = {};
    render() { 
        
        return ( 
            
            <div className="cart-page">
                <div className="cartHeader">
                   <h1>Your Items</h1> 
                </div>
                <div className="countTotalContainer">
                    <div className="productCount">
                        <h5>You have {this.context.cart.length} Products in Your Cart</h5>
                    </div>
                    
                    <div className="totalContainer">
                        <label>Your Total:</label>
                        <h6>$ {this.getTotal()}</h6>

                        <button className = "paymentButton">Proceed to Payment</button>
                    </div> 
                </div>
                
                <div className="cart-container">
                    { this.context.cart.map((prod) => (
                        <ItemInCart key={prod._id} data={prod}></ItemInCart>
                    ))}
                </div>

              
            </div>
            
            
         );
    }
    getTotal = () => {
        let total = 0;
        for(let i=0; i<this.context.cart.length;i++) {
            let item = this.context.cart[i];
            total += (item.price * item.quantity) - item.discount;
        }

        return total.toFixed(2);
    };
}
 
export default Cart;