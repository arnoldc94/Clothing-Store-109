import React, { Component } from 'react';
import"./cart.css";
import storeContext from '../store/storeContext';
import ItemInCart from "./itemInCart";
import ItemService from "../services/itemService";



class Cart extends Component {
    static contextType = storeContext;
    state = {
        couponCode: "",
        discount: 0
    };

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
                        
                        <div className="inputCoupon">
                            <input type="text" placeholder="Coupon Code" name="couponCode" className="coupon" value={this.state.couponCode} onChange={this.handleInputChange} />
                            
                        </div>
                        <div className="submitCoupon">
                          <button disabled={this.state.couponCode} onClick={this.handleApplyCoupon} className="couponBtn">Apply Coupon</button>  
                        </div>
                        
                        <div className="total">
                            <label>Your Total:</label>
                            <h6>$ {this.getTotal()}</h6>
                        </div>
                        <div className="submitOrder">
                            <button onClick={this.handleSubmitOrder} className = "paymentButton">Proceed to Payment</button>
                        </div>
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

    handleSubmitOrder = async () => {
        let order = {
            userId: 123,
            couponCode: this.state.couponCode,
            products: this.context.cart,
            createOn: new Date(),
        };
        console.log("submitting", order);
        let service = new ItemService();
        let res = await service.submitOrder(order);
        if(res) {
           console.log("response data: ", res); 
           this.props.history.push("/order-saved");
        }
        else{
            //request failed
        }
        
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleApplyCoupon = async () => {

        if(!this.state.couponCode) {
            return;
        }

        let service = new ItemService();
        let res = await service.validateCouponCode(this.state.couponCode);
        if(!res) {
            console.log("invalid coupon code!");
            this.state({ discount: 0 });
            return;
        }

        // apply discount
        this.setState({ discount: res.discount });
    };

    getTotal = () => {
        let total = 0;
        for(let i=0; i<this.context.cart.length;i++) {
            let item = this.context.cart[i];
            total += item.price * item.quantity;
        }
        
        total = total - (total * this.state.discount/100);

        return total.toFixed(2);
    };
}
 
export default Cart;