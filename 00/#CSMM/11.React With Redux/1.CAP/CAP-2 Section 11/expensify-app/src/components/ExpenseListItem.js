import React from "react";
const ExpenseListItem = (props) => (
  <div>
    <h3>{props.description}</h3>
    <p>{props.amount}-{props.createAt}</p>
  </div>
)
export default ExpenseListItem
// import React from 'react';

// const ExpenseListItem = ({ description, amount, createdAt }) => (
//   <div>
//     <h3>{description}</h3>
//     <p>{amount} - {createdAt}</p>
//   </div>
// );

// export default ExpenseListItem;
