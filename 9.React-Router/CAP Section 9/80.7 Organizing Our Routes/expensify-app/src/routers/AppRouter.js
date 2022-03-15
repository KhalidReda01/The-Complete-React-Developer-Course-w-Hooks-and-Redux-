import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
// Challenge time
// Create 6 new files for the 6 componets
// setup imports , component , default export 
// import into AppRouter so they can be used 

const AppRouter = () => (
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
export default AppRouter;