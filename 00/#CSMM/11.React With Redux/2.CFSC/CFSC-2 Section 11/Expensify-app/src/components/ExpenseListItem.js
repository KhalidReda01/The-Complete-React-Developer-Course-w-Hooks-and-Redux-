// Challenge Time
// Export a statelss functional componant
// Description,amount,CreatedAt
import React from 'react';
// import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
const ExpenseListItem = (props) => (
  <div>
    {/* {dispatch,id,description,amount,createdAt} */}
    {/* <h3>{description}</h3>
    <p>{amount} - {createdAt}</p> */}
    <button onClick={() => {
      console.log(props)
      // dispatch(removeExpense({id}))
    }} >Remove</button>
  </div>
)
export default ExpenseListItem;
/*{
  "id": "cbe88d69-c072-4e2c-a63c-8e1d697fae33",
  "description": "Water bill",
  "note": "",
  "amount": 0,
  "createdAt": 0
}*/