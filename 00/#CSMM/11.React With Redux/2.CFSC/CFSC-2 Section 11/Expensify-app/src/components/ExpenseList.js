import React from 'react';
import { connect } from 'react-redux';
import expenses from '../reducers/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
    {props.filters.text}
  </div>
)
const ConnectedExpenseList = connect((state) => {
  console.log(state)
  return {
    expenses: state.expenses,
    filters:state.filters
  }
})(ExpenseList)
export default ConnectedExpenseList;