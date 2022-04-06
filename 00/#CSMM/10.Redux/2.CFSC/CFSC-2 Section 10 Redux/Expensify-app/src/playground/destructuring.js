const Person = {
  name: 'khalid',
  age: 23,
  location: {
    city: 'Mansura',
    temp:15
  }
}
const { name, age } = Person
const {city,temp}=Person.location
console.log(`${name} is ${age}`)

if (city && temp) {
  console.log(`It's ${temp} in ${city}`)
}