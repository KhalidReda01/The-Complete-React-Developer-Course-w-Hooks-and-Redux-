// const person = {
//   // name: 'Khalid',
//   age: 23,
//   location: {
//     city: 'Mansura',
//     temp:22
//   }
// }
// const {name:firstName="Anonymous",age } = person;

// console.log(`${firstName} is ${age}.`)



// const {city,temp:temperature} = person.location

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }
// Challenge Time 
const books = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name:"penguin"
  }
}
const { name:publisherName='Self-published' } = books.publisher
// console.log(name)
console.log(publisherName);// pernguin , Self-published