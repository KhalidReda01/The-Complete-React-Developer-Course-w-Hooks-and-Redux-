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
  return () => (
    <div>
      <p>This is private info. please don't share</p>
      <WrappedComponent/>
    </div>
  )
}
const AdminInfo=withAdminWarning(Info)
ReactDOM.render(<AdminInfo info='There are the details'/> ,document.getElementById('app'))