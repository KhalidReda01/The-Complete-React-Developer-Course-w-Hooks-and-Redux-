
/**
 * Section 7 Using a Third-Party Component 
 * lecture 60/2 Passing Children to Component  
 */
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.content}
      <p>Footer</p>
    </div>
  )
}

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
)

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
ReactDOM.render(<Layout content={template} />, document.getElementById('app'));
