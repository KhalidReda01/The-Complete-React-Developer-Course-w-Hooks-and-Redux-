import React from 'react';

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
          <button>Add Expense</button>

          </textarea>
        </form>
      </div>
    )
  }
}