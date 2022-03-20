import { createStore } from "redux";

// Action generators are function that return action object 
const incrementCount = ({incrementBy=1}={}) => {
  console.log(`${incrementBy} test that`)
  return {
    type: 'INCREMENT',
    incrementBy
  }
  
}
const decrementCount = ({decrementBy=1} ={}) => ({
  type: 'DECREMENT',
  decrementBy
})
// setCount
const setCount = ({count}) => ({
  type: 'SET',
  count
})
// resetCount
const resetCount = () => ({
  type: 'RESET',
  
})

// Reducers
//1. Reducers are pure functions
//2  Never change state or action 
const countReducer=(state = { count: 0 }, actions) => {
  switch (actions.type) {
    case 'INCREMENT':
      console.log(actions)

      // const incrementBy = typeof actions.incrementBy === 'number' ? actions.incrementBy : 1;
      return {
        count: state.count + actions.incrementBy
      };
    case 'DECREMENT':
      // const decrementBy= typeof actions.decrementBy==='number'?actions.decrementBy:1
      return {
        count: state.count - actions.decrementBy
      }
    case 'RESET':
      return {
        count:0
      }
    case 'SET':
      return {
        count:actions.count
      }
    default:
      return  state 
    
    
      
  }

}
const store = createStore(countReducer)

 const unsubsribe=store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch(incrementCount())
store.dispatch(incrementCount({ incrementBy: 10 }))
store.dispatch(decrementCount({decrementBy:5}))
store.dispatch(setCount({count:101}))
store.dispatch(resetCount())
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy:5
// })
// // unsubsribe()
// store.dispatch({
//   type:'DECREMENT'
// })

// store.dispatch({
//   type:'DECREMENT'
// })

// store.dispatch({
//   type:'DECREMENT'
// })

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy:10
// })

// store.dispatch({
//   type:'RESET'
// })

// store.dispatch({
//   type:'DECREMENT'
// })



// store.dispatch({
//   type:'RESET'
// })
// store.dispatch({
//   type: 'SET',
//   count:101
// })
store.subscribe(() => {
  console.log(store.getState())
})
