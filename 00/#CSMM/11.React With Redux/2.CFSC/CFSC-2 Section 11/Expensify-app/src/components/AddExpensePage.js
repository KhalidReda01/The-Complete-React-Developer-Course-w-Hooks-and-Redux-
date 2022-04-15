import React from 'react';
import Expense from './ExpenseFrom';
// import Expense from './ExpenseFrom';
import ExpenseForm from './ExpenseFrom'
const AddExpensePage = () => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        console.log(expense)
      }}
    />
  </div>
);

export default AddExpensePage;
