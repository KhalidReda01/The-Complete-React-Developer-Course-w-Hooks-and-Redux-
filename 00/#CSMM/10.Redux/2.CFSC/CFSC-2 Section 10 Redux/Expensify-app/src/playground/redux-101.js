import { createStore } from 'redux';
// Action generators - functions that return action objects 

// const incrementCount = (payload = {}) => {
//   console.log(payload)
//   return {
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//   }
// }

const incrementCount = ({incrementBy=1} = {}) => (
  {
    type: 'INCREMENT',
    incrementBy
  }
)
const decrementCount = ({decrementBy=1}={}) => ({
  type: 'DECREMENT',
  decrementBy
})
// Challenge Time
// setCount
const setCount = ({count=101 }={}) =>({
  type: 'SET', 
  count
}) 
// resetCount 
const resetCount = () => ({
  type: 'RESET'
  
})
// Reducers
/**
 * 1. Reducer are pure functions 
 * 2. Never change state or action 
 */
// let result;
// let a = 10;
// const add = (a,b) => {
//   result= a + b;
// }
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      
      };
    case 'DECREMENT':

      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count:action.count
      }
    case 'RESET':
      return {
        count:0
      }
    default:
      return state;
  }

}
const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())

})

store.dispatch(
  {
    type: 'INCREMENT',
    incrementBy:5
  }
)

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy:10}))

store.dispatch(setCount({count:-100}))