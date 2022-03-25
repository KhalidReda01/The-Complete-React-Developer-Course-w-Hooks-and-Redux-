import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
/**
 * ERROR in ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/normalize.css/normalize.css
Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (83)
For more information on which environments are supported please see:
https://github.com/sass/node-sass/releases/tag/v4.5.3
    at module.exports (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\11.React With Redux\2.CFSC\CFSC-1 Section 11\expensify-app\node_modules\node-sass\lib\binding.js:13:13)
    at Object.<anonymous> (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\11.React With Redux\2.CFSC\CFSC-1 Section 11\expensify-app\node_modules\node-sass\lib\index.js:14:35)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:14)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:92:18)
    at Object.<anonymous> (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\11.React With Redux\2.CFSC\CFSC-1 Section 11\expensify-app\node_modules\sass-loader\lib\loader.js:3:14)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
 @ ./node_modules/normalize.css/normalize.css 4:14-94
 @ ./src/app.js
 @ multi (webpack)-dev-server/client?http://localhost:8081 ./src/app.js

ERROR in ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/styles/styles.scss
Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (83)et support your current environment: Windows 64-upported please see:bit with Unsupported runtime (83)               4.5.3
For more information on which environments are surrent Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\11.React With Redux\2.CFSC\CFSC-1 Section 11\ep upported please see:                            :13:13)
https://github.com/sass/node-sass/releases/tag/vop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\11.React With Redux\2.CFSC\CFSC-1 Section 114.5.3                                           js:14:35)
    at module.exports (C:\Users\khalid\Desktop\Cder.js:1085:14)urrent Projects\The-Complete-React-Developer-Couodules/cjs/loader.js:1114:10)rse-w-Hooks-and-Redux-\00\#CSMM\11.React With Rejs:950:32)dux\2.CFSC\CFSC-1 Section 11\expensify-app\node_js/loader.js:790:14)modules\node-sass\lib\binding.js:13:13)         er.js:974:19)
    at Object.<anonymous> (C:\Users\khalid\Deskt92:18)op\Current Projects\The-Complete-React-Developerop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\11.React With Redux\2.CFSC\CFSC-1 Section 1 -Course-w-Hooks-and-Redux-\00\#CSMM\11.React Witer.js:3:14)h Redux\2.CFSC\CFSC-1 Section 11\expensify-app\nder.js:1085:14)ode_modules\node-sass\lib\index.js:14:35)       
    at Module._compile (internal/modules/cjs/loader.js:1085:14)                                 lhost:8081 ./src/app.js
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:14)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:92:18)
    at Object.<anonymous> (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\00\#CSMM\11.React With Redux\2.CFSC\CFSC-1 Section 11\expensify-app\node_modules\sass-loader\lib\loader.js:3:14)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
 @ ./src/styles/styles.scss 4:14-124
 @ ./src/app.js
 @ multi (webpack)-dev-server/client?http://localhost:8081 ./src/app.js
 */