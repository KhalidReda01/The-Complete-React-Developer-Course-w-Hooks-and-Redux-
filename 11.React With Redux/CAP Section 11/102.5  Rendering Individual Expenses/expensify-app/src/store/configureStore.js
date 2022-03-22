import { createStore,combineReducers } from "redux";
// Store Creation
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
export default () => {
  const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters:filterReducer
  })
  );
  return store
}
