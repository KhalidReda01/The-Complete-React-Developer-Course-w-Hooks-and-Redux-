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
  return () => (
    <div>
      <p>This is private info . please don't share!</p>
      <WrappedComponent/>
    </div>
  )
};
const AdminInfo=withAdminWarning(Info);
// ReactDOM.render(<Info info="There are the deatails" />,document.getElementById('app'))

ReactDOM.render(<AdminInfo info="There are the deatails" />,document.getElementById('app'))