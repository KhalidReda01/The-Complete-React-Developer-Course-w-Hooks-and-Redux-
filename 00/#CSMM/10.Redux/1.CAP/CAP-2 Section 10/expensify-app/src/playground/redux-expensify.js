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
/**
 * Only start Date is a number -> want to actually filter expenses out here 
 * expense.createdAt >= startDate
 * startDate !=='number' // true undefined !== number //true  
 * this will get set to true so StartDateMatce won't be filtered 
 * startDate is 2 
 * createAt is 1 
 * https://www.udemy.com/course/react-2nd-edition/learn/lecture/7900050#questions/3039562
 * https://www.udemy.com/course/react-2nd-edition/learn/lecture/7900050#questions/16399534
 * if the type of state is not equal to a number  startDate !=='number' this is always gonna to be true 
 * if startDate is undefiend not take it into account when it comes to actually filtering 
 * That means that will alwasy be true for non number and we're not actually ever get into a situation
 * whether or not an expense is visivle 
 * 
 * Only Start DAte is a number we actaully filter out expese out here 
 * 
 */
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  // console.log(text)
  // console.log('print expense')
  // console.log(expenses)
  return expenses.filter((expense) => {
    // console.log('Understanding')
    // console.log(endDate)
    // console.log(typeof endDate !=='number')
    // console.log(expense.description.includes(text))
    const startDateMatch=typeof startDate !=='number'|| expense.createdAt>=startDate;
    const endDateMatch=typeof endDate!=='number'||expense.createdAt<=endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    // Challenge time
    // figure out if  expenses.description has the text variable string inside of it 
    // includes 
    // convert both strings to lower case 
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

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }))
// Found the bug here 
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300 ,createdAt:-1000}))
// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// // console.log(expenseOne.expense.id)
// // store.dispatch(editExpense(expenseTwo.expense.id,{amount:5000}))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// // Challenge time
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter('coffee'));
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
// store.dispatch(setStartDate(0)) // startDate 125 
// // store.dispatch(setStartDate(0)) // startDate 125 
// // // store.dispatch(setStartDate())// startDate undefind
// store.dispatch(setEndDate(999))// endate 1250
// Sorting by date working really well now Congrats I fully got it 
// but come back again to parctice again parctice never end 


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