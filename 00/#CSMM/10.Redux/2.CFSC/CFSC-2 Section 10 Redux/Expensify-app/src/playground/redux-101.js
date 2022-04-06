/**
 * 86 Dispatching Actions 
 */
import { createStore } from "redux";
const store = createStore((state = { count: 0 }, action) => {
 
  switch (action.type) {
    case 'INCREMENT':
      return {
        count:state.count+1
      }
    case 'DECREMENT':
      return {
        count:state.count-1
      }
    case 'RESET':
      return {
        count:0
      }
     default :
     return state;
 
  }

  
})
//Increment the count by 1
store.dispatch({
  type:'INCREMENT'
})
console.log(store.getState())
store.dispatch({
  type:'INCREMENT'
})
console.log(store.getState())
//Decrement the count by 1 
store.dispatch({
  type:'DECREMENT'
})
console.log(store.getState())
//Reset the cout to zero
store.dispatch({
  type:'RESET'
}) 
console.log(store.getState())