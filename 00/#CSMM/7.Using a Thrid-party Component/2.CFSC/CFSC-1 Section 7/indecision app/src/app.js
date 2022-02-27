//CfSC 60/2 Passing Children to Component 
console.log("app.js CFSC is runing")
 
import React from "react";

import ReactDOM from "react-dom";


import IndecisionApp from './components/IndecisionApp'
// const Layout = (props) => {
//   return (
//     <div>
//       <p>Header</p>
//       {props.content}
//       {/* {why this not working now} */}

//       <p>Footer</p>
//     </div>
//   )
// }
const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.content}
      <p>Footer</p>
    </div>
  )
}
// const template = () => {
//   return (
//     <div>
//       <h1>Page Title</h1>
//       <p>This is y page</p>
//     </div>
//   )
// }
/**Okay the problem was at this part template 
 * OMG I got the eror this is not a function you above declared an arrow function see that the important of review the lecture to fully understand it Good not bad 
 */
const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
)
// ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
// ReactDOM.render(<Layout content={template} name="Khalid" />, document.getElementById('app'));
ReactDOM.render(<Layout content={template} />, document.getElementById('app'));

