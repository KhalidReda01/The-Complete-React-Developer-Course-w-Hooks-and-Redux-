const add = (a, b) => a + b;
// Challenge Time
const generateGreeting =(name)=>`Hello ${name}!`
test('should add two numbers',()=> {
  const result = add(3, 4);
  expect(result).toBe(7)

})

test('Shoud generate Greeting ', () => {
  const result = generateGreeting('Khalid')
  expect(result).toBe("Hello Khalid!")
})