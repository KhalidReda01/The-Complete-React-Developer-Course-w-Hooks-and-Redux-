/**
 * 78 Setting Up a 404
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
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
    404!
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>      
  </BrowserRouter>
)
/**
 * Recap what I did
 * Here I only import the Switch "It just means that whenever a route's path matches the url path, the router will render the route's component"
 * then I made new route for 404! page compoent that's it for this lecture but CfSc and keep going 
 */
ReactDOM.render(routes, document.getElementById('app'));
