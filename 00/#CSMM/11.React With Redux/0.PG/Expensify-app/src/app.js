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
store.dispatch(addExpense({ description: 'Gas bill' ,amount:23434,created:3}));
store.dispatch(addExpense({ description: 'Internet bill' }));
store.dispatch(addExpense({ description: 'Electercity bill' }));
store.dispatch(addExpense({ description: 'Rent bill' }));
// store.dispatch(setTextFilter('water'));
// store.dispatch(setTextFilter('bill'));
// setTimeout((() => {
//   store.dispatch(setTextFilter('rent'))
// }),3000)
// setTimeout((() => {
//   store.dispatch(setTextFilter('Internet'))
// }),6000)
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
 * Review 105/8 Creating Expense Add/Edit form
 */