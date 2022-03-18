//
// Object destructuring
//



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
// // Challenge Time
// const books = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name:"penguin"
//   }
// }
// const { name:publisherName='Self-published' } = books.publisher
// // console.log(name)
// console.log(publisherName);// pernguin , Self-published

//
// Array destructruing
//

// const address = ['15 Imam street ', 'markez minia Elnasr', 'Mansura', '213432']

// const [,city,state='Dakhalia',] = address;

// console.log(`You are in ${city} ${state}`)


// Challenge Time
const item = ['Coffee(hot)', "$2.00", "$2.50", "$2.75"]
// grab first and third items using array destructuring 
console.log(`A meduim Coffe (hot) costs $2.50`)