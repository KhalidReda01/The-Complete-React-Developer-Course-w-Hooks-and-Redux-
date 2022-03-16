import React from "react"
import { NavLink } from "react-router-dom"
const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/Portfolio" activeName="is-active">Portfolio</NavLink>
    <NavLink to="/contact" activeName="is-active" >Contact</NavLink>
  </header>
)
export default Header
