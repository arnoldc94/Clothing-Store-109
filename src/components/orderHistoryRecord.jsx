import React, { Component } from 'react';
import"./orderHistoryRecord.css";

class  OrderHistoryRecord extends Component {
    state = {}
    render() { 
        return <div className="order-history-record">
            <label>Order total $: {this.props.order.total}</label>
            <label>Products: {this.props.order.products.length}</label>
            <label>Date: {this.getFormatedDate(this.props.order.createOn)}</label>

        </div>;
    }

    getFormatedDate = (dateStr) => {
        let d = new Date(dateStr);
        return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    };
}
 
export default OrderHistoryRecord;