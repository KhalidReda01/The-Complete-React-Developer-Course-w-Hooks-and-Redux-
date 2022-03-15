

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    This is my dashboard compoent
  </div>
)
const AddExpensePage = () => (
  <div>
    This is my Add Expense Page compoent
  </div>
)
const EditExpensePage = () => (
  <div>
    This is my Edit Expense Page compoent
  </div>
)
const HelpPage = () => (
  <div>
    This is my Help Page compoent
  </div>
)


const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      
    </div>
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('app'));
