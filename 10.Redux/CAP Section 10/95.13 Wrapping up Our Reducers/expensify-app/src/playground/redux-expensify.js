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
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
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

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filterReducer = (state=filterReducerDefaultState,action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}
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
store.dispatch(setTextFilter();
store.dispatch(sortByAmount());
store.dispatch(sortByDate())
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

