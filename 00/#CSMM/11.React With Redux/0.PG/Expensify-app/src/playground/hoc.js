// Higher Order Component (HOC) - A component (HOC ) that renders a nother component
import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
  <div>
    
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
  </div>
)
const withAdminWarning = (WrappedComponet) => {
  return (props) => (
    <div>
     {props.isAdmin&&<p>This is private info . please don't share</p>} 
      <WrappedComponet {...props }/>
    </div>
  )
}
const requreAuthentication = (WrappedComponet) => {
  return (props) => (
    <div>
      {props.isAuthenticated? <WrappedComponet {...props}/>:<p>Please login to view the info</p>}
     
    </div>
  )
}
const AuthInfo=requreAuthentication(Info)
const AdminInfo=withAdminWarning(Info)
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the deatils"/>,document.getElementById('app'))
// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the deatils"/>,document.getElementById('app'))