import React from "react"
import { NavLink } from "react-router-dom"
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
    {/* <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink> */}
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)
export default Header
/**
 * the whole goal of this lecture  is to just be aware that react-router 
 * is indeed passing stuff in and that stuff can be useful as we start building more real world applications
 * It's worth noting that react router is only going to pass these props down to components that are actually
 * used inside of a route 
 */