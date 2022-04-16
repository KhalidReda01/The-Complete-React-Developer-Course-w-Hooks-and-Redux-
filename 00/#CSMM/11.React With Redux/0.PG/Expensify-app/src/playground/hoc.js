// Higher Order Component (HOC) - A component (HOC ) that renders a nother component
import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
  <div>
    {console.log(props.props.info)}
    <h1>Info</h1>
    <p>The info is :{props.props.info}</p>
  </div>
)
const withAdminWarning = (WrappedComponet) => {
  return (props) => (
    <div>
      <p>This is private info . please don't share</p>
      <WrappedComponet props={props }/>
    </div>
  )
}
const AdminInfo=withAdminWarning(Info)
ReactDOM.render(<AdminInfo info="There are the deatils"/>,document.getElementById('app'))