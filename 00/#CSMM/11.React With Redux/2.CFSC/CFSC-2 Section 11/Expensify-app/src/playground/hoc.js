// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse Code
// Render hijacking
// Prop manipulation
// Abtract state
import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
  </div>
)
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
     {props.isAdmin&&<p>This is private info. please don't share</p>} 
      <WrappedComponent {...props}/>
    </div>
  )
}
// Challenge time 
//requireAuthentication 
const AdminInfo=withAdminWarning(Info)
ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details'/> ,document.getElementById('app'))