const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;
test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7)
})
test('should generate Greeting for name', () => {
  const result = generateGreeting('Khalid')
  expect(result).toBe('Hello Khalid!')
})