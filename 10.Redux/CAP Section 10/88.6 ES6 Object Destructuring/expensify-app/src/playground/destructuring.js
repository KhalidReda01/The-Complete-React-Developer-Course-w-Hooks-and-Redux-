const person = {
  name: 'Khalid',
  age: 23,
  location: {
    city: 'Mansura',
    temp:19
  }
}
const {name,age } = person;
// const name = person.name;
// const age = person.age;
const {city,temp} = person.location
console.log(`${name} is ${age}.`)
// if (person.location.city && person.location.temp) {
if (city && temp) {
  // console.log(`It's ${person.location.temp} in ${person.location.city}`)
  console.log(`It's ${temp} in ${city}`)
}
