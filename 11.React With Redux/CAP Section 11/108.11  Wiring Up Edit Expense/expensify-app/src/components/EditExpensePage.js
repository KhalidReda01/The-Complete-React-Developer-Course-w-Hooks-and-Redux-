import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  // console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          //Challenge Time
          //Dispatch the action to edit the expense 
          //Redirect to the dashboard 
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('./')
          console.log('updated',expense)
        }}
      />
      {/* Editing the expense with id of {props.match.params.id} */}
    </div>
  );
};
const mapStateToProps = (state,props) => {
  return {
    expense: state.expenses.find(() => {
      return expense.id===props.match.params.id;
    })
  }
}
export default connect(mapStateToProps)(EditExpensePage) ;
