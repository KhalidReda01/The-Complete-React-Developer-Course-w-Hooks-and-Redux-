

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
)
const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
)
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
  </header>
)
const routes = (
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
ReactDOM.render(routes, document.getElementById('app'));
/**
 * Using the HTML5 History API
 * https://css-tricks.com/using-the-html5-history-api/
 */
