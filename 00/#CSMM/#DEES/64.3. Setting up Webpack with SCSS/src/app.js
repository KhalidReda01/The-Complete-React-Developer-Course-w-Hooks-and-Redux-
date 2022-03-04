import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
/**Okay same erro 
 * /node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/styles/styles.scss
Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (83)
For more information on which environments are supported please see:
https://github.com/sass/node-sass/releases/tag/v4.5.3
    at module.exports (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\#DEES\64.3. Setting up Webpack with SCSS\node_modules\node-sass\lib\binding.js:13:13)
    at Object.<anonymous> (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\#DEES\64.3. Setting up Webpack with SCSS\node_modules\node-sass\lib\index.js:14:35)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:14)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:92:18)
    at Object.<anonymous> (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\#DEES\64.3. Setting up Webpack with SCSS\node_modules\sass-loader\lib\loader.js:3:14)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
 @ ./src/styles/styles.scss 4:14-124
 @ ./src/app.js
 @ multi (webpack)-dev-server/client?http://localhost:8081 ./src/app.js
 */
/**
 * practice 
 * touch .gitignore
  echo node_modules >.gitignore
 */

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
