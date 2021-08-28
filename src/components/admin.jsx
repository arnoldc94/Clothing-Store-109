import React, { Component } from 'react';

import"./admin.css";
import ItemService from "../services/itemService";

class Admin extends Component {
    state = { 
        title: "",
        category: "",
        image: "",
        price: 0,
        discount: 0,
        stock: 0,
        minimum: 1,

        showAlert: false,
     }
    render() { 
        let alertStatus = this.state.showAlert ? "" : "hide";
        return ( 
            <div className="admin-page">
                <h3>Register New Product</h3>

                {/*this.state.showAlert ? <div>Item Saved</div> : null*/}
                <div id="test" className={"alert alert-success " + alertStatus}>
                    Another Alert Saved
                </div>

                <div className="form-container">
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>  
                </div>

                <div className="form-container">
                    <label>Category</label>
                    <input type="text" name = "category" value={this.state.category} onChange={this.handleInputChange} />
                </div>

                <div className="form-container">
                    <label>Image Name</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                </div>

                <div className="form-container">
                    <label>Price</label>
                    <input type="text" name = "price" vlaue={this.state.price} onChange={this.handleInputChange} /> 
                </div>

                <div className="form-container">
                    <label>Discount</label>
                    <input type="text" name="discount" value={this.state.discount} onChange={this.handleInputChange} /> 
                </div>

                <div className="form-container">
                    <label>Stock</label>
                    <input type="text" name="stock" value={this.state.stock} onChange={this.handleInputChange} />
                </div>

                <div className="form-container">
                    <label>Minimum</label>
                    <input type="text" name="minimum" value={this.state.minimum} onChange={this.handleInputChange}/>
                </div>

                <div className="form-container">
                    <button onClick={this.handleSave}>Register</button>
                </div>
                
                
                
                
                
            </div>
         );
    }
    
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSave = async () => {

        // create an object
        let item = {...this.state}; // hard copy // deep copy // deep clone
        item.price = item.price * 1;
        item.stock = +item.stock;
        item.minimum = parseInt(item.minimum);

        // send the object to a servive -> to server
        let service = new ItemService();
        await service.saveItem(item);


        //clear the input
        this.setState({ title: "", category: "", price: 0, discount: 0, stock: 0, minimum: 1, showAlert: true});

        // set a time out and hide the alert
        setTimeout(() => { 
            this.setState({ showAlert: false });
            },2500);

    };
}
 
export default Admin;