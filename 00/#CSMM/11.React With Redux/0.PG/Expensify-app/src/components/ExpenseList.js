import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from '../selectors/expenses';
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {console.log('test')}
    {console.log(props)}
    {props.expenses.map((expense) => {
      {/* console.log(expense) */}
      return <ExpenseListItem key={expense.id }{...expense}/>
    })}
  </div>
)
const mapStateToProps=(state) => {
  return {
    expenses:selectedExpenses(state.expenses,state.filters)
} 
}
export default  connect(mapStateToProps)(ExpenseList);