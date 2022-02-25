// Setting up Babel with webpack
/**
 * 
 */
console.log('app.js is runing')

import React from 'react';
import ReactDOM from 'react-dom';
// const template = <p>test1234</p>
const template = React.createElement('p', {},'testing 123')
ReactDOM.render(template, document.getElementById('app'))
