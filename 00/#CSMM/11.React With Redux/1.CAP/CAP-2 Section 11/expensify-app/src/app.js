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
store.subscribe(() => {
  const state=store.getState()
  const visibleExpense = getVisibleExpenses(state.expenses,state.filters)
  console.log(visibleExpense)
  
   })
store.dispatch(addExpense({ description: 'Water bill',amount:4500 }));
store.dispatch(addExpense({ description: 'Gas bill' ,amount:23434,createdAt:1000}));
store.dispatch(addExpense({ description: 'Internet bill' }));
store.dispatch(addExpense({ description: 'Electercity bill' }));
store.dispatch(addExpense({ description: 'Rent bill',amount:109500 }));


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
const jsx = (
  <Provider store={store}>
   <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
/**
 * CAP-2nd 110/13 Filtering by dates
 */