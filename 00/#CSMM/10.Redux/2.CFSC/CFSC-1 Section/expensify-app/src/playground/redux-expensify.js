import { createStore } from "redux";
const demoState = {
  expenses: [{
    id: 'adfadfd',
    description: 'January Rent',
    note: 'This was the final for that address',
    amount: 54500,
    createAt:0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate:undefined
  }
}
console.log(demoState)