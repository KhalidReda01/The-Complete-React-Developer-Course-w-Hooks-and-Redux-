// /** @license React v16.0.0
//  * react.development.js
//  *
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

// (function (global, factory) {
// 	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
// 	typeof define === 'function' && define.amd ? define(factory) :
// 	(global.React = factory());
// }(this, (function () { 'use strict';

// /*
// object-assign
// (c) Sindre Sorhus
// @license MIT
// */

// /* eslint-disable no-unused-vars */
// var getOwnPropertySymbols = Object.getOwnPropertySymbols;
// var hasOwnProperty = Object.prototype.hasOwnProperty;
// var propIsEnumerable = Object.prototype.propertyIsEnumerable;

// function toObject(val) {
// 	if (val === null || val === undefined) {
// 		throw new TypeError('Object.assign cannot be called with null or undefined');
// 	}

// 	return Object(val);
// }

// function shouldUseNative() {
// 	try {
// 		if (!Object.assign) {
// 			return false;
// 		}

// 		// Detect buggy property enumeration order in older V8 versions.

// 		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
// 		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
// 		test1[5] = 'de';
// 		if (Object.getOwnPropertyNames(test1)[0] === '5') {
// 			return false;
// 		}

// 		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
// 		var test2 = {};
// 		for (var i = 0; i < 10; i++) {
// 			test2['_' + String.fromCharCode(i)] = i;
// 		}
// 		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
// 			return test2[n];
// 		});
// 		if (order2.join('') !== '0123456789') {
// 			return false;
// 		}

// 		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
// 		var test3 = {};
// 		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
// 			test3[letter] = letter;
// 		});
// 		if (Object.keys(Object.assign({}, test3)).join('') !==
// 				'abcdefghijklmnopqrst') {
// 			return false;
// 		}

// 		return true;
// 	} catch (err) {
// 		// We don't expect any of the above to throw, but better to be safe.
// 		return false;
// 	}
// }

// var index = shouldUseNative() ? Object.assign : function (target, source) {
// 	var from;
// 	var to = toObject(target);
// 	var symbols;

// 	for (var s = 1; s < arguments.length; s++) {
// 		from = Object(arguments[s]);

// 		for (var key in from) {
// 			if (hasOwnProperty.call(from, key)) {
// 				to[key] = from[key];
// 			}
// 		}

// 		if (getOwnPropertySymbols) {
// 			symbols = getOwnPropertySymbols(from);
// 			for (var i = 0; i < symbols.length; i++) {
// 				if (propIsEnumerable.call(from, symbols[i])) {
// 					to[symbols[i]] = from[symbols[i]];
// 				}
// 			}
// 		}
// 	}

// 	return to;
// };

// /**
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @providesModule reactProdInvariant
//  * 
//  */

// /**
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * 
//  */

// function makeEmptyFunction(arg) {
//   return function () {
//     return arg;
//   };
// }

// /**
//  * This function accepts and discards inputs; it has no side effects. This is
//  * primarily useful idiomatically for overridable function endpoints which
//  * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
//  */
// var emptyFunction = function emptyFunction() {};

// emptyFunction.thatReturns = makeEmptyFunction;
// emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
// emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
// emptyFunction.thatReturnsNull = makeEmptyFunction(null);
// emptyFunction.thatReturnsThis = function () {
//   return this;
// };
// emptyFunction.thatReturnsArgument = function (arg) {
//   return arg;
// };

// var emptyFunction_1 = emptyFunction;

// /**
//  * Similar to invariant but only logs a warning if the condition is not met.
//  * This can be used to log issues in development environments in critical
//  * paths. Removing the logging code for production environments will keep the
//  * same logic and follow the same code paths.
//  */

// var warning$1 = emptyFunction_1;

// {
//   var printWarning = function printWarning(format) {
//     for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
//       args[_key - 1] = arguments[_key];
//     }

//     var argIndex = 0;
//     var message = 'Warning: ' + format.replace(/%s/g, function () {
//       return args[argIndex++];
//     });
//     if (typeof console !== 'undefined') {
//       console.error(message);
//     }
//     try {
//       // --- Welcome to debugging React ---
//       // This error was thrown as a convenience so that you can use this stack
//       // to find the callsite that caused this warning to fire.
//       throw new Error(message);
//     } catch (x) {}
//   };

//   warning$1 = function warning(condition, format) {
//     if (format === undefined) {
//       throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
//     }

//     if (format.indexOf('Failed Composite propType: ') === 0) {
//       return; // Ignore CompositeComponent proptype check.
//     }

//     if (!condition) {
//       for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
//         args[_key2 - 2] = arguments[_key2];
//       }

//       printWarning.apply(undefined, [format].concat(args));
//     }
//   };
// }

// var warning_1 = warning$1;

// {
//   var warning = warning_1;
// }

// function warnNoop(publicInstance, callerName) {
//   {
//     var constructor = publicInstance.constructor;
//     warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
//   }
// }

