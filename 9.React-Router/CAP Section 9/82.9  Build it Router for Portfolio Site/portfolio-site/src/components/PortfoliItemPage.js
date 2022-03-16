import React from "react"
const PortfolioItemPage = (props) => (
  <div>
    <h3>A Thing I've Done</h3>    
    <p>This Page if for the Item with id of {props.match.params.id} </p>
    
  </div>
)
export default PortfolioItemPage