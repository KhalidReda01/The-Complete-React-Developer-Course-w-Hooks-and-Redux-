/**
 * yarn add redux@3.7.2
 */
import { createStore } from 'redux';
const store = createStore((state={count:0}) => {
  return state;
});
// this.setState((prevState) => {
//   return prevState;
// })
console.log(store.getState())// Object {count:0}
console.log('101')

// Actions
// I'd like to increment the count 
// I'd like to reset the cout to zero 