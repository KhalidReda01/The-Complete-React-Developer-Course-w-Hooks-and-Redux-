// import createStore from redux 
// Creates a Redux store that holds the complete state tree of your app.There should only be a single store in your app.

import { createStore } from 'redux';

const store = createStore((state = { count: 10 }, action) => {
  if (action.type === 'INCREMENT') {
    console.log('runing from here too')
    return {
      count:state.count +1
    }
  } else {
     console.log('runing')
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
store.dispatch({
  type:'INCREMENT'
})

// I'd like to reset the cout to zero 
console.log(store.getState());
/**
 * Recap 
 * 
 */ 