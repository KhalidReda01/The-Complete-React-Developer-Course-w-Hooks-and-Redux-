/**
 * 
 * 106/9 Setting Up a Date Picker 
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

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
/**
 * momentjs.com
 * airbnb react-dates
 * yarn add moment@2.18.1 react-dates@12.7.0
 */
/**
 * This course is oudtated but I will complete it ther is not other option otherwise wasted the time and effort that I do with this course untill now
 * yarn add v1.22.5
[1/4] Resolving packages...
Couldn't find any versions for "react-date" that matches "12.7.0"
? Please choose a version of "react-date" from this list: (Use arrow keys)
> 2.0.0
  1.0.2
  1.0.1
  1.0.0
  It's a type there is not date It's dates 
 */
