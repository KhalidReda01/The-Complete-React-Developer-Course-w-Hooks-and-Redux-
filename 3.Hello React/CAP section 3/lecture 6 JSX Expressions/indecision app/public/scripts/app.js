'use strict';

console.log('App.js is running! ');

// JSX - JavaScript XML
// Exploring JSX
// Extenstions bable es6 path intellisense

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'indecision app '
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);
// single route element so var template = <h1 id="someid">indecision app </h1><p>This is some info</p> is wrong
// the right way is put them in a div container wrapper div
/**
 * Lecture Notes for challenge time 01
 * Create your own template
 * Create a templateTWo var JSX expression 
 * root div  inside h1 -> Your name Khalid Reda 
 * p -> Age: your age 23
 * p -> Location:Mansura
 * Render templateTwo instead of template 
 */

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Khalid Reda'
  ),
  React.createElement(
    'p',
    null,
    'Age:23'
  ),
  React.createElement(
    'p',
    null,
    'Location:Mansura'
  )
);
var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot)
ReactDOM.render(templateTwo, appRoot);
