// Setting up Babel with webpack
/**
 * 
 */
console.log('app.js is runing')

import React from 'react';
import ReactDOM from 'react-dom';
// const template = <p>test1234</p> 
// const template = React.createElement('p', {},'testing 123')
const template = <p>Hell React after using configue babel with wepback</p>
ReactDOM.render(template, document.getElementById('app'))
/**
 * webpack technique loader  let you customise the behviour of wepack when it load a given file
 * wait khalid now you don't have to write lecture information just code along and practice with Andrea now then you will rewatch this lecture so Just foucs and code now 
 * 
 */
//yarn add babel-core@6.25.0 babel-loader@7.1.1