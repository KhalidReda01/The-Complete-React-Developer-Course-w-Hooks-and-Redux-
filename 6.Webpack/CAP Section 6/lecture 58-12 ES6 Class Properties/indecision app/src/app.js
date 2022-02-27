// End the Section 6 Webpack
// lecture 58/12 ES6 Class Propertie 


/**adding new babel plugin  */

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

/**
 * using the new way
 *  OldSyntax
name: "Khalid "
[[Prototype]]: Object
constructor: ƒ OldSyntax()
[[Prototype]]: Object
 */


class OldSyntax {
  constructor() {
    this.name = "Khalid "
    this.getGreeting=this.getGreeting.bind(this)
  }
  getGreeting() {
    return `Hi . My name is ${this.name}`
  }

}
// the other advanate create function withou binding mess up 
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting())

//______________________
class NewSyntax {
  name = 'Loda'
  getGreeting = () => {
    return `Hi . My name is ${this.name}`

    }
}
const newSyntax = new NewSyntax()
const newGetGreeting= newSyntax.getGreeting
console.log (newGetGreeting())


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
