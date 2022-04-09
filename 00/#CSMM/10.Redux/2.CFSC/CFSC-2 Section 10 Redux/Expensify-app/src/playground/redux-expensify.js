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
const removeExpense = (({id }={}) => ({
  type: 'REMOVE_EXPENSE',
  id
}
 
))
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
//SET_TEXT_FILTER
const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
})
//SORT_BY_AMOUNT

//SORT_BY_DATE
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // console.log(action)
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
    //  console.log(state)
      return state.filter((props) => {
        // console.log(props)
        // console.log('test')
        return props.id !==action.id
      })
      // console.log(action.expense.filter(expense => expense.id!==action.expense.id))
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        console.log("test")
        if (expense.id===action.id) {
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
//Filters Reducer 
const filterReducerDefaultSate = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate:undefined,
}
const filtersReducer = (state = filterReducerDefaultSate, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      console.log(state)
      return {
        ...state,
        text:action.text
      }
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

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))
store.dispatch(editExpense(expenseTwo.expense.id,{amount:2200}))
// Challenge Area
store.dispatch(removeExpense({id:expenseOne.expense.id}))
//console.log(store.dispatch({type:'Hello'})) the returned values is the action same as it
// console.log(expenseOne)
store.dispatch(setTextFilter('rent'))
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
// console.log(demoState)
// Spreading objects works well at the console of the browser but I know It will not work here that's why you have to add the plugin
