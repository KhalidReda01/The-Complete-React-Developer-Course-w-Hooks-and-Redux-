//  CSFM lecture 24-3 ES6 classes part I
 
class Car {
  constructor(make,model,vin) {
    this.make = make;
    this.model = model;
    this.vin = vin;
  }
  getDescription() {
    return `the car make is ${this.make} its model is ${this.model} and the vin is ${this.vin}`
  }
}
const Toyta = new Car("Toyta", 2020, "dfhdfds")
console.log(Toyta.getDescription())