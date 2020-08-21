import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';


const pizzaMenu = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload
    }
    return state;
}

const customerReducer = (state = [], action) => {

  if (action.type === 'CUSTOMER_SUBMIT') {
    return action.payload
  }
  return state;
}

const totalReducer = (state = 0, action ) => {
    if (action.type === 'SET_TOTAL') {
        return action.payload
    }
    return state
}

let updatedCart;

const cartReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload]
    }
    if (action.type === 'DELETE_FROM_CART') {
        console.log('Delete');
        console.log(action.payload)
        updatedCart = state.filter(function (pizza) {
            return pizza.id !== action.payload.id
        })
        return updatedCart;
    }
    if (action.type === 'CLEAR_ORDER') {
        return state = []
    }
    return state
}

const adminReducer = (state = [], action) => {
    if(action.type === 'SET_ADMIN' ) {
        return action.payload
    }
    return state
}

const reduxStore = createStore(
    combineReducers({
        pizzaMenu,
        customerReducer,
        cartReducer,
        totalReducer,
        adminReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
