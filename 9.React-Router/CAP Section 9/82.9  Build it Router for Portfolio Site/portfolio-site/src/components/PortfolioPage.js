import React from "react"
import { Link } from "react-router-dom"

const PortfolioPage = () => (
  <div>
    <h3>My Work</h3>
    <p>CheckOut the following things I've done</p>
    <Link to ="/Portfolio/1">Item One</Link>
    <Link to ="/Portfolio/2">Item Two</Link>
  </div>
)
export default PortfolioPage