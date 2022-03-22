
/**
 * CAP 1st Section 11 React With Redux
 * 99/2 Organizing Redux Data 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();
store.dispatch(addExpense({description:'Water bill '}))
store.dispatch(addExpense({ description: 'Gas bill ' }))

// store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)
// Challenge Time
// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill (2 items)-> water (1 item )
// getVisibleExpenses -> print visible one to the screen 
console.log(store.getState());

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
