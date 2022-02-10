console.log('App.js is running! ')

/**
 * 19/14 Arrays in JSX
 * 
 * 
 *  
  */

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options:[]
}
const onFormSubmit = (e) => {
  e.preventDefault();
  // console.log("Form Submitted!")
  // console.log(e.target.elements)
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = '';
    renderOptionApp() 
  }
}
const appRoot = document.getElementById('app')

// Challenge Area 1
// Challenge Area 2
// create "Remove All"button above list
// on click -> wipe the array -> render  
const removeAll=() => {
  app.options = [];
  renderOptionApp() 

}
const renderOptionApp = () => {
  const template =(
<div>
    <h1>{app.title} </h1>    
    {app.subtitle&& <p>{app.subtitle}</p>} 
    <p>{app.options.length>0?"Here are your options":"No Options"}</p>
    <p>{app.options.length}</p>
    <ol>
      <li>Item one </li>
      <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
        <button>Add Option</button>
        <button onClick={removeAll}>Remove All</button>
    </form>
  </div>
);

// const appRoot = document.getElementById('app')
ReactDOM.render(template,appRoot)
}
// Create render function that renders the new jsx
// call it right away
// call it after options array is added to 

renderOptionApp() 
