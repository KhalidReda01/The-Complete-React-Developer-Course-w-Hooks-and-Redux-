import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import {connect} from "react-redux"
const ExpenseList = (props) => (
  <div>
    <h1>Expense List </h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem  expense={...expense}/> 
     
    })}
  </div>
)
const mapStateToProps=(state) => {
  return {
    expenses: state.expenses,
    filters:state.filters
  }
}
export default connect(mapStateToProps)(ExpenseList);
