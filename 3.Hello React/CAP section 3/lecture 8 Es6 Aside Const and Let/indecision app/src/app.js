console.log('App.js is running! ')

// JSX - JavaScript XML
// 7.Conditional Rendering in JSX
// if statements done
// ternary operators
// logical and operator


// Challenge time
// only render  the subtile (and p tag) if subtitle exist - logical and opeator
// render new p tag - if options.length >0 "Here are your options " "No Options " - ternary operator
// var appObject = {
//   title: "Indecision App",
//   subtitle: "Put your life in the hands of a computer",
//   options:['one','two']
// }
// challenge time replace all var with let and const 
// I used only const because there is constant no need to cange the value of them 
const appObject = {
  title: "Indecision App",
  // subtitle: "Put your life in the hands of a computer",
  options:[]
}
// {appObject.options.length > 0 && <p>{appObject.subtitle}</p>/**Here you used the logical and operator  */} 

const template =(
<div>
    <h1>{appObject.title} </h1>
    
    {/* <p>{appObject.subtitle }</p> */}
    {appObject.subtitle&& <p>{appObject.subtitle}</p>/**Here you used the logical and operator  */} 
    <p>{appObject.options.length>0?"Here are your options":"No Options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Khalid Reda',
  age: 19,
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
const templateTwo = (
  <div>
    {/* tenary opeator */}
    <h1>{user.name ? user.name : false}</h1> 
    {/**logical and operator  */}
    {(user.age&&user.age>=18)&& <p>Age:{user.age}</p>}
    {/* <p>Age:{user.age}</p> */}
    {/* <p>Location:{getLocation(user.location)}</p> */}
    {getLocation(user.location)}
  </div>
)

const appRoot = document.getElementById('app')
// ReactDOM.render(templateTwo, appRoot)
ReactDOM.render(template, appRoot)

