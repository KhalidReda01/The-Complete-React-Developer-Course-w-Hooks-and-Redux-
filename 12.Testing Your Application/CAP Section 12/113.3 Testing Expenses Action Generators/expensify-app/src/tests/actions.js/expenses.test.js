import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object',()=> {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123abc'
  })
})
// Challenge Time
// setup test case
// call editExpense {note:'New note value'}
// make an assertion
test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note:'New note value'
    }
    
  })
})