console.log('App.js is running! ')

// JSX - JavaScript XML
// 7.Conditional Rendering in JSX
// if statements done
// ternary operators
// logical and operator 

var appObject = {
  title: "Indecision App",
  subtitle:"Put your life in the hands of a computer"
}
var template =(
<div>
  <h1>{appObject.title} </h1>
    <p>{appObject.subtitle }</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Khalid Reda',
  age: 23,
  // location:'Cairo'
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location }</p>;

  }
  // else {
  //   return 'undefined'
  // }
  
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name:'Anonymous'}</h1>
    <p>Age:{user.age}</p>
    {/* <p>Location:{getLocation(user.location)}</p> */}
    {getLocation(user.location)}
  </div>
)

var appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot)

