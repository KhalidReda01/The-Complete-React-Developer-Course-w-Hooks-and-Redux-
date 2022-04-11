/**
 * Review Section 11 React With Redux 
 * 99.2 Organizing Redux 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
const store=configureStore()
ReactDOM.render(<AppRouter />, document.getElementById('app'));
