// const Person = {
//   name: 'khalid',
//   age: 23,
//   location: {
//     city: 'Mansura',
//     temp:29
//   }
// }
// const {name:firstName="Anonmous",age }=Person
// // const name = Person.name;
// // const age = Person.age;
// // console.log(`${Person.name} is ${Person.age}`)
// console.log(`${firstName} is ${age}`)
// // the Challenge
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name:'Penguin'
//   }
// }
// const {name:publisherName="Self-published"}=book.publisher
// console.log(publisherName);// Penguin / Self-Published

const address = ['15 Imam Stree', 'Mark Minia Elnasr ', 'Mansura', '1235434']
// console.log(`you are in ${address[1]} ${address[2]}`)
const [,city,state]=address
console.log(`you are in ${city} ${state}`)

// Now the challene time 
const item = ['Coffee(hot)', '$2.00', '$2.55', '$2.75'];
const [itemName,, meduimPrice] = item

console.log(`A ${itemName} costs ${meduimPrice}`)
// console.log(`A meduim coffee (hot) costs $2.50`)
