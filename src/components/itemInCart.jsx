import React, { Component } from 'react';
import storeContext from '../store/storeContext';
import"./itemInCart.css";

class ItemInCart extends Component {
    static contextType = storeContext;
    state = {  }
    render() { 
        return ( 
            <div className="item-in-cart">
                <img src={"./images/"+ this.props.data.image} alt="Product" />
            
                <div className="item-info">
                    <h5>{this.props.data.title}</h5>
                    <label>{this.props.data.category}</label>
                </div>
                <label>Price: {this.props.data.price.toFixed(2)}</label>
                
                <label>Quantity: {this.props.data.quantity}</label>
                <label>Total: {this.props.data.price.toFixed(2)}</label>
                
                <button onClick={this.handleDelete} className="deleteBtn" onClick={this.handleDelete}>Remove</button>
            </div>
         );
    }
    handleDelete = () => {
      this.context.removeProductFromCart(this.props.data._id);  
    };
    getTotal = () => {
        return((this.props.data.price * this.props.data.quantity)- this.props.data.discount).toFixed(2);
    };

}
 
export default ItemInCart;