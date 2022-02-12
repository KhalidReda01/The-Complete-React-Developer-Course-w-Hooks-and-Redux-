//  CFM lecture 24-3 ES6 classes part I
 
class Person {
  constructor(name="Anonmyous",age=0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
  return `Hi. ${this.name}`
  }
  getDescrition() {
    return `${this.name} is ${this.age} year(s) old `
  }
}
const me = new Person("khalid Reda",23)
console.log(me.getGreeting())
console.log(me.getDescrition())