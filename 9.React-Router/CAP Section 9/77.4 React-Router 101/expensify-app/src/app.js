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
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage}/>
    </div>      
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
