

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Link,Route,Switch,NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
)
const AddExpensePage = () => (
  <div>
    This is from my add Expense Page 
  </div>
)
const EditExpensePage = () => (
  <div>
    This is from my Edit Expense Page 
  </div>
)
const HelpPage = () => (
  <div>
    This is frommy help Page 
  </div>
)
const NotFoundPage = () => (
  <div>
    404!
    <Link to ="/">Go Home</Link>
  </div>
)
const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to ="/"  activeClassName='is-active' exact={true}>Dashboard</NavLink>
    <NavLink to ="/create" activeClassName='is-active'>Create</NavLink>
    <NavLink to ="/edit" activeClassName='is-active'>Edit Expense</NavLink>
    <NavLink to ="/help" activeClassName='is-active'>Help</NavLink>
  </div>
)
const routes = (
  <BrowserRouter>
    <div>
      <Header/>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage }/>
      <Route path="/edit" component={EditExpensePage }/>
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
   
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
