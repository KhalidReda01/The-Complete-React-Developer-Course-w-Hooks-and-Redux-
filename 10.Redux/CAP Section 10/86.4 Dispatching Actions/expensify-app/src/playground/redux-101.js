import { createStore } from 'redux';
const store = createStore((state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      count:state.count+1
    }
  } else {
    return state;
  }
  console.log('running')
  return state;
});

console.log(store.getState())
// Actions - than an object that gets sent to the store
// walk.stop_walking , sit work, stop_working
// increment , decrement,reset


// I'd like to increment the count
store.dispatch(
  {
    type:'INCREMENT'
  }
)

// I'd like to reset the count to zero
console.log(store.getState())

