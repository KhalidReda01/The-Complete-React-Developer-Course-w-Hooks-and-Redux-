const add = (a, b) => a + b;
// Challenge Time 
const generateGreeting = (name) => `Hello ${name}!`;

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
}) 