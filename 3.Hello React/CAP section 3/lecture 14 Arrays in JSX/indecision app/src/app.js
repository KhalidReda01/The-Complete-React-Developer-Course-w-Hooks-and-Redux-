console.log('App.js is running! ')

/**
 * 19/14 Arrays in JSX
 * 
 *  {
        [99,98,97,"Khalid Reda",null,undefined,true]
      }
      { {99}{98}{97} }
      { // we can render jsx inside of jsx
      {<p>1</p>} }
      // when we are usinx jsx in arrays we get erros react.development.js:171
       Warning: Each child in an array or iterator should have a unique "key" prop.
Check the top-level render call using <div>. See https://fb.me/react-warning-keys for more information.
    in p
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

 
const removeAll=() => {
  app.options = [];
  renderOptionApp() 

}
const numbers = [55, 101, 100];

const renderOptionApp = () => {
  const template =(
<div>
    <h1>{app.title} </h1>    
    {app.subtitle&& <p>{app.subtitle}</p>} 
    <p>{app.options.length>0?"Here are your options":"No Options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      {/* {
        [<p key="1">A</p>,<p key="2">B</p>,<p key="3">C</p>]
      } */}
      {
        numbers.map((number) => {
          return <p key={number}>Number:{number}</p>
      })
      }
     
    <ol>
      <li>Item one </li>
      <li>Item two</li>
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
