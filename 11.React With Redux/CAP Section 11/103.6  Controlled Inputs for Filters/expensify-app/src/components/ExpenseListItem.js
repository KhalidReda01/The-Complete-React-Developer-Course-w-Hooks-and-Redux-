import React from 'react';

const ExpenseListItem = ({description,amount,createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button>Remove</button>
  </div>
)
export default ExpenseListItem;
// Challenge Time
