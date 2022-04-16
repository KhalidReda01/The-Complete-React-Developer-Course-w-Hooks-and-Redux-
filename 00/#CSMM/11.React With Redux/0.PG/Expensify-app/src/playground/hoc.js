// Higher Order Component (HOC) - A component (HOC ) that renders a nother component
import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
  <div>
    {console.log('test')}
    {console.log(props)}
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
  </div>
)
const withAdminWarning = (WrappedComponet) => {
  return () => (
    <div>
      <p>This is private info . please don't share</p>
      <WrappedComponet />
    </div>
  )
}
const AdminInfo=withAdminWarning(Info)
ReactDOM.render(<AdminInfo info="There are the deatils"/>,document.getElementById('app'))