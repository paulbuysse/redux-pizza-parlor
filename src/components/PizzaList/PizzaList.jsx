import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem'
import Button from '@material-ui/core/Button'
import './PizzaList.css'


class PizzaList extends Component {
   
    toFormPage = () => {
        this.props.history.push('/orderForm')
    }

render() {
    return (
        <>
        
            <h2>All Pizzas</h2>
            <section id='pizzaBox'>
            {this.props.reduxStore.pizzaMenu.map((pizza, i) => {
                return (
                    <PizzaItem pizza={pizza} key={i}/>
                )
            })}
        </section>
        <Button variant="contained" onClick={this.toFormPage}>Next</Button>
        </>
    );
}
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PizzaList);
