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
/**
 * Recap for what I did for this lecture as you understand it 
 * first I installed the react-router-dom library version 4.2.2
 * second I import the BrowserRoter,Route from it 
 * third I created a routes template that have the BrowserRouter and inside of it use the Dummy componet like explaied above and ofcourse I render it 
 * and Nice as I git that we use the exact attribute to prevent render the root compoent witht the other compoent and be exactly the path that we wite
 * Any way keep going and dont' forget to CFSC this is so important for me 
 */
ReactDOM.render(routes, document.getElementById('app'));
