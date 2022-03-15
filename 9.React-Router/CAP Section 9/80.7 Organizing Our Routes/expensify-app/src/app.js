/**
 * 80 Organizing Our Routes
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
/**
 * Recap what I did 
 * first the point of this lecture is to split our big file to simple small componet as you did with the old project Indecision app
 * so I created a routers foler indie of it appRouter.js then cut our code to it then import it at app.js and ofcourse render it the AppRotuer copmoent to the screen the dom
 * second I split every statless function compoent at its own file and thats an easy process that's the lecture so done 
 */


ReactDOM.render(<AppRouter/>, document.getElementById('app'));
