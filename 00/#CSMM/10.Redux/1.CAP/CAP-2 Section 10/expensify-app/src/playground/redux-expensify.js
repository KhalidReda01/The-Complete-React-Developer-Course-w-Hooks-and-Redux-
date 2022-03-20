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
// EDIT_EXPENSE
const editExpense=(id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET_TEXT-FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
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

     const result= state.filter((pros) => {
        return pros.id !== action.id
        
     })
     return [
      result
    ]
    }
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        console.log('Okay')

        if (expense.id === action.id) {
          console.log(expense)
          console.log('There is a hidden error ')
          return {
            ...expense,
            ...action.updates
          }
        } else {
          console.log('is it working')
          console.log(expense)
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
store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))
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