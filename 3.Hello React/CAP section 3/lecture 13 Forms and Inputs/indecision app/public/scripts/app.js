"use strict";

console.log('App.js is running! ');

// JSX - JavaScript XML
// 12-Manual Data Binding

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

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log("addOne", count);
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  console.log("minusOne");
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
  console.log('reset');
};

var appRoot = document.getElementById('app');

// rerender cout to the screen
var renderCounterApp = function renderCounterApp() {
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
      { onClick: addOne, className: "button" },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
