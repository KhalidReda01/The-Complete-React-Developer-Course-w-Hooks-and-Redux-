import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter,sortByDate,sortByAmount } from '../actions/filters';
const ExpenseListFilters = (props) => (
  <div>
    {console.log('hellio')}
    {console.log(props)}
    <input type='text' value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value))
      console.log(e.target.value)
    }} />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate())
        } else if (e.target.value === 'amount') {
          props.dispatch(sortByAmount())
        }
      }}
    
    >
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
    
  </div>
)
//setup value and onChange for select
const mapStateToProps = (state) => {
  console.log('this is HOCC')
  console.log(state)
  return {
    filters:state.filters
  }
}
export default connect(mapStateToProps)(ExpenseListFilters);
/**
 * Read this article to fully understand it 
 * https://react-redux.js.org/using-react-redux/connect-mapdispatch
 * Connect: Dispatching Actions with mapDispatchToProps
 */