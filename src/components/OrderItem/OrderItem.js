import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderItem extends Component {

    render() {

        console.log(this.props.order)
        return (
            <>
                <tr>
                    <td>
                        {this.props.order.customer_name}
                    </td>
                    <td>
                        {this.props.order.time}
                    </td>
                    <td>
                        {this.props.order.type}
                    </td>
                    <td>
                        {this.props.order.total}
                    </td>
                </tr>
            </>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(OrderItem);