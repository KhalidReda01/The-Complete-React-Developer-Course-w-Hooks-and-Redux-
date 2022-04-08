
import { createStore } from "redux";
//Action generators
const add =({a,b})=>{
  return a+b
}
console.log(add({a:1,b:12}))
const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy:typeof payload.incrementBy==='number'?payload.incrementBy:1
})
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
    case 'SET':
      return {
        count:action.count
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
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy:5
// })
// // console.log(store.getState())
// store.dispatch({
//   type:'INCREMENT'
// })
// unsubscribe()
// console.log(store.getState())
/**
 * Using the Action Generators
 */
store.dispatch(incrementCount({incrementBy:5}))
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
store.dispatch({
  type: 'SET',
  count:101
})
// console.log(store.getState())