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
  type: 'SORT_BY_DATE',
  sortBy:'Amount'
})
// SET_START_DATE
// SET_END_DATE

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
    // case 'SORT_BY_DATE':
    //   return {
    //     ...state,
    //     sortBy:action.sortBy
    //   }
    default:
      return state;
  }
}
// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filterReducer
  })
);
store.subscribe(() => {
  console.log(store.getState())

})
const expenseOne= store.dispatch(addExpense({description:'Rent',amount:100}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))
store.dispatch(removeExpense({id:expenseOne.expense.id}))
// console.log(expenseOne.expense.id)
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:5000}))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// Challenge time
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount()); //amount
store.dispatch(sortByAmount()); //amount
store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate())// date
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
 * [
    {
        "id": "630d04ec-2b0b-414f-94c8-4f494a169a1b",
        "description": "Coffee",
        "note": "",
        "amount": 300,
        "createdAt": 0
    }
]
 */