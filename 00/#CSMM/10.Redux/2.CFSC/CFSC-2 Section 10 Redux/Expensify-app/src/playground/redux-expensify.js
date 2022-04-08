import { createStore, combineReducers } from "redux";
import uuid from 'uuid'
//ADD_EXPENSE
// Not bad
const addExpense = ({description='',note='',amount=0,createdAt=0}={})=> ({
  type: 'ADD_EXPENSE',
  expense:{
  id: uuid(),
    description,
    note,
    amount,
    createdAt
}
})
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_AMOUNT
//SORT_BY_DATE
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      console.log(action)
      return state.concat(action.expense)
    default:
      return state;
  }
}
//Filters Reducer 
const filterReducerDefaultSate = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate:undefined,
}
const filtersReducer = (state = filterReducerDefaultSate, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
//Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filtersReducer
  })
)
store.subscribe(() => {
 console.log(store.getState()) 
})
// console.log(store.getState()) 

store.dispatch(addExpense({description:'Rent',amount:100}))
const demoState = {
  expenses: [{
    id: 'hafdw',
    description: 'January Rent',
    note: 'This is bla bla ',
    amount: 4545,
    createdAt:0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate:undefined
  }
}
console.log(demoState)