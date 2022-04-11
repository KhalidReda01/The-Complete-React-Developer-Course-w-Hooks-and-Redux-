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
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)
export default ConnectedExpenseList;