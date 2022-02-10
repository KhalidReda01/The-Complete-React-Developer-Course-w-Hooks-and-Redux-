"use strict";

console.log('App.js is running! ');

/**
 * 18/13 Forms and Inputs
 * http://127.0.0.1:8080/?option=hello+
 * http://127.0.0.1:8080/?option=test
 * You have to repeat lectuers even if  you undrestand what is going on but for mastery okay so repat again and take notes a
 * after you code a long and practice with him 
 *  we don't want to use that old technqie  to do that we are setting up and event handler 
 * react dom events syntheticEvent React  https://reactjs.org/docs/events.html
 * working with arrays in jsx is a topic on its own
 * // Challenge time 
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
  }
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
    { onSubmit: onFormSubmit },
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
