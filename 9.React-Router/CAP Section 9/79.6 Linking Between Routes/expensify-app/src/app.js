/**
 * 79 Linking Between Routes
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
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
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
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
/**
 * Recap what I did at this lecture
 * first I import the Link compoent from the react-router-dom libarary
 * second I used it instead of the regular anchor tag a because It refresh the page I mean not render side javascript and link is ready component 
 * third I wanted to make the header fixed to all pages so make a new component Called Header for that then use it at the routes template befor switch
 * fourth creart a 4 Links as a challenge every one have a path realted 
 * fifth use the NavLink instead of normal link for the style reasons and as for the root path we needed to use the same exact true value to not be selected when use other paths I will WVI reserch for this partat new version 
 * sixth activeClassName attribute and give it a value of is-active and style it with a font-weight:bold; and Volla like the the lecture is finished but Hey I think this is  my summmary but the instructor andew said alot things need to really memorize I fully understand him but Memory is not trustable at programing that's why keep going reacap every lecture like this 
 */

ReactDOM.render(routes, document.getElementById('app'));