// /**
//  * This is the abstract API for an update queue.
//  */
// var ReactNoopUpdateQueue = {
//   /**
//    * Checks whether or not this composite component is mounted.
//    * @param {ReactClass} publicInstance The instance we want to test.
//    * @return {boolean} True if mounted, false otherwise.
//    * @protected
//    * @final
//    */
//   isMounted: function (publicInstance) {
//     return false;
//   },

//   /**
//    * Forces an update. This should only be invoked when it is known with
//    * certainty that we are **not** in a DOM transaction.
//    *
//    * You may want to call this when you know that some deeper aspect of the
//    * component's state has changed but `setState` was not called.
//    *
//    * This will not invoke `shouldComponentUpdate`, but it will invoke
//    * `componentWillUpdate` and `componentDidUpdate`.
//    *
//    * @param {ReactClass} publicInstance The instance that should rerender.
//    * @param {?function} callback Called after component is updated.
//    * @param {?string} callerName name of the calling function in the public API.
//    * @internal
//    */
//   enqueueForceUpdate: function (publicInstance, callback, callerName) {
//     warnNoop(publicInstance, 'forceUpdate');
//   },

//   /**
//    * Replaces all of the state. Always use this or `setState` to mutate state.
//    * You should treat `this.state` as immutable.
//    *
//    * There is no guarantee that `this.state` will be immediately updated, so
//    * accessing `this.state` after calling this method may return the old value.
//    *
//    * @param {ReactClass} publicInstance The instance that should rerender.
//    * @param {object} completeState Next state.
//    * @param {?function} callback Called after component is updated.
//    * @param {?string} callerName name of the calling function in the public API.
//    * @internal
//    */
//   enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
//     warnNoop(publicInstance, 'replaceState');
//   },

//   /**
//    * Sets a subset of the state. This only exists because _pendingState is
//    * internal. This provides a merging strategy that is not available to deep
//    * properties which is confusing. TODO: Expose pendingState or don't use it
//    * during the merge.
//    *
//    * @param {ReactClass} publicInstance The instance that should rerender.
//    * @param {object} partialState Next partial state to be merged with state.
//    * @param {?function} callback Called after component is updated.
//    * @param {?string} Name of the calling function in the public API.
//    * @internal
//    */
//   enqueueSetState: function (publicInstance, partialState, callback, callerName) {
//     warnNoop(publicInstance, 'setState');
//   }
// };

// var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

// /**
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  */

// var emptyObject = {};

// {
//   Object.freeze(emptyObject);
// }

// var emptyObject_1 = emptyObject;

// /**
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  */

// /**
//  * Use invariant() to assert state which your program assumes to be true.
//  *
//  * Provide sprintf-style format (only %s is supported) and arguments
//  * to provide information about what broke and what you were
//  * expecting.
//  *
//  * The invariant message will be stripped in production, but the invariant
//  * will remain to ensure logic does not differ in production.
//  */

// var validateFormat = function validateFormat(format) {};

// {
//   validateFormat = function validateFormat(format) {
//     if (format === undefined) {
//       throw new Error('invariant requires an error message argument');
//     }
//   };
// }

// function invariant(condition, format, a, b, c, d, e, f) {
//   validateFormat(format);

//   if (!condition) {
//     var error;
//     if (format === undefined) {
//       error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
//     } else {
//       var args = [a, b, c, d, e, f];
//       var argIndex = 0;
//       error = new Error(format.replace(/%s/g, function () {
//         return args[argIndex++];
//       }));
//       error.name = 'Invariant Violation';
//     }

//     error.framesToPop = 1; // we don't care about invariant's own frame
//     throw error;
//   }
// }

// var invariant_1 = invariant;

// /**
//  * Copyright (c) 2014-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @providesModule lowPriorityWarning
//  */

// /**
//  * Forked from fbjs/warning:
//  * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
//  *
//  * Only change is we use console.warn instead of console.error,
//  * and do nothing when 'console' is not supported.
//  * This really simplifies the code.
//  * ---
//  * Similar to invariant but only logs a warning if the condition is not met.
//  * This can be used to log issues in development environments in critical
//  * paths. Removing the logging code for production environments will keep the
//  * same logic and follow the same code paths.
//  */

// var lowPriorityWarning = function () {};

// {
//   var printWarning$1 = function (format) {
//     for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
//       args[_key - 1] = arguments[_key];
//     }

//     var argIndex = 0;
//     var message = 'Warning: ' + format.replace(/%s/g, function () {
//       return args[argIndex++];
//     });
//     if (typeof console !== 'undefined') {
//       console.warn(message);
//     }
//     try {
//       // --- Welcome to debugging React ---
//       // This error was thrown as a convenience so that you can use this stack
//       // to find the callsite that caused this warning to fire.
//       throw new Error(message);
//     } catch (x) {}
//   };

