import React from 'react';
const PortfolioItemPage = (props) => (
  <div>
    <h1>A thing I've Done</h1>
    <p>This page for the tiem with id of {props.match.params.id }</p>
 </div>
)
export default PortfolioItemPage