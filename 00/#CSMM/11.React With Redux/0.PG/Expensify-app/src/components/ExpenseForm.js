import React from 'react';
export default class ExpenseForm extends React.Component{
  state = {
    description: '',
    amount: '',
    note:''
  }
  onDecriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=>({description}))
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(()=>({note}))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(()=>({amount}))
    }
    
  }
  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDecriptionChange}

          />
          <input 
            type='amount'
            placeholder='amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder='Add a note for your expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

