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
/**
 * Lecture Notes for challenge time 01
 * Create your own template
 * Create a templateTWo var JSX expression 
 * root div  inside h1 -> Your name Khalid Reda 
 * p -> Age: your age 23
 * p -> Location:Mansura
 * Render templateTwo instead of template 
 */

var templateTwo = (
  <div>
    <h1>Khalid Reda</h1>
    <p>Age:23</p>
    <p>Location:Mansura</p>
  </div>
)
var appRoot = document.getElementById('app')
// ReactDOM.render(template, appRoot)
ReactDOM.render(templateTwo, appRoot)

