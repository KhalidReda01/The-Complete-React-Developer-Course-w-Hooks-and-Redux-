import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expenses'
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
// Store.creation  
/**
 * * Now this  means that when we import the function the default export from configure store we just 
 * * call it we get the store back we can go ahead and actually use it 
 */