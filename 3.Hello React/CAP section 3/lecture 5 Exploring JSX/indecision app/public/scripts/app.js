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


var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
