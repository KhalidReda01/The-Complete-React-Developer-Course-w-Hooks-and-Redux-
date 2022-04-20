const add = (a, b) => a + b;
// Challenge Time
const generateGreeting =(name='Anonymous')=>`Hello ${name}!`
test('should add two numbers',()=> {
  const result = add(3, 4);
  expect(result).toBe(7)

})

test('Shoud generate Greeting for name ', () => {
  const result = generateGreeting('Khalid')
  expect(result).toBe("Hello Khalid!")
})
test('should generate Greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!")
}) 