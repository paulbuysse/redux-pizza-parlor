import React, { Component } from 'react';

class CustomerItem extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <div>
                        <p>{this.props.customer.customerName}</p>
                        <p>{this.props.customer.customerAddress}</p>
                        <p>{this.props.customer.customerCity}</p>
                    </div>
                    <div className="pickupMethood">
                        <p>{this.props.customer.pickupMethod}</p>
                    </div>
                </div>
            </>
        )
    }
}




export default CustomerItem;