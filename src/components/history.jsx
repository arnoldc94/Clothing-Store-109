import React, { Component } from 'react';
import ItemService from '../services/itemService';
import "./history.css";
import OrderHistoryRecord from './orderHistoryRecord';

class HistoryPurchase extends Component {
    state= {
        orders: [],
    };
    render() { 
        return (
        <div className= "historyPage">
            <h2>This is your Purchase History</h2>
            <hr />

            {this.state.orders.map((ord) => (
            <OrderHistoryRecord key={ord._id} order ={ord}></OrderHistoryRecord>
            ))}
        </div>
        );
    }


    async componentDidMount() {
        let service = new ItemService();
        let ords = await service.getUserOrders(123);
        this.setState({orders: ords });
    }
}
 
export default HistoryPurchase;