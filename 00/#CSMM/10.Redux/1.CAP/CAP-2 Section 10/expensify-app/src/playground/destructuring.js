// const person = {
//   // name: 'Khalid',
//   age: 23,
//   location: {
//     city: 'Mansura',
//     temp:92
//   }
// }
// const {name:firstName='Anonymous',age } = person;

// console.log(`${firstName} is ${age}`)
     
// const { city, temp:temperature } = person.location
// if (city && temperature) {
//  console.log(`It's ${temperature} in ${city}`) 
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name:'Penguin'
//   }
// }
// const {name:publisherName="Self-Publshed"}=book.publisher
// console.log(publisherName);//  Penguin , Self-Published

// Array destructuring 
const address = ['1299 s Juniper Street', 'Phildaelphia', 'Penssylvania', '19147'];
// const [street,city,state,zip] = address; 
const [,city,state='New York'] = address; 
console.log(`you are in ${city} ${state}`);
// console.log(`you are in ${address[1]} ${address[2]}`);

const item = ['Coffee (hot)', '$2.00', '$2.55', '$2.75'];
const [itemName,,meduimPrice] = item;
// Grab first and third items using array destructuring 

// console.log(`A meduim Coffe (hot) costs $2.50`);
console.log(`${itemName} costs ${meduimPrice}`);