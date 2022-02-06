console.log('App.js is running! ')

// JSX - JavaScript XML
// Exploring JSX
// Extenstions bable es6 path intellisense

var template =(
<div>
  <h1>indecision app </h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
// single route element so var template = <h1 id="someid">indecision app </h1><p>This is some info</p> is wrong
// the right way is put them in a div container wrapper div


var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)

