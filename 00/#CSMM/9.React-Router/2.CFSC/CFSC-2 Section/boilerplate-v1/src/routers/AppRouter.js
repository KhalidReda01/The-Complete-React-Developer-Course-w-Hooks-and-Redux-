import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
/**
 * Challenge Time
 * create 6 new files for the 6 components 
 * setup imports , component default export 
 * import into the AppRouter so they can be used 
 */


const EditExpensePage = () => (
  <div>
    This is my Edit Expense Page
  </div>
)
const HelpPage = () => (
  <div>
    This is my Help Page
  </div>
)
const NotFoundPage = () => (
  <div>
    404!
    <Link to="/">Go Home</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName='is-active' exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName='is-active'>Expense</NavLink>
    <NavLink to="/edit" activeClassName='is-active'>Edit</NavLink>
    <NavLink to="/help" activeClassName='is-active'>Help</NavLink>
  </header>
)
const AppRouter =()=> (
  <BrowserRouter>
    <div>
       <Header/>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
   
  </BrowserRouter>
)
export default AppRouter