import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import { FaShoppingCart } from "react-icons/fa";

import "./item.css";
import storeContext from '../store/storeContext';



class Item extends Component {
    static contextType = storeContext;
    state = { quantity: 1 }
    render() { 
        return ( 
            <div className="item">
                
                <img src={"/images/" + this.props.data.image} alt="Product" />

                <h5>{ this.props.data.title }</h5>

                <QuantityPicker className="quantityPicker" onChange ={this.handleQuantityChange}></QuantityPicker>
                <div className="flexContain">
                    <div className="priceContain">
                        <label className="price"><span>Price: </span>${ this.props.data.price.toFixed(2) }</label>
                        
                        <label className="total"><span>Total: </span>${ this.getTotal() }</label>
                    </div>
                    
                    <div className="btnContainer">
                        <i onClick={this.handleAddProductToCart} className="checkOut"><FaShoppingCart/></i>  
                    </div>
                </div>
                
            </div>
         );
    }
    

    displayDiscount = () => {
       this.props.data.discount.toFixed(2);
        
    }

    getTotal = () => {
        let total = (this.state.quantity * this.props.data.price ) - this.props.data.discount;
        return total.toFixed(2);
    }

    handleQuantityChange = (quantity) => {
      
        console.log("quantity changed", quantity);
        this.setState({quantity:quantity});
    }
    handleAddProductToCart = () => {
        // create the object
        let prod = {
            ...this.props.data, //<- item information
            quantity: this.state.quantity,
        };

        this.context.addProductToCart(prod);
    };
}
 
export default Item;