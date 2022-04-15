import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
  <div>
    {console.log(props)}
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
  </div>
)
const withAdminWarning = (WrappedComponent) => {
  return () => (
    <div>
    <p>This is private info . Please don't share !</p>
      <WrappedComponent />
    </div>
  )
}
const AdminInfo=withAdminWarning(Info)
ReactDOM.render(<AdminInfo info="There are the datails"/>,document.getElementById('app'))