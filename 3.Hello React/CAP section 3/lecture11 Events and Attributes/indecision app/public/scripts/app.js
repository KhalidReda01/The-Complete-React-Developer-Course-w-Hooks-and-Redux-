"use strict";

console.log('App.js is running! ');

// JSX - JavaScript XML
// 11.Events and Attributes

var appObject = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ['one', 'two']
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
  appObject.subtitle && React.createElement(
    "p",
    null,
    appObject.subtitle
  ) /**Here you used the logical and operator  */,
  React.createElement(
    "p",
    null,
    appObject.options.length > 0 ? "Here are your options" : "No Options"
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

/* class called className at jsx 
react dom elements docs https://reactjs.org/docs/dom-elements.html
*/

var count = 0;
var someId = "myidhere";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count:",
    count
  ),
  React.createElement(
    "button",
    { id: someId, className: "button" },
    "+1"
  )
);
console.log(templateTwo);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
