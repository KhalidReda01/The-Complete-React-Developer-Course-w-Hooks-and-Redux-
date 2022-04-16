import React from "react";
import { connect } from "react-redux";
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.name}
  </div>
)
const ConnectedExpenseList = connect((state) => {
  return {
  name:'khalid'
} 
})(ExpenseList)
export default ConnectedExpenseList;