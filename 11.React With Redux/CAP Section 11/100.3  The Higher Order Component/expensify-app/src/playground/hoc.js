// Higher Order Component (HOC) - A component(HOC) that renders anohter component

import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
  </div>
);
ReactDOM.render(<Info info="There are the deatails" />,document.getElementById('app'))