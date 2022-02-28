
/**
 * Section 7 Using a Third-Party Component 
 * lecture 61/3  Setting Up React Modal   
 */
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
  return (
    <div>
      <p>Header </p>
      {props.children}
      <p>Footer</p>
    </div>
  )
}

ReactDOM.render((<Layout >
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
</Layout>), document.getElementById('app'));
