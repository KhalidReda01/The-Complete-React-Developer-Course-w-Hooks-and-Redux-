import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'
// Store.creation  
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filterReducer
  })
);