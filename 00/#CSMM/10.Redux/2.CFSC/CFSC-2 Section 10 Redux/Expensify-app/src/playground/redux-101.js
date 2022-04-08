
import { createStore } from "redux";
//Action generators
const countReducer=(state = { count: 0 }, action) => {
 
  switch (action.type) {
    case 'INCREMENT':

      return {
        count:state.count+action.incrementBy
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

  
}
const incrementCount = ({incrementBy=1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})
const setCount = ({count}={}) => ({
  type: 'SET',
  count
})
const resetCount = () => ({
  type: 'RESET'
})
const store = createStore(countReducer)
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
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(setCount({ count: 101 }))
store.dispatch(resetCount())
store.dispatch(setCount())
//Decrement the count by 1 
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy:10
// })
// console.log(store.getState())
//Reset the cout to zero
// store.dispatch({
//   type:'RESET'
// }) 
// store.dispatch({
//   type: 'SET',
//   count:101
// })
// console.log(store.getState())