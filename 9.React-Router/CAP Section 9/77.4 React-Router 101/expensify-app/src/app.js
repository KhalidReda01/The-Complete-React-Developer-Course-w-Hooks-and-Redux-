/**
 * React-router 101
 * // install the library
 * yarn add react-router-dom@4.2.2 there 
 * https://v5.reactrouter.com/web/guides/philosophy
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
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
// Challenge time
// /edit  EditExpensePage
// /help HelpPage
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage}/>
    </div>      
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
