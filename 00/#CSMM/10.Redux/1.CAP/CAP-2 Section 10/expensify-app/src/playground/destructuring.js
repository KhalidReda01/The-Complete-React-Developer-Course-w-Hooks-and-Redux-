const person = {
  // name: 'Khalid',
  age: 23,
  location: {
    city: 'Mansura',
    temp:92
  }
}
const {name:firstName='Anonymous',age } = person;

console.log(`${firstName} is ${age}`)
     
const { city, temp:temperature } = person.location
if (city && temperature) {
 console.log(`It's ${temperature} in ${city}`) 
}
