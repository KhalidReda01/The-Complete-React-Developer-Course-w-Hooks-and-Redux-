import { combineReducers, createStore } from "redux";
//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expense Reducer
const expenseReducerDefaultState=[]
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
//Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate:undefined
}
const filterReducer=(state = filterReducerDefaultState,action)=> {
  switch (action.type) {
    default:
      return state
  }
}
// store creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters:filterReducer
      }
  
))
console.log(store.getState())
const demoState = {
  expenses: [{
    id: 'adfadfd',
    description: 'January Rent',
    note: 'This was the final for that address',
    amount: 54500,
    createAt:0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate:undefined
  }
}
console.log(demoState)