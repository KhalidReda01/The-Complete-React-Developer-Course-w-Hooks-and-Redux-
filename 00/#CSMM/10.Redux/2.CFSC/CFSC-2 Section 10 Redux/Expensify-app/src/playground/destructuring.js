// const Person = {
//   name: 'khalid',
//   age: 23,
//   location: {
//     city: 'Mansura',
//     temp:15
//   }
// }
// const { name, age } = Person
// const {city,temp}=Person.location
// console.log(`${name} is ${age}`)

// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`)
// }
// const books = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name:'Penguin'
//   }
// }
// const {name:publisherName='Self-published' }=books.publisher
// console.log(publisherName)
/**
 * 89 ES6 Array Destructuring 
 */
const address = ['15 Imam street', 'Markez minia Elnasr', 'Mansura', '23435356']
console.log(`You are in ${address[1]} ${address[2]}`)
const [, city,state ,] = address;
console.log(`You are in ${city} ${state}`)