import { createStore, combineReducers } from "redux";

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_AMOUNT
// SET_SART_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducersDefaultState =[];
const expensesReducer = (state=expensesReducersDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
// Filter Reducer
// Challenge Time
// text => '', sortBy => 'date', startDAte => undefined, endDate => undefined 
// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
  })
)
console.log(store.getState())
const demoState = {
  expenses: [{
    id: 'pdfdfasdf',
    description: 'January Rent',
    note: "This was the final payment for that address OKay Loda",
    amount: 54500,
    createdAt:0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amout',// date or amount 
    startDate: undefined,
    endDate:undefined
  }
}