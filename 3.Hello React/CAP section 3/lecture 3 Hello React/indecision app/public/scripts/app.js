console.log('App.js is running! ')

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js!</p>; Error without ""
// var template = "<p>This is JSX from app.js!</p>";wrong way

//This solution I did but It's nor the right one
// because It's shown like that at the body<p>This is JSX from app.js!</p> we neeed to hide the p tag too 
// This is the right way 
var template = React.createElement("h1", {
  id: "someid"
}, "This is JSX from app.js");
//See Now It's working the This is JSX from app.js is bold and is h1 tag 
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
// This error Uncaught SyntaxError: Unexpected token '<' to solve it ""
// Use babel.js.io - Try it out
// var template = React.createElement("p", null, "This is JSX from app.js"); React isn't intended to be used like this  
/*
babel 
var template =<h1 id="someid">This is JSX from app.js</h1>;
var template =React.createElement("h1", {
  id: "someid"
}, "This is JSX from app.js");
*/
