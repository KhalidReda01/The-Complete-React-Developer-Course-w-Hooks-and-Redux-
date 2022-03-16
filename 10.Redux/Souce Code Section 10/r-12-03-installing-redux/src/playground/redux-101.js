import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());
// why this is strange why I can't upload or push the souce code 
// Actions
// I'd like to increment the count
// I'd like to reset the count to zero
