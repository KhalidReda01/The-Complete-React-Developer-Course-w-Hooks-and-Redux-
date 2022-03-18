import { createStore, combineReducers } from "redux";
import uuid from 'uuid';
/**
 *npm uuid 
 yarn  add uuid@3.1.0
 * const names =["khalid","Reda"]
undefined
names.push('jen')
3
names
(3) ['khalid', 'Reda', 'jen']
names.concat("loda")
(4) ['khalid', 'Reda', 'jen', 'loda']
names
(3) ['khalid', 'Reda', 'jen']
[...names]
(3) ['khalid', 'Reda', 'jen']
[...names,"mike"]
['Adam',...names,"Mike"]

 */
// ADD_EXPENSE
const addExpense = (
  { description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
// REMOVE_EXPENSE
const removeExpense = ({ } = {}) => ({
  type: 'REMOVE_Expense',
  id
})
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_AMOUNT
// SET_SART_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducersDefaultState =[];
const expensesReducer = (state=expensesReducersDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // state.push(action.expense)
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id!==action.id );
    
    default:
      return state;
  }
}
// Filter Reducer
// Challenge Time
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filterReducer = (state=filterReducerDefaultState,action) => {
  switch (action.type) {
    default:
      return state;
  }
}
// text => '', sortBy => 'date', startDAte => undefined, endDate => undefined 
// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filterReducer
  })
)
store.subscribe(() => {
  console.log(store.getState())
})
console.log(store.getState())
const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))
// Challenge Time
store.dispatch(removeExpense({id:expenseOne.expense.id}))
console.log(expenseOne)
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