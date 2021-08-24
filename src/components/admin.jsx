import React, { Component } from 'react';

import"./about.css";
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
        return ( 
            <div className="admin-page">
                <h3>Register New Product</h3>

                {this.state.showAlert ? <div>Item Saved</div> : null}

                <div className="form-control">
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>  
                </div>

                <div className="form-control">
                    <label>Category</label>
                    <input type="text" name = "category" value={this.state.category} onChange={this.handleInputChange} />
                </div>

                <div className="form-control">
                    <label>Price</label>
                    <input type="text" name = "price" vlaue={this.state.price} onChange={this.hadleInputChange} /> 
                </div>

                <div className="form-control">
                    <label>Discount</label>
                    <input type="text" name="discount" value={this.state.discount} onChange={this.handleInputChange} /> 
                </div>

                <div className="form-control">
                    <label>Stock</label>
                    <input type="text" name="stock" value={this.state.stock} onChange={this.handleInputChange} />
                </div>

                <div className="form-control">
                    <label>Minimum</label>
                    <input type="text" name="minimum" value={this.state.minimum} onChange={this.handleInputChange}/>
                </div>

                <div className="form-control">
                    <button onClick={this.handleSave}>Register</button>
                </div>
                
                
                
                
                
            </div>
         );
    }
    
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSave = () => {

        // create an object
        let item = {...this.state}; // hard copy // deep copy // deep clone
        console.log(item);

        // send the object to a servive -> to server
        let service = new ItemService();
        service.saveItem(item);


        //clear the input
        this.setState({ title: "", category: "", price: "", discount: "", stock: "", minimum: "", showAlert: true});

        // set a time out and hide the alert
        setTimeout(() => { 
            this.setState({showAlert: false});
            },2500);

    };
}// end class
 
export default Admin;