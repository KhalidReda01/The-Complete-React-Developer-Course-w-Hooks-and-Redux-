const add = (a, b) => a + b;
// Challenge Time 
const generateGreeting = (name='Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
}) 

test('Should generate greeting from name', () => {
  const result = generateGreeting('Khalid');
  expect(result).toBe('Hello Khalid!')
})

test('Sould generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!')
})