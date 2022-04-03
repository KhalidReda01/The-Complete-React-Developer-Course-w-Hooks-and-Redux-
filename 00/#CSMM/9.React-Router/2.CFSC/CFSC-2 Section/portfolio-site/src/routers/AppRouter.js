import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../ContactPage";
import PortfolioItem from "../components/PortfolioItem";


const AppRouter =()=> (
  <BrowserRouter>
    <div>
       <Header/>
      <Switch>
       <Route path="/" component={HomePage} exact={true}/>  
       <Route path="/portfolio" component={PortfolioPage}/>  
       <Route path="/portfolio/:id" component={PortfolioItem}/>  
       <Route path="/contact" component={ContactPage}/>  
       <Route component={NotFoundPage}/>
    </Switch>
    </div>
   
  </BrowserRouter>
)
export default AppRouter