
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
      <p>Header </p>
      {/* cool other way but even this you will not gonna use it like that but at least know that you can do that  */}
      {props.children}
      <p>Footer</p>
    </div>
  )
}

// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//   </div>
// )

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<Layout > <p>This is inline hello</p></Layout>, document.getElementById('app'));
/**
 * Now It's important to understand this technique because we're going to see it used when we work third party component
 */
ReactDOM.render((<Layout >
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
</Layout>), document.getElementById('app'));
