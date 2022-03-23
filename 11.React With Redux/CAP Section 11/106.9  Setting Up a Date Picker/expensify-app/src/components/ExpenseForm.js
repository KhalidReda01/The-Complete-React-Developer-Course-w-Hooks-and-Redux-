import React from 'react';

// Challenge Time
// setup onChange and value for textarea
export default class Expense extends React.Component{
  state = {
    description: '',
    note: '',
    amount:''
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=>({description}))
  }
  onNoteChange = (e) => {
    // const note = e.target.value;
    e.persist()
    this.setState(()=>({note:e.target.value}))
  }
  //regex101.com
  /**^\d*(\.\d{0,2}$)?
   * 
   */
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(()=>({amount}))
    }
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >

          </textarea>
          <button>Add Expense</button>

        </form>
      </div>
    )
  }
}