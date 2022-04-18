import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          // Challenge Time
          // Dispatch the action to edit the expense 
          //Redirect to the dashboard
          console.log('updated',expense)
        }}

      />
    </div>
  );
};
const mapStateToProps = (state,props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id===props.match.params.id
    })
  }
}
export default connect(mapStateToProps)(EditExpensePage) ;
