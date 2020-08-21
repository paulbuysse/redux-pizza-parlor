import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Checkout.css'
import CheckoutItem from '../CheckoutItem/CheckoutItem.jsx'

import Button from '@material-ui/core/Button'

import CustomerItem from '../CustomerItem/CustomerItem.jsx'



class Checkout extends Component {

    handleCheckout = () => {
        const orderToSend = {
            customer_name: this.props.reduxState.customerReducer.customer_name,
            street_address: this.props.reduxState.customerReducer.street_address,
            city: this.props.reduxState.customerReducer.city,
            zip: this.props.reduxState.customerReducer.zip,
            type: this.props.reduxState.customerReducer.type,
            total: Number(this.props.reduxState.totalReducer),
            pizzas: this.props.reduxState.cartReducer
        }

        console.log(Number(this.props.reduxState.totalReducer))

        // Needs to post customer, and pizza data
        axios.post('/api/order', orderToSend)
            .then(response => {
                alert('Thank you for your order!')
                this.props.dispatch({ type: 'CLEAR_ORDER' })
            })
            .catch(error => {
                console.log('error in post request', error);
                alert('Checkout error, please try again.')
            });     

        // this.props.history.push('/')
    }

    

    render() {

        console.log(this.props.reduxState);

        console.log(this.props.reduxState.cartReducer);

        let totalPrice = 0;
        for (let i = 0; i < this.props.reduxState.cartReducer.length; i++) {
            totalPrice += Number(this.props.reduxState.cartReducer[i].price)
            
        }

        this.props.dispatch({type: 'SET_TOTAL', payload: totalPrice.toFixed(2)})
        console.log(this.props.reduxState.totalReducer);

        return (
            <>
                <div className="container">
                    <h2>Checkout</h2>
                    <div>
                        <CustomerItem customer={this.props.reduxState.customerReducer} />
                    </div>
                </div>
                <table className="checkout">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Pizzas for checkout and prices here */}
                        {this.props.reduxState.cartReducer.map((item, i) => {
                            return (
                                <CheckoutItem key={i} item={item} />
                            )
                        })}


                    </tbody>
                </table>
                <div>
                    {/* Total Price */}
                    <div><h3>Total:<span placeholder="$$">{totalPrice.toFixed(2)}</span></h3></div>
                    <div className="checkoutBtn">
                        <Button variant="contained" color="primary" onClick={this.handleCheckout}>Checkout</Button>
                    </div>
                </div>

            </>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Checkout);