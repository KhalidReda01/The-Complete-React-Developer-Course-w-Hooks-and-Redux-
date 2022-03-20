import { createStore, combineReducers } from "redux";
import uuid from 'uuid';
// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id:uuid(),
    description,
    note,
    amount,
    createdAt
    
  }
})
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT-FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState=[]
const expensesReducer=(state = expensesReducerDefaultState, action)=>{
  switch (action.type) {
    case 'ADD_EXPENSE': {
       return state.concat(action.expense)
    // return state.push(action.expense)
    }
    default:
      return state;
  }
  
}
// Challenge Time
//Filters Reducer
// defaut state value
// text => '',sortBy =>'date',startDate => undefind,endDate=>  undefind
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate:undefined
}
const filterReducer = (state=filterReducerDefaultState,action) => {
  switch (action.type) {
    default:
      return state;
  }
}
// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filterReducer
  })
);
store.subscribe(() => {
  console.log(store.getState())

})
store.dispatch(addExpense({description:'Rent',amount:100}))
const demoState = {
  expenses: [{
    id: 'afdafd',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt:0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',// date or amount
    startDate: undefined,
    endDate:undefined
  }
}
 