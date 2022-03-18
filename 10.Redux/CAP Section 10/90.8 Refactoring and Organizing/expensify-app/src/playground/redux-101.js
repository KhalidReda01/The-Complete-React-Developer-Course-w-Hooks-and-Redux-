import { createStore } from 'redux';
// Action generators
// const add = (data) => {
const add = ({a,b},c) => {
  // return data.a + data.b;
  return a + b+c;
}
console.log(add({a:1,b:12}))
const incrementCount = (payload={}) => ({
  type: 'INCREMENT',
  incrementBy:typeof payload.incrementBy==='number'? payload.incrementBy:1
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
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

});
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())

})

store.dispatch(
  {
    type: 'INCREMENT',
    incrementBy:5
  }
)
// unsubscribe();
// store.dispatch(
//   {
//     type:'INCREMENT'
//   }
// )
store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount())
store.dispatch(
  {
    type:'RESET'
  }
)
store.dispatch(
  {
    type:'DECREMENT'
  }
)
store.dispatch(
  {
    type: 'DECREMENT',
    decrementBy: 10
  }
)
// Challenge Time
// decrement by 10
// challenge done
store.dispatch({
  type: 'SET',
  count:101
})