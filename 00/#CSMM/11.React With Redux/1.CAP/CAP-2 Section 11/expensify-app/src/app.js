
/**
 * CAP 2nd time Section 11 React With Redux 
 * 
 * 
98. Section Intro: Connecting React and Redux 

99. Organizing Redux

100. The Higher Order Component

101. Connecting Store and Component with React-Redux

102. Rendering Individual Expenses

103. Controlled Inputs for Filters

104. Dropdown for Picking SortBy

105. Creating Expense Add/Edit Form

106. Setting up a Date Picker

107. Wiring up Add Expense

108. Wiring up Edit Expense

109. Redux Dev Tools

110. Filtering by Dates


 */
/**
 * 99/2 Organizing Redux 
 *  Write all my notes at paper untill now so no need to write anything here Okay keep goina and you can make mix but I think I fully understand what I'm doing but just notes to remember later and actually master Redux 
 * 
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expenses'
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css'
import './styles/styles.scss'
const store = configureStore()
 // Challenge Time
 // addExpense -> Water bill 
 store.dispatch(addExpense({description:'Water bill '}))
 // addExpense -> Gas bill 
 store.dispatch(addExpense({description:'Gas bill'}))
 // setTextFilter ->bill  (2 itmes)-> water (1 item)
 store.dispatch(setTextFilter('bill'))// yes correct print 2 items 
//  store.dispatch(setTextFilter('Water'))
 // getVisibleExpense -> print visible one to sreen 
// getVisibleExpense()/// this part this function It's what bring those together
const visibleExpense = getVisibleExpense(state.expenses, state.filters)
 console.log(visibleExpense)
// console.log(store.getState())
ReactDOM.render(<AppRouter/>, document.getElementById('app'));
