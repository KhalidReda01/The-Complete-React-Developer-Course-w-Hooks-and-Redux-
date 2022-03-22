import { createStore,combineReducers } from "redux";
// Store Creation
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters'
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filterReducer
  })
);