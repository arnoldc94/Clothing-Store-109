import React, { Component } from 'react';
import"./catalog.css";
import Item from "./item";
import ItemService from "../services/itemService.js";


class Catalog extends Component {
    state = { 
        catalog: [],
        categories: [],
        filter: "",

    };

    render() { 

        let itemsToDisplay = this.state.catalog;
        if(this.state.filter) {
            itemsToDisplay = itemsToDisplay.filter( item => item.category === this.state.filter );
        }

        return ( 
            <div className="catalog">
                <div className="catHeader">
                   <h3>The Beach Bum Collection</h3> 
                </div>
                
                <h5>We have { this.state.catalog.length } products for you</h5>
                <div className = "discountNote">* All discounts are taken off the total not the individual item * </div>

                <div className="filterButtons">
                    <button className="buttonShow" onClick={this.clearFilter}>Show All</button>
                    { this.state.categories.map(cat => <button onClick={() => {this.filterByCat(cat) }} key={cat} className="buttonSort">{cat}</button>)}
                </div>
                
                <div className="itemContainer">
                    { itemsToDisplay.map( obj => <Item key={obj._id} data={obj}></Item> ) }
                </div>
                
            </div>
            
         );
    }
    
    clearFilter = () => {
        this.setState({filter: "" });
    }
    filterByCat = (cat) => {
        this.setState({filter: cat});
    }
    // best place to load data from server
    // executed after the initial render
    componentDidMount() {
        let service = new ItemService();
        let data = service.getCatalog();

        let categories = [];
        for(let i =0; i<data.length;i++){
            let category =data[i].category;

            if(!categories.includes(category)){

                categories.push(category);
            }
        }

        this.setState({ catalog: data, categories: categories});
    }
}
 
export default Catalog;