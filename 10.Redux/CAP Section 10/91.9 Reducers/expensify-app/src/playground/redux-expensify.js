import { createStore ,combineReducers } from "redux";
const demoState = {
  expenses: [{
    id: 'pdfdfasdf',
    description: 'January Rent',
    note: "This was the final payment for that address OKay Loda",
    amount: 54500,
    createdAt:0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amout',// date or amount 
    startDate: undefined,
    endDate:undefined
  }
}