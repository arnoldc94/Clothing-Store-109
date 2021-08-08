import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = { 
        quantity: 1
     }
    render() { 
        return ( 
            <div className="quantityPicker">
                <button onClick={this.decrease} className="plus-minus-btn">-</button>
                { this.state.quantity }
                <button onClick={this.increase} className="plus-minus-btn">+</button>
                
            </div>
         );
    }

    increase = () => {
        let qnty = this.state.quantity + 1;
        if(qnty<21){
         this.setState({quantity: qnty});  
         this.props.onChange(qnty); 
        }
       
    }

    decrease = () => {
        let qnty = this.state.quantity - 1;

        if(qnty > 0){
          
            this.setState({quantity: qnty}); 
            this.props.onChange(qnty); 
        }
    }
}
 
export default QuantityPicker;