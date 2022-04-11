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
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated?<WrappedComponent {...props}/> : <p>Please login to view the info</p>}
      
    </div>
  )
}
// Challenge time
//requireAuthentication
//const AdminInfo = withAdminWarning(Info)
const AuthInfo=requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info='There are the details'/> ,document.getElementById('app'))