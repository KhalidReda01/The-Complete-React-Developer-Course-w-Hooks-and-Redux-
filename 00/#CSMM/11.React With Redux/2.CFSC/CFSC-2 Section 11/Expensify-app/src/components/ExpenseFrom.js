import React from 'react'; 
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MM Do ,YYYY'))
export default class Expense extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calenderFocused: false,
    error:''
  }
  onDescriptionChange = (e) => {
    const description = e.target.value 
    this.setState(()=>({description}))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(()=>({note}))
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    // if (amount.match(/^\d*(\.\d{0,2}?$/)){
    //   this.setState(()=>({amount}));
    // }
    if (!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(()=>({createdAt}))
    }
    
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calenderFocused:focused
    }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      // Set Error state equal to "Please Provide describtion and amount"
    } else {
      // Clear the error
      console.log('submited')
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Description' autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
          <input type='number' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day)=>false}
          />
          <textarea placeholder='Add a note for your expense (otional)' value={this.state.note} onChange={this.onNoteChange}>
          
          </textarea>
          <button>Add Expense</button>
       </form>
      </div>
    )
  }
}
// export default Expense