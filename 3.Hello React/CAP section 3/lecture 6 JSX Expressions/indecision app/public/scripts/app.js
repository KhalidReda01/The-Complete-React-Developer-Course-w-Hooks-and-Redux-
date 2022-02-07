"use strict";

console.log('App.js is running! ');

// JSX - JavaScript XML
// Exploring JSX

// var template =(
// <div>
//   <h1>indecision app </h1>
//     <p>This is some info</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// );
// var appObject = {
//   title: "App",
//   subtitle:"information about the App"
// }
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
  age: 23,
  location: 'Mansura'
  // var userName = "Youssef Reda";
  // var userAge = "10";
  // var userLocation='Cairo'
  // var templateTwo = (
  //   <div>
  //     <h1>{userName}</h1>
  //     <p>Age:{userAge}</p>
  //     <p>Location:{userLocation}</p>
  //   </div>
  // )
};var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age:",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location:",
    user.age
  )
);
// Challenge time
// create app object title /sutitles
// use title/subtitle  in the template 
// render template
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
