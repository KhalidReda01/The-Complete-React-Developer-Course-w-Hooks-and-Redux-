import React from "react";
import { BrowserRouter,Link,Route,Switch,NavLink } from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
const AppRouter =()=> (
  <BrowserRouter>
    <div>
      <Header/>
    <Switch>
        <Route path="/" component={HomePage} exact={true}/> 
        <Route path="/portfolio" component={PortfolioPage} exact={true}/> 
        <Route path="/portfolio/:id" component={PortfolioItemPage }/> 
        <Route path="/contact" component={ContactPage }/> 
      <Route component={NotFoundPage} />
    </Switch>
    </div>
   
  </BrowserRouter>
)
export default AppRouter