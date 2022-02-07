console.log('App.js is running! ')

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
// Here we want to get the the data dynamically so we we use variables and put it js expression

// var appObject = {
//   title: "App",
//   subtitle:"information about the App"
// }
// I think I understand it so well I don't have to take notes or write comments but as you said keep going 
var appObject = {
  title: "Indecision App",
  subtitle:"Put your life in the hands of a computer"
}
// This is the old template but after we add unpdates and used the object 
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

// Get the  user data dynamically 
var user = {
  name: 'Khalid Reda',
  age: 23,
  location:'Mansura'
}
// test geting data jsx and put it in {}
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
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age:{user.age}</p>
    <p>Location:{user.age}</p>
  </div>
)
// Challenge time
// create app object title /sutitles
// use title/subtitle  in the template 
// render template
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)

