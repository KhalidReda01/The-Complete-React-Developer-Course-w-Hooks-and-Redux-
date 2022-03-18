import { createStore } from 'redux';
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count:0
      }
    default:
      return state;
  }

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
store.dispatch(
  {
    type:'INCREMENT'
  }
)

// Challenge Time
// Reset - set the cout equal to zero 
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

// I'd like to reset the count to zero
console.log(store.getState())

/**
 * Recap what I did as you understand from this first time don't worry I will came back later to fully master 
 * Mastery comes from practice practice parctice Okay Keep the spirit I will come back with the repo commits and CFSC WVI MB
 * 
 */