console.log('App.js is running! ')

/**
 * 18/13 Forms and Inputs
 * http://127.0.0.1:8080/?option=hello+
 * http://127.0.0.1:8080/?option=test
 * You have to repeat lectuers even if  you undrestand what is going on but for mastery okay so repat again and take notes a
 * after you code a long and practice with him 
 *  we don't want to use that old technqie  to do that we are setting up and event handler 
 * react dom events syntheticEvent React  https://reactjs.org/docs/events.html
 * working with arrays in jsx is a topic on its own
 * // Challenge time 
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
// Challenge Area 
const renderOptionApp = () => {
  const template =(
<div>
    <h1>{app.title} </h1>    
    {app.subtitle&& <p>{app.subtitle}</p>} 
    <p>{app.options.length>0?"Here are your options":"No Options"}</p>
    <p>{app.options.length}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </div>
);

const appRoot = document.getElementById('app')
ReactDOM.render(template,appRoot)
}
renderOptionApp() 