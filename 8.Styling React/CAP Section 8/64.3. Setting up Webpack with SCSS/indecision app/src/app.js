
/**
 * Section 8 Styling React
 * lecture 64/4 setting up webpack with scss 
 * 
 * first I added a .gitgnore file and add the name of node_modules at it to ignore it from my Githup repo no need to cut and paste it anymore 
 * https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files
 */
/**
 * create new file or folder at the src directory
 */

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.css'



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
