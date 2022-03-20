import { combineReducers, createStore } from "redux";
import uuid from 'uuid'
//ADD_EXPENSE
const addExpense = (
  { description = '',
    note = '',
    amount = 0,
    createdAt = 0 }
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
//REMOVE_EXPENSE
const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
//SET_TEXT_FILTER
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expense Reducer
const expenseReducerDefaultState=[]
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
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
        }
      )
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
store.subscribe(() => {
  console.log(store.getState())
})
const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))
store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))
const demoState = {
  expenses: [{
    id: 'adfadfd',
    description: 'January Rent',
    note: 'This was the final for that address',
    amount: 54500,
    createdAt:0
  }],
  filters: {
    text: 'rent demo',
    sortBy: 'amount',
    startDate: undefined,
    endDate:undefined
  }
}
// console.log(demoState)
