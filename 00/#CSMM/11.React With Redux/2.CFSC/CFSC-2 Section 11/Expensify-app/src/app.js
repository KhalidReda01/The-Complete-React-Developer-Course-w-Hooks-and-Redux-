/**
 * Review Section 11 React With Redux 
 * 104.7 Dropdown for Picking SortBy
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
const store = configureStore()
store.dispatch(addExpense({description:'Water bill',amount:4500}))
store.dispatch(addExpense({ description: 'Gas bill',createdAt:4500 }))
store.dispatch(addExpense({ description: 'Rent',amount:1 }))
store.dispatch(setTextFilter('bill'))
// console.log(store.getState())
// setTimeout(() => {
//   store.dispatch(setTextFilter('water'))
// },3000)
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
