import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is :{props.info }</p>
  </div>
)
const withAdminWarning = (WrappedComponent) => {
  return (props)=> (
    <div>
      <p>This is private info. Pleae don't share !</p>
      <WrappedComponent {...props }/>
    </div>
  )
}
const AdminInfo=withAdminWarning(Info)
// ReactDOM.render(<Info info="These are the details" />,document.getElementById('app'))
ReactDOM.render(<AdminInfo info="These are the details" />,document.getElementById('app'))