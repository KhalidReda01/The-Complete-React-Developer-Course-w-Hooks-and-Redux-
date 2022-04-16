import React from 'react';
const ExpenseListItem = (props) => (
  <div>
    {console.log(props)}
    <h3>{props.description}</h3>
    <p>{props.amount} - {props.createdAt}</p>
  </div>
)
export default ExpenseListItem