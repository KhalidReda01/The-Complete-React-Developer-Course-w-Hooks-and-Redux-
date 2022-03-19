import { createStore } from "redux";
const store = createStore((state = { count: 0 }, actions) => {
  switch (actions.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    
    default:
      return { state }
      
  }

})
console.log(store.getState())
store.dispatch({
  type:'INCREMENT'
})
store.dispatch({
  type:'DECREMENT'
})



// store.dispatch({
//   type:'RESET'
// })
console.log(store.getState())