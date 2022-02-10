"use strict";

console.log('App.js is running! ');

/**
 * 19/14 Arrays in JSX
 * 
 * 
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

// Challenge Area 1
// Challenge Area 2
// create "Remove All"button above list
// on click -> wipe the array -> render  
var removeAll = function removeAll() {
  app.options = [];
  renderOptionApp();
};
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
      ),
      React.createElement(
        "button",
        { onClick: removeAll },
        "Remove All"
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
