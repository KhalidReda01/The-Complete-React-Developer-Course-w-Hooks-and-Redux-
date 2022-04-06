/**
 * 87 Subsribing and Dynamic Actions
 */
import { createStore } from "redux";
const store = createStore((state = { count: 0 }, action) => {
 
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;

      return {
        count:state.count+incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count:state.count-decrementBy
      }
    case 'RESET':
      return {
        count:0
      }
     default :
     return state;
 
  }

  
})
const unsubscribe=store.subscribe(() => {
  console.log(store.getState())
})
//Increment the count by 1
store.dispatch({
  type: 'INCREMENT',
  incrementBy:5
})
// console.log(store.getState())
store.dispatch({
  type:'INCREMENT'
})
// unsubscribe()
// console.log(store.getState())
//Decrement the count by 1 
store.dispatch({
  type: 'DECREMENT',
  decrementBy:10
})
// console.log(store.getState())
//Reset the cout to zero
store.dispatch({
  type:'RESET'
}) 
// console.log(store.getState())