import React, { Component } from 'react';
import storeContext from '../store/storeContext';
import"./itemInCart.css";

class ItemInCart extends Component {
    static contextType = storeContext;
    state = {  }
    render() { 
        return ( 
            <div className="item-in-cart">
                <img src={"./public/images" + this.props.data.image} alt="Product" />
            
                <div className="item-info">
                    <h5>{this.props.data.title}</h5>
                    <label>{this.props.data.category}</label>
                </div>
                <label>{this.props.data.price}</label>
                <label>{this.props.data.quantity}</label>
                <label>{this.props.data.price}</label>
                
                <button onClick={this.handleDelete} className="btn btn-sm btn-danger">Remove</button>
            </div>
         );
    }
    hamdleDelete = () => {
      this.context.removeProductFromCart(this.props.data._id);  
    };
    getTotal = () => {
        return(this.props.data.price * this.props.data.quantity).toFixed(2);
    };

}
 
export default ItemInCart;