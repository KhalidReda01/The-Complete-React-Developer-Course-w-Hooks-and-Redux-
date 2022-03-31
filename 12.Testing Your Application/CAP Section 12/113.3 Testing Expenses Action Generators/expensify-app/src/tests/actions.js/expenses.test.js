import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object',()=> {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123abc'
  })
})

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

test('should setup add expense action object with provided values', () => {
  const expenseDate = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note:'This is last months rent'
  }
  const action = addExpense(expenseDate)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDate,
      id:expect.any(String)
    }
  })
})
//Challenge Time 2nd
//Call addExpense with not data
//Assert the value of the return object
test('should setup add expense action object with default values', () => {

  
})