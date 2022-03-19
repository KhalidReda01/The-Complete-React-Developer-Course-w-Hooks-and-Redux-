// import createStore from redux 
// Creates a Redux store that holds the complete state tree of your app.There should only be a single store in your app.

import { createStore } from 'redux';

const store = createStore((state={count:10}) => {
  return state;
})
//getState()
//Returns the current state tree of your application. It is equal to the last value returned by the store's reducer
// 
console.log(store.getState());
/**
 * Recap 
 * 1st
 * I import the createStore function from Redux the I used it and 
 * I add parm of state then I used the getState method from the createStore to bring the current state back
 * for create store we have to pass function in 
 */ 