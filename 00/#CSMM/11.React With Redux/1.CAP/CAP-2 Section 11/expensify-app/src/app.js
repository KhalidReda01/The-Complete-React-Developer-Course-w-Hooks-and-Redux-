
/**
 * CAP 2nd time Section 11 React With Redux 
 * 
 * 
98. Section Intro: Connecting React and Redux 

99. Organizing Redux Done Challenge Done 

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
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
// okay even now state is not defined 
import 'normalize.css/normalize.css'
import './styles/styles.scss'
const store = configureStore()
 store.dispatch(addExpense({description:'Water bill '}))
store.dispatch(addExpense({ description: 'Gas bill' }))
store.subscribe(() => {
  const state=store.getState()
  const visibleExpense = getVisibleExpenses(state.expenses,state.filters)
  console.log(visibleExpense)
  
   })
 store.dispatch(setTextFilter('water'))
 store.dispatch(setTextFilter('water'))
store.dispatch(setTextFilter('bill'))
store.dispatch(setTextFilter('water'))



ReactDOM.render(<AppRouter/>, document.getElementById('app'));
