// import createStore from redux 
import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({incrementBy=1}={}) => {
  // console.log(payload)
  return {
    type: 'INCREMENT',
  // incrementBy:incrementBy
  incrementBy
  }
  
}
const decrementCount = ({decrementBy=1}={}) => ({
  type: 'DECREMENT',
  decrementBy
})
//Challenge Time
//setCount
const setCount = ({count}={}) => ({
  type: 'SET',
  count
})
//resetCount
const resetCount = () => ({
  type:'RESET',
})
//Reducers
//1. Reducer are pure functions 
const countReducer=(state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // console.log(action)
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
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
const store = createStore(countReducer)

const unsubscribe=store.subscribe(() => {
  console.log(store.getState());
})



// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy:5
// })

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount())


store.dispatch(resetCount())

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy:10}))
store.dispatch(setCount({count:101}))




