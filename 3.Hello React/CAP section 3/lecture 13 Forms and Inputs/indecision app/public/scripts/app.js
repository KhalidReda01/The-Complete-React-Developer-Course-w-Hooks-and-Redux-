"use strict";

console.log('App.js is running! ');

// JSX - JavaScript XML
/**
 * 18/13 Forms and Inputs
 * 
 */

var app = {
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
    app.title,
    " "
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ) /**Here you used the logical and operator  */,
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No Options"
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
  ),
  React.createElement(
    "form",
    null,
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      "Add Option"
    )
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
