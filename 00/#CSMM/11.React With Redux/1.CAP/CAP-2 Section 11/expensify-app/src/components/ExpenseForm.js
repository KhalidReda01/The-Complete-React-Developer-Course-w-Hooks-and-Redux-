import React from 'react';
//Challenge time
// setup note state
// setup onChange and value for textArea
export default class ExpenseForm extends React.Component{
  state = {
    description: ''

  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=>({description}))
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
          <textarea placeholder='Add a not for your expense(Optional)'
          > 
           
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}