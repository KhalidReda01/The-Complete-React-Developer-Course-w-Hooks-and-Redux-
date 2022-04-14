import React from 'react'; 
 class Expense extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Description' autoFocus />
          <input type='number' placeholder='Amount' />
          <textarea placeholder='Add a note for your expense (otional)'>
          
          </textarea>
          <button>Add Expense</button>
       </form>
      </div>
    )
  }
}
export default Expense