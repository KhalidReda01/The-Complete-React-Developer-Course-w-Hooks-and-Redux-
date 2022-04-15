import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
  <div>
    {console.log('test')}
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
  </div>
)
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {console.log(props)}
   {props.isAdmin&&<p>This is private info . Please don't share !</p>} 
      <WrappedComponent {...props} />
    </div>
  )
}
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/>:<p>Please login in to view the info</p>}
      {console.log(props)}
      
    </div>
  )
}
const AuthInfo=requireAuthentication(Info)
const AdminInfo=withAdminWarning(Info)
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the datails"/>,document.getElementById('app'))