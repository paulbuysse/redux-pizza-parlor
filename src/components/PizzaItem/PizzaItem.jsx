import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'


class PizzaItem extends Component {

    state = {
        addedToCart: false
    }

    addOrRemove = (pizza) => {
        this.setState({
            addedToCart: !this.state.addedToCart
        })
        if (this.state.addedToCart === false) {
            console.log(pizza);
            this.props.dispatch({type: 'ADD_TO_CART', payload: pizza})
        }
        if (this.state.addedToCart === true) {
            console.log(pizza);
            this.props.dispatch({type: 'DELETE_FROM_CART', payload: pizza})
        }
    }



    render() {
        return (
            <div key={this.props.pizza.id} className='card'>
                <img src={this.props.pizza.image_path} alt={this.props.pizza.description} />
                <h4>{this.props.pizza.name}</h4>
                <p>{this.props.pizza.description}</p>
                <p>${this.props.pizza.price}</p>
                {this.state.addedToCart ?
                    <Button variant="contained" color="secondary" onClick={() => this.addOrRemove(this.props.pizza)}>Remove</Button> :
                    <Button variant="contained" color="primary" onClick={() => this.addOrRemove(this.props.pizza)}>Add</Button>}
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PizzaItem);