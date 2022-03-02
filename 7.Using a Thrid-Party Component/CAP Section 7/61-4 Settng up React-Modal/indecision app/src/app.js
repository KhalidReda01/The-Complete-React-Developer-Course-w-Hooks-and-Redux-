
/**
 * Section 7 Using a Third-Party Component 
 * lecture 61/3  Setting Up React Modal   
 * Actual start after warrior rest for 2 days 
 */
/**
 * we'are gonna install and use our very first third party react component React Modal
 */
// yarn add react-modal@2.2.2
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

/**
 * React-modal
 */

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
