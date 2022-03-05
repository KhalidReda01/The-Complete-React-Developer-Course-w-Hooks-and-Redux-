/**
 *  66 Reset That  $#!*
 * reference for BEM name converntion 
 * https://webflow.com/blog/class-naming-101-bem
 * http://getbem.com/naming/
 * 
 * yarn add normalize.css@7.0.0
 */

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
 