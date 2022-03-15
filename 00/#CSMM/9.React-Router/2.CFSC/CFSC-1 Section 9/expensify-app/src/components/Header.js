import React from "react";
import { NavLink } from 'react-router-dom';// this is wrong and this is what cause the error 
/**
 * warning.js?6327:33 Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.

Check the render method of `Header`.
    in Header (created by AppRouter)
    in div (created by AppRouter)
    in Router (created by BrowserRouter)
    in BrowserRouter (created by AppRouter)
    in AppRouter
printWarning @ warning.js?6327:33
warning @ warning.js?6327:57
createElement @ react.development.js?99ee:1275
Header @ Header.js?6f7a:14
mountIndeterminateComponent @ react-dom.development.js?cada:10400
beginWork @ react-dom.development.js?cada:10601
performUnitOfWork @ react-dom.development.js?cada:12573
workLoop @ react-dom.development.js?cada:12682
callCallback @ react-dom.development.js?cada:1299
invokeGuardedCallbackDev @ react-dom.development.js?cada:1338
invokeGuardedCallback @ react-dom.development.js?cada:1195
performWork @ react-dom.development.js?cada:12800
scheduleUpdateImpl @ react-dom.development.js?cada:13185
scheduleUpdate @ react-dom.development.js?cada:13124
scheduleTopLevelUpdate @ react-dom.development.js?cada:13395
updateContainer @ react-dom.development.js?cada:13425
eval @ react-dom.development.js?cada:17105
unbatchedUpdates @ react-dom.development.js?cada:13256
renderSubtreeIntoContainer @ react-dom.development.js?cada:17104
render @ react-dom.development.js?cada:17129
eval @ app.js?bd9c:10
(anonymous) @ bundle.js:774
__webpack_require__ @ bundle.js:20
(anonymous) @ bundle.js:431
__webpack_require__ @ bundle.js:20
(anonymous) @ bundle.js:63
(anonymous) @ bundle.js:66
invariant.js?7313:42 Uncaught Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.

Check the render method of `Header`.
    at invariant (webpack-internal:///18:42:15)
    at createFiberFromElementType (webpack-internal:///110:8185:5)
    at createFiberFromElement (webpack-internal:///110:8130:15)
    at createChild (webpack-internal:///110:8832:28)
    at reconcileChildrenArray (webpack-internal:///110:9132:25)
    at reconcileChildFibers (webpack-internal:///110:9495:14)
    at reconcileChildrenAtPriority (webpack-internal:///110:10127:30)
    at reconcileChildren (webpack-internal:///110:10118:5)
    at updateHostComponent (webpack-internal:///110:10370:5)
    at beginWork (webpack-internal:///110:10609:16)
invariant @ invariant.js?7313:42
createFiberFromElementType @ react-dom.development.js?cada:8185
createFiberFromElement @ react-dom.development.js?cada:8130
createChild @ react-dom.development.js?cada:8832
reconcileChildrenArray @ react-dom.development.js?cada:9132
reconcileChildFibers @ react-dom.development.js?cada:9495
reconcileChildrenAtPriority @ react-dom.development.js?cada:10127
reconcileChildren @ react-dom.development.js?cada:10118
updateHostComponent @ react-dom.development.js?cada:10370
beginWork @ react-dom.development.js?cada:10609
performUnitOfWork @ react-dom.development.js?cada:12573
workLoop @ react-dom.development.js?cada:12682
callCallback @ react-dom.development.js?cada:1299
invokeGuardedCallbackDev @ react-dom.development.js?cada:1338
invokeGuardedCallback @ react-dom.development.js?cada:1195
performWork @ react-dom.development.js?cada:12800
scheduleUpdateImpl @ react-dom.development.js?cada:13185
scheduleUpdate @ react-dom.development.js?cada:13124
scheduleTopLevelUpdate @ react-dom.development.js?cada:13395
updateContainer @ react-dom.development.js?cada:13425
eval @ react-dom.development.js?cada:17105
unbatchedUpdates @ react-dom.development.js?cada:13256
renderSubtreeIntoContainer @ react-dom.development.js?cada:17104
render @ react-dom.development.js?cada:17129
eval @ app.js?bd9c:10
(anonymous) @ bundle.js:774
__webpack_require__ @ bundle.js:20
(anonymous) @ bundle.js:431
__webpack_require__ @ bundle.js:20
(anonymous) @ bundle.js:63
(anonymous) @ bundle.js:66
react-dom.development.js?cada:8305 The above error occurred in the <header> component:
    in header (created by Header)
    in Header (created by AppRouter)
    in div (created by AppRouter)
    in Router (created by BrowserRouter)
    in BrowserRouter (created by AppRouter)
    in AppRouter

Consider adding an error boundary to your tree to customize error handling behavior.
You can learn more about error boundaries at https://fb.me/react-error-boundaries.
logCapturedError$1 @ react-dom.development.js?cada:8305
captureError @ react-dom.development.js?cada:12993
performWork @ react-dom.development.js?cada:12825
scheduleUpdateImpl @ react-dom.development.js?cada:13185
scheduleUpdate @ react-dom.development.js?cada:13124
scheduleTopLevelUpdate @ react-dom.development.js?cada:13395
updateContainer @ react-dom.development.js?cada:13425
eval @ react-dom.development.js?cada:17105
unbatchedUpdates @ react-dom.development.js?cada:13256
renderSubtreeIntoContainer @ react-dom.development.js?cada:17104
render @ react-dom.development.js?cada:17129
eval @ app.js?bd9c:10
(anonymous) @ bundle.js:774
__webpack_require__ @ bundle.js:20
(anonymous) @ bundle.js:431
__webpack_require__ @ bundle.js:20
(anonymous) @ bundle.js:63
(anonymous) @ bundle.js:66
react-dom.development.js?cada:12879 Uncaught Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.

Check the render method of `Header`.
    at invariant (webpack-internal:///18:42:15)
    at createFiberFromElementType (webpack-internal:///110:8185:5)
    at createFiberFromElement (webpack-internal:///110:8130:15)
    at createChild (webpack-internal:///110:8832:28)
    at reconcileChildrenArray (webpack-internal:///110:9132:25)
    at reconcileChildFibers (webpack-internal:///110:9495:14)
    at reconcileChildrenAtPriority (webpack-internal:///110:10127:30)
    at reconcileChildren (webpack-internal:///110:10118:5)
    at updateHostComponent (webpack-internal:///110:10370:5)
    at beginWork (webpack-internal:///110:10609:16)
 * 
 */

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)
export default Header