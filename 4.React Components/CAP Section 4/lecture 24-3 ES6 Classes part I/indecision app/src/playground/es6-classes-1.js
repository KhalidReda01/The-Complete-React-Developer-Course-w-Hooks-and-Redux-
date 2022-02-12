// There was an Error when I create a es6-classes-1.js
// but try to use babel give me an error because really the file doesn't exsit in the working directory
// so make sure that your file really exist created it in VScode donesn't gaurante that
/**
 * 24-3 ES6 Classes Part I
 * // Car
// Make
// Model
// Vin
// getDescription 

 */
/**
 * constructor Function define it to get acces to khalid Reda 
 * the constructor function that get called them can make a new instance and it get called with of the arguments 
 * so if we wanted to do something with the name so you have to define the constructor function 
 * if we have to do that no but we lose acces to that data khalid reda 
 * class Person {
  constructor(name='loda') {
    this.name = name||'Test';
}
}
const me = new Person('Khalid Reda');
const other= new Person("Mohamed Reda ")
const other2= new Person()
console.log(me)
console.log(other)
console.log(other2)

    // return "Hi. I am "+this.name+" !";
    // template string back time old info I know that


 */
// challenge time 
// Setup contructor  to take name and age (defualt to 0)
// getDescription - Khalid Reda is 13 year(s) old .

class Person {
  constructor(name='Anonymous') {
    this.name = name;
  }
  getGreeting() {
    return `Hi . I am ${this.name} !`
  }
}
const me = new Person('Khalid Reda');
const other= new Person()
console.log(me.getGreeting())
console.log(other.getGreeting())
