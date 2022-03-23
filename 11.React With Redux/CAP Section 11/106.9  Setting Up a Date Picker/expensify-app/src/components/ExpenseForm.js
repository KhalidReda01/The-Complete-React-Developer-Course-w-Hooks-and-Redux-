import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
// const date = new Date();
const now = moment();
console.log(now.format('MMM Do ,YYYY'))
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