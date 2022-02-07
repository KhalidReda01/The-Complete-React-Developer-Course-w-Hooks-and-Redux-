"use strict";

console.log('App.js is running! ');

// JSX - JavaScript XML
// 7.Conditional Rendering in JSX
// if statements done
// ternary operators
// logical and operator 

var appObject = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    appObject.title,
    " "
  ),
  React.createElement(
    "p",
    null,
    appObject.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var user = {
  name: 'Khalid Reda',
  age: 19
  // location:'Cairo'
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
  // else {
  //   return 'undefined'
  // }
}
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : false
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age:",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
