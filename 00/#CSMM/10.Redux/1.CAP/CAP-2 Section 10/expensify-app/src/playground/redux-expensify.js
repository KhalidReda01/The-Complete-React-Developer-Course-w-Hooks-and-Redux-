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
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
// SET_TEXT-FILTER
const setTextFilter = ( text='' ) => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy:'Date'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy:'Amount'
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
const expensesReducerDefaultState=[]
const expensesReducer=(state = expensesReducerDefaultState, action)=>{
  switch (action.type) {
    case 'ADD_EXPENSE': {
      // console.log(action)
      return [
        ...state,
        action.expense
      ]                                          
    // return state.push(action.expense)
    }
    case 'REMOVE_EXPENSE': {

    return state.filter((pros) => {
        return pros.id !== action.id
        
     })
    //  return [ // OMG briliant I got the Error finally
    //   result
    // ]
    }
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
    case 'SET_TEXT_FILTER':
      // console.log(action.text)
      return {
        ...state,
        text:action.text
      }
    case 'SORT_BY_AMOUNT':
      console.log(action.sortBy)
      return {
        ...state,
        sortBy:action.sortBy
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy:action.sortBy
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate:action.startDate,
        
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate:action.endDate
      }
    default:
      return state;
  }
}
// timestatps
// 33400,10,-203 these are all valid time staps
// count in milliseconds
// 0 -January 1st 1970 unix epch 
// we're going to be using timestams extensively in this course as a way to store time zone independent 
// Get Visible Expenses
const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
  console.log('print expense')
  return expenses.filter((expense) => {
    const startDateMatch=typeof startDate !=='number'|| expense.createdAt>=startDate;
    const endDateMatch=typeof endDate!=='number'||expense.createdAt<=endDate;
    const textMatch=true;
    return startDateMatch && endDateMatch && textMatch;
  })
}
// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filterReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
  // console.log(store.getState())

})
const expenseOne= store.dispatch(addExpense({description:'Rent',amount:100}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))
// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// // console.log(expenseOne.expense.id)
// // store.dispatch(editExpense(expenseTwo.expense.id,{amount:5000}))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// // Challenge time
store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByAmount()); //amount
// // store.dispatch(sortByAmount()); //amount
// // store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate())// date
// store.dispatch(sortByDate())// date
// store.dispatch(sortByDate())// date
// // store.dispatch(sortByAmount()); //amount
// store.dispatch(setStartDate(125)) // startDate 125 
// store.dispatch(setStartDate())// startDate undefind
// store.dispatch(setEndDate(1250))// endate 1250


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
 /**
  * Recap what I did here 
  * The expense Reducer is already complete so here I finished the filers reducer firtup need the ablity
  * to change sortB and this is done via two actions SORT_BY_DATE and SORT_BY_AMOUNT ....etc
  */