import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
const ExpenseListFilters = (props) => (
  <div>
    <input type='text' value={props.filters.text} onChange={(e) => {
      console.log(props)
      props.dispatch(setTextFilter(e.target.value))
      console.log(e.target.value)
    }} />
    <select>
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
    
  </div>
)
const mapStateToProps = (state) => {
  return {
    filters:state.filters
  }
}
export default connect(mapStateToProps)(ExpenseListFilters);