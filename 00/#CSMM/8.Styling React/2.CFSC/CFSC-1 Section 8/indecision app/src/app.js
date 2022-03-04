//CfSC 60/2 Passing Children to Component
// CFSC 61/3 setting up React Modal ->> CFSC Bonus Refactoring other Statless functional Components 

console.log("app.js CFSC is runing")
 
import React from "react";

import ReactDOM from "react-dom";


import IndecisionApp from './components/IndecisionApp'
import './styles/styless.css'


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
