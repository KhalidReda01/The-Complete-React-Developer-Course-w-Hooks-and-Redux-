import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(AppRouter, document.getElementById('app'));
/**
 * Using the HTML5 History API
 * https://css-tricks.com/using-the-html5-history-api/
 */
