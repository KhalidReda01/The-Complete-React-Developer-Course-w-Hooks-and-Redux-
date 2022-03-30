const add = (a, b) => a +s b;
test('Should add two numbers', () => {
  const result = add(3, 4);
  if (result !== 7){
  throw new Error(`You added 4 and 3 . The result was ${result}.Expect 7`)
  }
}) 