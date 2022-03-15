/**
 * 79 Linking Between Routes
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);
const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
)
const EditExpensePage = () => (
  <div>
    This is from my Edit Expense component
  </div>
)
const HelpPage = () => (
  <div>
    This is from my Help Page component
  </div>
)
const NotFoundPage = () => (
  <div>
    {/* 404! -<a href="/">Go home</a> */}
    404! -<Link to ="/">Go home</Link>
  </div>
)
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/">Dashboard</Link>
    <Link to="/create">Create Expense </Link>
    <Link to="/edit">Edit Expense</Link>
    <Link to="/help">Help</Link>
  </header>
)
// Challenge Time
// link to home page
// link to the create expense page
// link to the edit page 
// link to the help page
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch> 
    </div>
         
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
