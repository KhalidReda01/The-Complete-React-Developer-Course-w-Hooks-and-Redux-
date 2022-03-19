import { createStore } from "redux";
const store = createStore((state = { count: 0 }, actions) => {
  switch (actions.type) {
    case 'INCREMENT':
      const incrementBy = typeof actions.incrementBy === 'number' ? actions.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy= typeof actions.decrementBy==='number'?actions.decrementBy:1
      return {
        count: state.count - decrementBy
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

})

 const unsubsribe=store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'INCREMENT',
  incrementBy:5
})
// unsubsribe()
store.dispatch({
  type:'DECREMENT'
})

store.dispatch({
  type:'DECREMENT'
})

store.dispatch({
  type:'DECREMENT'
})

store.dispatch({
  type: 'DECREMENT',
  decrementBy:10
})

store.dispatch({
  type:'RESET'
})

store.dispatch({
  type:'DECREMENT'
})



store.dispatch({
  type:'RESET'
})
store.dispatch({
  type: 'SET',
  count:101
})
store.subscribe(() => {
  console.log(store.getState())
})
