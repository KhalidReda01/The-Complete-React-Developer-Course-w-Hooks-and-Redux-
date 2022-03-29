import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      console.log('testing')
      console.log(expense)
      return <ExpenseListItem key={expense.id} {...expense}/>
    })}
    
  </div>
)
const mapStateToProps=(state) => {
  return {
    expenses: state.expenses
   
  }
}
export default connect(mapStateToProps)(ExpenseList)
 