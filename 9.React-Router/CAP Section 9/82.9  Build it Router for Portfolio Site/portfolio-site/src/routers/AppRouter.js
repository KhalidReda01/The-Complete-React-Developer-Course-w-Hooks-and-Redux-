import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';

const AppRouter = () => (
   <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} /> 
        <Route path="/contact" component={ContactPage}/>
        <Route path="/Portfolio" component={PortfolioPage}/>        
        <Route component={NotFoundPage} />
    </Switch> 
    </div>
         
  </BrowserRouter>
)
export default AppRouter;
/**Build it Router for Portfolio Site
 * Challenge Time
 * Portfolio Router 
 * Show header/nav bar on all page including 404
 * / -> Home Page (in nav)
 * /Portfolio -> Portfolio home page with links to items (in nav)
 * /portfolio/123 -> Individual portfolio item page that shows the ID
 * /contact -> Contact Page (in nav)
 */
// Welcome Back Let's start the Challenge let's finish this section and Eat Redux 