// import createStore from redux 
import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = (payload={}) => {
  // console.log(payload)
  return {
    type: 'INCREMENT',
  incrementBy:typeof payload.incrementBy==='number'?payload.incrementBy:1
  }
  
}
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // console.log(action)
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
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
 
 
})

const unsubscribe=store.subscribe(() => {
  console.log(store.getState());
})



// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy:5
// })

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount())


store.dispatch({
  type:'RESET'
})

store.dispatch({
  type:'DECREMENT'
})
store.dispatch({
  type: 'DECREMENT',
  decrementBy:10
})
store.dispatch({
  type: 'SET',
  count:101
})


/**
 * Recap what I did lecture subscribing and Dynamic Actions
 * first up I leant how to  watch for changes to the store by using the subsribe method and pass the functinon that will call every time the store changed I got it  
 * even the return function from this store is unsubscribe function  you can call it 
 * the other thing is learnt about pass dynamic information along inside the action object the store Any way keep going now I fully absorved this lecture but Hey never miss CFSC-CFM 
 * 
 */

