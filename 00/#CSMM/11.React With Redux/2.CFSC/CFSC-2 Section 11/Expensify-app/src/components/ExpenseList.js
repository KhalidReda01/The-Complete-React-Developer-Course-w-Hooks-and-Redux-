import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(() => {
      return <ExpenseListItem {...expense}/>
   })}
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