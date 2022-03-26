//Higher Order (HOC) - A component (HOC) that renders another component
//Reuse Code
//Render Hijacking
//Prop Manpulation 
//Abtract state 
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
    
  </div>
)
// step 1 create a regular function not a creact component
// this is the high order comonent 
/**
 ** In this div we have a few gools 
 ** the first goal to add admin warning in 
 ** the second still render the wrapped component 

 */
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
     {props.isAdmin?<p> This is Private info. Please don't share !</p>:<WrappedComponent {...props}/>} 
      
    </div>
  )
}
// Challenge Time
// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      
      {!props.isAuthenticated ? <p>Please login in to view Info</p>:<WrappedComponent {...props}/>}
      
    </div>
  )
}
const AdminInfo = withAdminWarning(Info)
const AuthInfo=requireAuthentication(Info) 

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the deaitls"/>,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the deaitls"/>,document.getElementById('app'))