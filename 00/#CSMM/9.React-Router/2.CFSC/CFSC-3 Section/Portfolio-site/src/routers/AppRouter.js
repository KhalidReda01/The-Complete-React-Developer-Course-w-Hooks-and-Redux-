import React from "react";
import { BrowserRouter,Link,Route,Switch,NavLink } from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
const AppRouter =()=> (
  <BrowserRouter>
    <div>
      <Header/>
    <Switch>
  
      <Route component={NotFoundPage} />
    </Switch>
    </div>
   
  </BrowserRouter>
)
export default AppRouter