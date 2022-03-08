//CFSC lecture 67/5 Theming with Variables 



console.log("app.js CFSC is runing")
 
import React from "react";

import ReactDOM from "react-dom";


import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styless.scss'


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
