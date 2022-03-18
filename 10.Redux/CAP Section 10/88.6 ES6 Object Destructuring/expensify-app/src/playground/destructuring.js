const person = {
  name: 'Khalid',
  age: 23,
  location: {
    city: 'Mansura',
    temp:19
  }
}
const name = person.name;
const age = person.age;
// so that's why we need es6 destructuring
// console.log(`${person.name} is ${person.age}.`)
console.log(`${person.name} is ${person.age}.`)