/**
 * React-router 101
 * // install the library
 * yarn add react-router-dom@4.2.2 there 
 * https://v5.reactrouter.com/web/guides/philosophy
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const routes = (
  <BrowserRouter></BrowserRouter>
)

ReactDOM.render(<p>This is my boilerplate </p>, document.getElementById('app'));
