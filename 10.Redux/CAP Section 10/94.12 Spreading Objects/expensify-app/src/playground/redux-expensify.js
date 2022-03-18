import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

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
const removeExpense = ({id } = {}) => ({
  type: 'REMOVE_Expense',
  id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
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
      return state.filter(({ id }) => id!== action.id );
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
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

store.dispatch(removeExpense({ id: expenseOne.expense.id }))
console.log("DEES")
console.log(expenseOne)
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// Challenge Time 
store.dispatch(setTextFilter('rent'))
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

// const user = {
//   name: 'Khalid',
//   age: 23
// };
// console.log({
//   age:23,
//   ...user,
//   location:'Mansura'
// })
/**
 * babel object spread operator 
 * yarn add babel-plugin-transform-object-rest-spread@6.23.0
 * 
 */