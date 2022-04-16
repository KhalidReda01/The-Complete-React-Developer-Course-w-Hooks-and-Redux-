import React from 'react';
import { connect } from 'react-redux';
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
    {console.log(props)}
  </div>
)
const ConnectedExpenseList = connect((state) => {
  console.log(state)
  return {
    expenses:state.expenses
  }
})(ExpenseList)
export default ConnectedExpenseList