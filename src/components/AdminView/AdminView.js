import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderItem from '../OrderItem/OrderItem.js';
import axios from 'axios';
import './AdminView.css'

class AdminView extends Component {

    componentDidMount () {
        this.getAdmin();
    }

    getAdmin = () => {
        axios.get('/api/order')
            .then(response => {
                console.log(response)
                this.props.dispatch({ type: 'SET_ADMIN', payload: response.data })
            })
            .catch(error => {
                console.log('error in admin get request', error);

            })

    }

    render() {

        console.log(this.props.reduxState.adminReducer);

        return (
            <div>
                <h1>Admin</h1>
                <table className="admin">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time Order Placed</th>
                            <th>Order Type</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {this.props.reduxState.adminReducer.map((order, i) => {
                                return (
                                    <OrderItem key={i} order={order} />
                                )
                            })}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(AdminView);