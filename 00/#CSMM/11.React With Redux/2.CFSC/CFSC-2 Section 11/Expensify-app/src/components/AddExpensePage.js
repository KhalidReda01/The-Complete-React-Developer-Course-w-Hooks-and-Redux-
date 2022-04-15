import React from 'react';
import { connect } from 'react-redux';
import Expense from './ExpenseFrom';
// import Expense from './ExpenseFrom';
import ExpenseForm from './ExpenseFrom';
import { addExpense } from '../actions/expenses';
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('./')
        console.log(expense)
      }}
    />
  </div>
);

export default connect()(AddExpensePage) ;
