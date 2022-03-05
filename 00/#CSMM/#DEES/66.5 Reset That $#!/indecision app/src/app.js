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
/**
 * strange error comes from nowhere so I will recap what I did to see where is this error 
 *  [1] ./src/app.js 607 bytes {0} [built] [failed] [1 error]

ERROR in multi (webpack)-dev-server/client?http://localhost:8080 ./src/app.js
Module not found: Error: Can't resolve '\indecision app\node_modules\webpack-dev
-server\client\index.js?http://localhost:8080' in 'C:\Users\khalid\Desktop\Curre
nt Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\#DEE
S\66.5 Reset That $#!\indecision app'
 @ multi (webpack)-dev-server/client?http://localhost:8080 ./src/app.js

ERROR in ./src/app.js
Module build failed: SyntaxError: Unexpected token (18:16)

  16 |
  17 |
> 18 | ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
     |                 ^
  19 |

 @ multi (webpack)-dev-server/client?http://localhost:8080 ./src/app.js
webpack: Failed to compile.
Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\hibe
rfil.sys'

 */


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
 