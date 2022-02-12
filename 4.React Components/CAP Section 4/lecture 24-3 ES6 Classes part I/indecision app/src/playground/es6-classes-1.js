//  CFSC lecture 24-3 ES6 classes part I

class Person {
  constructor(name="Anonymous",age= 0) {
    this.name = name;
    this.age = age
  }
  getGreeting() {
    return `Hi . I am ${this.name}`
  }
  getDescription() {
    return `${this.name} is ${this.age} years(s) old .`
  }
}
const me = new Person("khalid Reda",23)
const other = new Person();
// console.log(me.name)
// console.log(me.age)
// console.log(other)
console.log(me.getGreeting())
console.log(me.getDescription())
console.log(other.getGreeting())
console.log(other.getDescription())