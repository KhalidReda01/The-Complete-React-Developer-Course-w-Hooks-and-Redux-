

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
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
const NotFoundPage = () => (
  <div>
    404!
  </div>
)


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage}/>
      
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('app'));
