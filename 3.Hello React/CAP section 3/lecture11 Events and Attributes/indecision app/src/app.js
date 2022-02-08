console.log('App.js is running! ')

// JSX - JavaScript XML
// 11.Events and Attributes

const appObject = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options:['one','two']
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

    /* class called className at jsx 
    react dom elements docs https://reactjs.org/docs/dom-elements.html
    */

let count = 0;
const addOne = () => {
  console.log("addOne")
}
const templateTwo = (
  <div>
    <h1>Count:{count}</h1>
    <button onClick={addOne}  className="button">+1</button>
   </div>
);
console.log(templateTwo)
const appRoot = document.getElementById('app')
ReactDOM.render(templateTwo , appRoot)

