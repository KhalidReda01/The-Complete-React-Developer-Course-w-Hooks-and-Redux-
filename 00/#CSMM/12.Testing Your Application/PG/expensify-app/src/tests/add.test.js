const add = (a, b) => a + b+1;
test('should add two numbers',()=> {
  const result = add(3, 4);
  if (result !== 7) {
    throw new Error(`You added 4 and 3 . the result ${result}. Expect 7`)
  }

})