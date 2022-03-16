import React from "react"
import { NavLink } from "react-router-dom"
const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activename="is-active" exact={true}>Home</NavLink>
    <NavLink to="/Portfolio" activename="is-active">Portfolio</NavLink>
    <NavLink to="/contact" activename="is-active" >Contact</NavLink>
  </header>
)
export default Header
