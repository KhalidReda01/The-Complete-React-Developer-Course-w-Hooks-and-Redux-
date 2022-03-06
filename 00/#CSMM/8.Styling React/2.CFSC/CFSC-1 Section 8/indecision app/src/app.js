//CfSC 60/2 Passing Children to Component
// CFSC 61/3 setting up React Modal ->> CFSC Bonus Refactoring other Statless functional Components
// CFSC 66/4 Reset That $#!*


console.log("app.js CFSC is runing")
 
import React from "react";

import ReactDOM from "react-dom";


import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styless.scss'


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
