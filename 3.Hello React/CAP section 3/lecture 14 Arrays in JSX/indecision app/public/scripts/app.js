"use strict";

console.log('App.js is running! ');

/**
 * 19/14 Arrays in JSX
 * 
 *  {
        [99,98,97,"Khalid Reda",null,undefined,true]
      }
      { {99}{98}{97} }
      { // we can render jsx inside of jsx
      {<p>1</p>} }
      // when we are usinx jsx in arrays we get erros react.development.js:171
       Warning: Each child in an array or iterator should have a unique "key" prop.
Check the top-level render call using <div>. See https://fb.me/react-warning-keys for more information.
    in p
 *  
  */

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  // console.log("Form Submitted!")
  // console.log(e.target.elements)
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptionApp();
  }
};
var appRoot = document.getElementById('app');

var removeAll = function removeAll() {
  app.options = [];
  renderOptionApp();
};
var numbers = [55, 101, 100];

var renderOptionApp = function renderOptionApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title,
      " "
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    numbers.map(function (number) {
      return React.createElement(
        "p",
        { key: number },
        "Number:",
        number
      );
    }),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "Item one "
      ),
      React.createElement(
        "li",
        null,
        "Item two"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  // const appRoot = document.getElementById('app')
  ReactDOM.render(template, appRoot);
};
// Create render function that renders the new jsx
// call it right away
// call it after options array is added to 

renderOptionApp();
