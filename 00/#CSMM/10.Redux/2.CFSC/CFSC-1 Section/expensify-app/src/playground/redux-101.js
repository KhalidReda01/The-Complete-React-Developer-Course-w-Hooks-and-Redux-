import { createStore } from "redux";
const store = createStore((state = { count: 100 }, actions) => {
  switch (actions.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count:state.count -1
      }
    case 'RESET':
      return {
        count:0
      }
    default:
      return  state 
      //return { state } .state. count:NAN
    
      
  }

})
console.log(store.getState())
store.dispatch({
  type:'INCREMENT'
})
console.log(store.getState())
store.dispatch({
  type:'DECREMENT'
})
console.log(store.getState())
store.dispatch({
  type:'DECREMENT'
})
console.log(store.getState())
store.dispatch({
  type:'DECREMENT'
})
console.log(store.getState())
store.dispatch({
  type:'DECREMENT'
})
console.log(store.getState())
store.dispatch({
  type:'RESET'
})
store.dispatch({
  type:'DECREMENT'
})



// store.dispatch({
//   type:'RESET'
// })
console.log(store.getState())