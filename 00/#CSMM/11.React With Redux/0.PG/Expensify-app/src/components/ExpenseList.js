import React from 'react';
import { connect } from 'react-redux';
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.name}
    {console.log(props)}
  </div>
)
const ConnectedExpenseList = connect((state) => {
  console.log(state)
  return {
    name:'Khalid'
  }
})(ExpenseList)
export default ConnectedExpenseList