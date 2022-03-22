// Higher Order Component (HOC) - A component(HOC) that renders anohter component
// Resue code
// Render Hijacking
// Prop manipulation 
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin&& <p>This is private info . please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};
//Challenge Time
//requireAuthentication
// const AdminInfo = withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info)
// ReactDOM.render(<Info info="There are the deatails" />,document.getElementById('app'))

// ReactDOM.render(<AdminInfo info="There are the deatails" />,document.getElementById('app'))
// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the deatails" />,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the deatails" />,document.getElementById('app'))