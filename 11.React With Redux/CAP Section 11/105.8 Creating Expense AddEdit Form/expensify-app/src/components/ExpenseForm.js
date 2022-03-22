import React from 'react';
// state = {
//   description:''
// }
export default class Expense extends React.Component{
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
          />
          <input
            type="number"
            placeholder="Amount"
            p
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
          >

          </textarea>
          <button>Add Expense</button>

        </form>
      </div>
    )
  }
}