//   lowPriorityWarning = function (condition, format) {
//     if (format === undefined) {
//       throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
//     }
//     if (!condition) {
//       for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
//         args[_key2 - 2] = arguments[_key2];
//       }

//       printWarning$1.apply(undefined, [format].concat(args));
//     }
//   };
// }

// var lowPriorityWarning_1 = lowPriorityWarning;

// /**
//  * Base class helpers for the updating state of a component.
//  */
// function ReactComponent(props, context, updater) {
//   this.props = props;
//   this.context = context;
//   this.refs = emptyObject_1;
//   // We initialize the default updater but the real one gets injected by the
//   // renderer.
//   this.updater = updater || ReactNoopUpdateQueue_1;
// }

// ReactComponent.prototype.isReactComponent = {};

// /**
//  * Sets a subset of the state. Always use this to mutate
//  * state. You should treat `this.state` as immutable.
//  *
//  * There is no guarantee that `this.state` will be immediately updated, so
//  * accessing `this.state` after calling this method may return the old value.
//  *
//  * There is no guarantee that calls to `setState` will run synchronously,
//  * as they may eventually be batched together.  You can provide an optional
//  * callback that will be executed when the call to setState is actually
//  * completed.
//  *
//  * When a function is provided to setState, it will be called at some point in
//  * the future (not synchronously). It will be called with the up to date
//  * component arguments (state, props, context). These values can be different
//  * from this.* because your function may be called after receiveProps but before
//  * shouldComponentUpdate, and this new state, props, and context will not yet be
//  * assigned to this.
//  *
//  * @param {object|function} partialState Next partial state or function to
//  *        produce next partial state to be merged with current state.
//  * @param {?function} callback Called after state is updated.
//  * @final
//  * @protected
//  */
// ReactComponent.prototype.setState = function (partialState, callback) {
//   !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant_1(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
//   this.updater.enqueueSetState(this, partialState, callback, 'setState');
// };

// /**
//  * Forces an update. This should only be invoked when it is known with
//  * certainty that we are **not** in a DOM transaction.
//  *
//  * You may want to call this when you know that some deeper aspect of the
//  * component's state has changed but `setState` was not called.
//  *
//  * This will not invoke `shouldComponentUpdate`, but it will invoke
//  * `componentWillUpdate` and `componentDidUpdate`.
//  *
//  * @param {?function} callback Called after update is complete.
//  * @final
//  * @protected
//  */
// ReactComponent.prototype.forceUpdate = function (callback) {
//   this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
// };

// /**
//  * Deprecated APIs. These APIs used to exist on classic React classes but since
//  * we would like to deprecate them, we're not going to move them over to this
//  * modern base class. Instead, we define a getter that warns if it's accessed.
//  */
// {
//   var deprecatedAPIs = {
//     isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
//     replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
//   };
//   var defineDeprecationWarning = function (methodName, info) {
//     Object.defineProperty(ReactComponent.prototype, methodName, {
//       get: function () {
//         lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
//         return undefined;
//       }
//     });
//   };
//   for (var fnName in deprecatedAPIs) {
//     if (deprecatedAPIs.hasOwnProperty(fnName)) {
//       defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
//     }
//   }
// }

// /**
//  * Base class helpers for the updating state of a component.
//  */
// function ReactPureComponent(props, context, updater) {
//   // Duplicated from ReactComponent.
//   this.props = props;
//   this.context = context;
//   this.refs = emptyObject_1;
//   // We initialize the default updater but the real one gets injected by the
//   // renderer.
//   this.updater = updater || ReactNoopUpdateQueue_1;
// }

// function ComponentDummy() {}
// ComponentDummy.prototype = ReactComponent.prototype;
// var pureComponentPrototype = ReactPureComponent.prototype = new ComponentDummy();
// pureComponentPrototype.constructor = ReactPureComponent;
// // Avoid an extra prototype jump for these methods.
// index(pureComponentPrototype, ReactComponent.prototype);
// pureComponentPrototype.isPureReactComponent = true;

// function ReactAsyncComponent(props, context, updater) {
//   // Duplicated from ReactComponent.
//   this.props = props;
//   this.context = context;
//   this.refs = emptyObject_1;
//   // We initialize the default updater but the real one gets injected by the
//   // renderer.
//   this.updater = updater || ReactNoopUpdateQueue_1;
// }

// var asyncComponentPrototype = ReactAsyncComponent.prototype = new ComponentDummy();
// asyncComponentPrototype.constructor = ReactAsyncComponent;
// // Avoid an extra prototype jump for these methods.
// index(asyncComponentPrototype, ReactComponent.prototype);
// asyncComponentPrototype.unstable_isAsyncReactComponent = true;
// asyncComponentPrototype.render = function () {
//   return this.props.children;
// };

// var ReactBaseClasses = {
//   Component: ReactComponent,
//   PureComponent: ReactPureComponent,
  