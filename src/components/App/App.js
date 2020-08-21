import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm.js';
import AdminView from '../AdminView/AdminView.js'


import {connect} from 'react-redux';
import PizzaList from '../PizzaList/PizzaList.jsx'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'



class App extends Component {


  componentDidMount() {
    this.getPizzas();
  }

  getPizzas = () => {
    axios.get('/api/pizza')
    .then( response => {
      console.log(response.data);
      //send pizza data to redux
      this.props.dispatch({type: 'SET_PIZZAS', payload: response.data});
    }).catch(error => {
      console.log('error in getPizzas', error);
    })
  }

  goHome = () => {
    this.props.history.push('/')
  }

  render() {

    console.log(this.props.reduxStore);
    

    let orderTotal = 0;
    for (let i=0; i<this.props.reduxStore.cartReducer.length; i++) {
      orderTotal += Number(this.props.reduxStore.cartReducer[i].price)
    }

    return (
      
      <div className="App">
         <Router>
        <AppBar position="static">
        <header >
          <h1 className="App-title">Prime Pizza</h1>
          <ShoppingCartIcon />
          <p id='total'> ${orderTotal}</p>
          <ul className='nav'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          </ul>
          

        </header>
        </AppBar>
       


          {/* <Route exact path="/" component={PizzaList} /> */}
          

          <Route exact path="/" component={PizzaList} /> 
          <Route exact path="/orderForm" component={CustomerForm} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/admin" component={AdminView} />

        </Router>
        
      </div>
      
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
