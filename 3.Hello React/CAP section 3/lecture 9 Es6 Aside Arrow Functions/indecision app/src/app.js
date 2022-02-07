console.log('App.js is running! ')

// JSX - JavaScript XML
// 7.Conditional Rendering in JSX

const appObject = {
  title: "Indecision App 2",
  // subtitle: "Put your life in the hands of a computer",
  options:[]
}

const template =(
<div>
    <h1>{appObject.title} </h1>    
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
    
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : false}</h1> 
    {(user.age&&user.age>=18)&& <p>Age:{user.age}</p>}
   
    {getLocation(user.location)}
  </div>
)

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)

