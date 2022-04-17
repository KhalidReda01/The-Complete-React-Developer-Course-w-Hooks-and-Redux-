import React from 'react';
//Challenge time
// setup note state
// setup onChange and value for textArea
export default class ExpenseForm extends React.Component{
  state = {
    description: '',
    note: ''

  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=>({description}))
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    // e.persist()
    // this.setState(()=>({note:e.target.value}))
    this.setState(()=>({note}))
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
            onChange={this.onDescriptionChange}

          />
          <input
            type='number'
           placeholder='Amount' 

          />
          <textarea placeholder='Add a note for your expense(Optional)'
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