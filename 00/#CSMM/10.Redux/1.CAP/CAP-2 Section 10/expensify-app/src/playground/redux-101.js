// import createStore from redux 
// Creates a Redux store that holds the complete state tree of your app.There should only be a single store in your app.

import { createStore } from 'redux';

const store = createStore((state = { count: 10 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count:state.count -1
      }
    default:
      return state;
  }
 
 
})
/**
 * 
 */
//getState()
//Returns the current state tree of your application. It is equal to the last value returned by the store's reducer
console.log(store.getState());

// Actions
// I'd like to increment the count 
store.dispatch({
  type:'INCREMENT'
})
console.log(store.getState());
// RESET - set the cout equal to zero 
store.dispatch({
  type:'DECREMENT'
})

// I'd like to reset the cout to zero 
console.log(store.getState());
/**
 * Recap 
 * 
 */ 