
/**
 * CAP 1st Section 11 React With Redux
 * 101/4 Connecting Store and Component With React-Redux 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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


store.dispatch(setTextFilter('water'));
setTimeout((() => {
  store.dispatch(setTextFilter('rent'))
}),3000)
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter  />
  </Provider>
 
)
ReactDOM.render(jsx, document.getElementById('app'));
/**
 * React-Redux
 * yarn add react-redux@5.0.5
 */
