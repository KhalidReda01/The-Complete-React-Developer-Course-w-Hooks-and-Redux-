import React from "react";
const EditExpensePage = (props) => {
console.log(props)
  return (
    <div>
      {/* This is my Edit Expense Page */}
      Editing the expense with id of {props.match.params.id}
    </div>
  )
 }
export default EditExpensePage