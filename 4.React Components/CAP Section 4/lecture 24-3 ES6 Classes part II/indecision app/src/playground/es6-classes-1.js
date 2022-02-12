class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}
/**
 * super new keyword how you can use it and why 
 * super refer to the paret class in this case of the parent of student is person 
 * super() we are callign the parent constructor funcion 
 * // '' this is a false value if we use !'' false to true bolean !!' ' true !1'' false I need some explaination but I think I got it 
 * // Logical not operator to determaie that if it have major or not  
 * !!undefined false
 * 
 */
class Student extends Person {
  constructor(name, age, major) {
    super(name,age)
    this.major = major;
  }
  hasMajor() {
  return !! this.major  
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their Major is ${this.major}`
      console.log('test',this)
    }
    return description
  }
}
// Challenge time
// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
//1.Hi I am Khalid Reda . I'm visiting from Mansura
//2. Hi I am Khalid Reda 
class Traveler extends Student {
  constructor(name, age, major, homeLocation) {
    super(name, age, major)
    this.homeLocation=homeLocation
  }
  hasHomeLocation() {
    return !!this.homeLocation
   
  }
  getGretting() {
        let greeting = super.getGretting()
        if (this.hasHomeLocation()) {
          greeting += `I'm visiting From Mansurra`
        }
      return greeting
  }
}


// const me = new Traveler('Mansura')
// console.log(me)
const me = new Traveler('Khalid Reda', 26,"Computer Sciencce","Mansura");
// console.log(me.getDescription());

const other = new Traveler();
// console.log(other.getDescription());
// const me2 = new Traveler('Mansura')
console.log(me.getGretting())