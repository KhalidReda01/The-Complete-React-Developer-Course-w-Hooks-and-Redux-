// Challenge Time
// Export a statelss functional componant
// Description,amount,CreatedAt
import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch,id,description,amount,createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({id}))
    }} >Remove</button>
  </div>
)
export default connect()(ExpenseListItem);