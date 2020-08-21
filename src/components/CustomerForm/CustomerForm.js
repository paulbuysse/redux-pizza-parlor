import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class CustomerForm extends Component {

    //local customer state
    state = {
        customer_name: '',
        street_address: '',
        city: '',
        zip: '',
        type: ''
    }

    //sending local state to index.js
    handleSubmit = () => {
        if (this.state.pickupMethod !== '') {
            this.props.dispatch(
                { type: 'CUSTOMER_SUBMIT', payload: this.state }
            )
            this.props.history.push('/checkout');
        } else {
            alert('Please select an order type!')
        }

    }

    render() {
        //test log
        // console.log(this.state.customerName, this.state.customerAddress, this.state.customerCity, this.state.customerZip, this.state.pickupMethod)
        return (
            <div>
                <h2>Step 2: Customer Information</h2>

{/* 
                <TextField id="outlined-basic" variant="outlined" label="Name" onChange={(event) => this.setState({ customerName: event.target.value })} />
                <TextField id="outlined-basic" variant="outlined" label="Street Address" onChange={(event) => this.setState({ customerAddress: event.target.value })} />
                <TextField id="outlined-basic" variant="outlined" label="City" onChange={(event) => this.setState({ customerCity: event.target.value })} />
                <TextField id="outlined-basic" variant="outlined" label="Zip" onChange={(event) => this.setState({ customerZip: event.target.value })} />
                <InputLabel id="demo-simple-select-label">Pickup or Delivery</InputLabel>
                <Select onChange={(event) => this.setState({ pickupMethod: event.target.value })}>
                    <MenuItem value="pick-up">Pick-Up</MenuItem>
                    <MenuItem value="delivery">Delivery</MenuItem>
                </Select>
                <br />
                <Button variant="contained" onClick={this.handleSubmit}>NEXT</Button> */}

                {/* user input fields for name, address, city, zip, and pickup method */}
                <input placeholder="Name" onChange={(event) => this.setState({ customer_name: event.target.value })} />
                <input placeholder="Street Address" onChange={(event) => this.setState({ street_address: event.target.value })} />
                <input placeholder="City" onChange={(event) => this.setState({ city: event.target.value })} />
                <input placeholder="Zip" onChange={(event) => this.setState({ zip: event.target.value })} />
                <select onChange={(event) => this.setState({ type: event.target.value })}>
                    <option value="">Select One</option>
                    <option value="pick-up">Pick-Up</option>
                    <option value="delivery">Delivery</option>
                </select>

                {/* runs handleSubmit, sends data to redux */}
                <Button variant="contained" onClick={this.handleSubmit}>NEXT</Button>
                {/* <button onClick={this.handleSubmit}>NEXT</button> */}


            </div>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(CustomerForm);