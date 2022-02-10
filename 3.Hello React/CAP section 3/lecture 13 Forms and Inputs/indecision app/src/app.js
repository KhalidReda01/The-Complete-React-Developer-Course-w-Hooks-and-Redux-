console.log('App.js is running! ')

// JSX - JavaScript XML
/**
 * 18/13 Forms and Inputs
 * 
 */

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options:['one','two']
}

const template =(
<div>
    <h1>{app.title} </h1>    
    {app.subtitle&& <p>{app.subtitle}</p>/**Here you used the logical and operator  */} 
    <p>{app.options.length>0?"Here are your options":"No Options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    <form>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </div>
);

const appRoot = document.getElementById('app')
ReactDOM.render(template,appRoot)