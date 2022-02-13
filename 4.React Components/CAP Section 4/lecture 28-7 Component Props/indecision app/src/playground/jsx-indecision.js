console.log('App.js is running! ')
/**
 * 20/15 Picking an option 
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

 
const removeAll=() => {
  app.options = [];
  renderOptionApp() 

}
// const numbers = [55, 101, 100];
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const renderOptionApp = () => {
  const template =(
<div>
    <h1>{app.title} </h1>    
    {app.subtitle&& <p>{app.subtitle}</p>} 
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <button disabled={app.options.length===0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={removeAll}>Remove All</button>

     
     
     
      <ol>
        {/* Map over  app.options getting back and array of lis (set key and text ) */}
    {
        app.options.map((option) => {
          return <li key={option}>{option}</li>
      })
      }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
        <button>Add Option</button>
        
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
