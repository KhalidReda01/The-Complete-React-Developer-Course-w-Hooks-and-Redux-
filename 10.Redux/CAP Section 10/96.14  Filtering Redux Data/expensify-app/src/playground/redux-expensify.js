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
const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT'
})
// SORT_BY_AMOUNT
const sortByDate = () => ({
  type:'SORT_BY_DATE'
})
// SET_START_DATE 
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})
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
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case "SET_START_DaTE":
      return {
        ...state,
        startDate:action.startDate    
      }
    case "SET_END_DATE":
      return {
        ...state,
        endDate:action.endtDate    
      }
    default:
      return state;
  }
}
// timestamps(millisecnods)
// January 1st 1970 (unix epoch)
// 33400, 10, -203

// Get Visible Expenses 
const getVisibleExpenses = (expenses,{text,sortBy,starDate,endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch=typeof starDate !=='number' || expense.createdAt >=startDate ;
    const endDateMatch=typeof endDate !== 'number' || expense.createdAt<=endDate ;
    const textMatch = expenses.description.includes(text);
    // figure out if expenses.description as the text variable string inside of it
    // includes 
    // convert both strings to lower case 
    return startDateMatch && endDateMatch && textMatch;
  });
}
// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filterReducer
  })
)
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
  // console.log(store.getState())
  console.log(visibleExpenses)
})
console.log(store.getState())
const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100,createdAt:1000}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 ,createdAt:-1000}))
// Challenge Time

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// console.log("DEES")
// console.log(expenseOne)
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// Challenge Time 
store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate())
// console.log('show results')
// store.dispatch(setStartDate(125)) // startDate 125
// // store.dispatch(setStartDate())    // startDate undefined
// store.dispatch(setEndDate(1250))  // endDate 1250
const demoState={
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

