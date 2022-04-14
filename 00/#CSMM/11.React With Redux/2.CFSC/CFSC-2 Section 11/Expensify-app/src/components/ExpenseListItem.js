// Challenge Time
// Export a statelss functional componant
// Description,amount,CreatedAt
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
const ExpenseListItem = ({dispatch,id,description,amount,createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({id}))
    }} >Remove</button>
  </div>
)
// export default connect()(ExpenseListItem);
export default ExpenseListItem;
/**
 * Okay after I seey the pros I didn't find the dispatch like the other pross so where did it come from HOCC 
 * 
 */