console.log('App.js is running! ')

// JSX - JavaScript XML
// 12-Manual Data Binding

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


let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
  console.log("addOne",count)
}
const minusOne = () => {
  count--;
  renderCounterApp();
  console.log("minusOne")
}
const reset = () => {
  count = 0;
  renderCounterApp();
  console.log('reset')
}

const appRoot = document.getElementById('app')


// rerender cout to the screen
const renderCounterApp = () => {
  const templateTwo = (
  <div>
    <h1>Count:{count}</h1>
    <button onClick={addOne} className="button">+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
   </div>
  );
  ReactDOM.render(templateTwo , appRoot)
}
renderCounterApp();