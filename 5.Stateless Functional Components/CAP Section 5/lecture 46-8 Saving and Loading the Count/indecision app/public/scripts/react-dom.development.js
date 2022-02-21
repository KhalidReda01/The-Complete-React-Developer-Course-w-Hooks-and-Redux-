// /** @license React v16.0.0
//  * react-dom.development.js
//  *
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

// (function (global, factory) {
// 	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
// 	typeof define === 'function' && define.amd ? define(['react'], factory) :
// 	(global.ReactDOM = factory(global.React));
// }(this, (function (require$$0) { 'use strict';

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
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @providesModule checkReact
//  * 
//  */




// !require$$0 ? invariant_1(false, 'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.') : void 0;

// /**
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @providesModule DOMNamespaces
//  */

// var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
// var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
// var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

// var Namespaces = {
//   html: HTML_NAMESPACE,
//   mathml: MATH_NAMESPACE,
//   svg: SVG_NAMESPACE
// };

// // Assumes there is no parent namespace.
// function getIntrinsicNamespace(type) {
//   switch (type) {
//     case 'svg':
//       return SVG_NAMESPACE;
//     case 'math':
//       return MATH_NAMESPACE;
//     default:
//       return HTML_NAMESPACE;
//   }
// }

// function getChildNamespace$1(parentNamespace, type) {
//   if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
//     // No (or default) parent namespace: potential entry point.
//     return getIntrinsicNamespace(type);
//   }
//   if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
//     // We're leaving SVG.
//     return HTML_NAMESPACE;
//   }
//   // By default, pass namespace below.
//   return parentNamespace;
// }

// var Namespaces_1 = Namespaces;
// var getIntrinsicNamespace_1 = getIntrinsicNamespace;
// var getChildNamespace_1 = getChildNamespace$1;

// var DOMNamespaces = {
// 	Namespaces: Namespaces_1,
// 	getIntrinsicNamespace: getIntrinsicNamespace_1,
// 	getChildNamespace: getChildNamespace_1
// };

// /**
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  */

// var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// /**
//  * Simple, lightweight module assisting with the detection and context of
//  * Worker. Helps avoid circular dependencies and allows code to reason about
//  * whether or not they are in a Worker, even if they never include the main
//  * `ReactWorker` dependency.
//  */
// var ExecutionEnvironment = {

//   canUseDOM: canUseDOM,

//   canUseWorkers: typeof Worker !== 'undefined',

//   canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

//   canUseViewport: canUseDOM && !!window.screen,

//   isInWorker: !canUseDOM // For now, this is true - might change in the future.

// };

// var ExecutionEnvironment_1 = ExecutionEnvironment;

// var ReactInternals = require$$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// var assign = ReactInternals.assign;

// /**
//  * Injectable ordering of event plugins.
//  */
// var eventPluginOrder = null;

// /**
//  * Injectable mapping from names to event plugin modules.
//  */
// var namesToPlugins = {};

// /**
//  * Recomputes the plugin list using the injected plugins and plugin ordering.
//  *
//  * @private
//  */
// function recomputePluginOrdering() {
//   if (!eventPluginOrder) {
//     // Wait until an `eventPluginOrder` is injected.
//     return;
//   }
//   for (var pluginName in namesToPlugins) {
//     var pluginModule = namesToPlugins[pluginName];
//     var pluginIndex = eventPluginOrder.indexOf(pluginName);
//     !(pluginIndex > -1) ? invariant_1(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : void 0;
//     if (EventPluginRegistry.plugins[pluginIndex]) {
//       continue;
//     }
//     !pluginModule.extractEvents ? invariant_1(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : void 0;
//     EventPluginRegistry.plugins[pluginIndex] = pluginModule;
//     var publishedEvents = pluginModule.eventTypes;
//     for (var eventName in publishedEvents) {
//       !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? invariant_1(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : void 0;
//     }
//   }
// }

// /**
//  * Publishes an event so that it can be dispatched by the supplied plugin.
//  *
//  * @param {object} dispatchConfig Dispatch configuration for the event.
//  * @param {object} PluginModule Plugin publishing the event.
//  * @return {boolean} True if the event was successfully published.
//  * @private
//  */
// function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
//   !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? invariant_1(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : void 0;
//   EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

//   var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
//   if (phasedRegistrationNames) {
//     for (var phaseName in phasedRegistrationNames) {
//       if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
//         var phasedRegistrationName = phasedRegistrationNames[phaseName];
//         publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
//       }
//     }
//     return true;
//   } else if (dispatchConfig.registrationName) {
//     publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
//     return true;
//   }
//   return false;
// }

// /**
//  * Publishes a registration name that is used to identify dispatched events.
//  *
//  * @param {string} registrationName Registration name to add.
//  * @param {object} PluginModule Plugin publishing the event.
//  * @private
//  */
// function publishRegistrationName(registrationName, pluginModule, eventName) {
//   !!EventPluginRegistry.registrationNameModules[registrationName] ? invariant_1(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : void 0;
//   EventPluginRegistry.registrationNameModules[registrationName] = pluginModule;
//   EventPluginRegistry.registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

//   {
//     var lowerCasedName = registrationName.toLowerCase();
//     EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;

//     if (registrationName === 'onDoubleClick') {
//       EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
//     }
//   }
// }

// /**
//  * Registers plugins so that they can extract and dispatch events.
//  *
//  * @see {EventPluginHub}
//  */
// var EventPluginRegistry = {
//   /**
//    * Ordered list of injected plugins.
//    */
//   plugins: [],

//   /**
//    * Mapping from event name to dispatch config
//    */
//   eventNameDispatchConfigs: {},

//   /**
//    * Mapping from registration name to plugin module
//    */
//   registrationNameModules: {},

//   /**
//    * Mapping from registration name to event name
//    */
//   registrationNameDependencies: {},

//   /**
//    * Mapping from lowercase registration names to the properly cased version,
//    * used to warn in the case of missing event handlers. Available
//    * only in true.
//    * @type {Object}
//    */
//   possibleRegistrationNames: {},
//   // Trust the developer to only use possibleRegistrationNames in true

//   /**
//    * Injects an ordering of plugins (by plugin name). This allows the ordering
//    * to be decoupled from injection of the actual plugins so that ordering is
//    * always deterministic regardless of packaging, on-the-fly injection, etc.
//    *
//    * @param {array} InjectedEventPluginOrder
//    * @internal
//    * @see {EventPluginHub.injection.injectEventPluginOrder}
//    */
//   injectEventPluginOrder: function (injectedEventPluginOrder) {
//     !!eventPluginOrder ? invariant_1(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : void 0;
//     // Clone the ordering so it cannot be dynamically mutated.
//     eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
//     recomputePluginOrdering();
//   },

//   /**
//    * Injects plugins to be used by `EventPluginHub`. The plugin names must be
//    * in the ordering injected by `injectEventPluginOrder`.
//    *
//    * Plugins can be injected as part of page initialization or on-the-fly.
//    *
//    * @param {object} injectedNamesToPlugins Map from names to plugin modules.
//    * @internal
//    * @see {EventPluginHub.injection.injectEventPluginsByName}
//    */
//   injectEventPluginsByName: function (injectedNamesToPlugins) {
//     var isOrderingDirty = false;
//     for (var pluginName in injectedNamesToPlugins) {
//       if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
//         continue;
//       }
//       var pluginModule = injectedNamesToPlugins[pluginName];
//       if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
//         !!namesToPlugins[pluginName] ? invariant_1(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : void 0;
//         namesToPlugins[pluginName] = pluginModule;
//         isOrderingDirty = true;
//       }
//     }
//     if (isOrderingDirty) {
//       recomputePluginOrdering();
//     }
//   }
// };

// var EventPluginRegistry_1 = EventPluginRegistry;

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
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @typechecks
//  */



// /**
//  * Upstream version of event listener. Does not take into account specific
//  * nature of platform.
//  */
// var EventListener = {
//   /**
//    * Listen to DOM events during the bubble phase.
//    *
//    * @param {DOMEventTarget} target DOM element to register listener on.
//    * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
//    * @param {function} callback Callback function.
//    * @return {object} Object with a `remove` method.
//    */
//   listen: function listen(target, eventType, callback) {
//     if (target.addEventListener) {
//       target.addEventListener(eventType, callback, false);
//       return {
//         remove: function remove() {
//           target.removeEventListener(eventType, callback, false);
//         }
//       };
//     } else if (target.attachEvent) {
//       target.attachEvent('on' + eventType, callback);
//       return {
//         remove: function remove() {
//           target.detachEvent('on' + eventType, callback);
//         }
//       };
//     }
//   },

//   /**
//    * Listen to DOM events during the capture phase.
//    *
//    * @param {DOMEventTarget} target DOM element to register listener on.
//    * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
//    * @param {function} callback Callback function.
//    * @return {object} Object with a `remove` method.
//    */
//   capture: function capture(target, eventType, callback) {
//     if (target.addEventListener) {
//       target.addEventListener(eventType, callback, true);
//       return {
//         remove: function remove() {
//           target.removeEventListener(eventType, callback, true);
//         }
//       };
//     } else {
//       {
//         console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
//       }
//       return {
//         remove: emptyFunction_1
//       };
//     }
//   },

//   registerDefault: function registerDefault() {}
// };

// var EventListener_1 = EventListener;

// // These attributes should be all lowercase to allow for
// // case insensitive checks
// var RESERVED_PROPS = {
//   children: true,
//   dangerouslySetInnerHTML: true,
//   autoFocus: true,
//   defaultValue: true,
//   defaultChecked: true,
//   innerHTML: true,
//   suppressContentEditableWarning: true,
//   style: true
// };

// function checkMask(value, bitmask) {
//   return (value & bitmask) === bitmask;
// }

// var DOMPropertyInjection = {
//   /**
//    * Mapping from normalized, camelcased property names to a configuration that
//    * specifies how the associated DOM property should be accessed or rendered.
//    */
//   MUST_USE_PROPERTY: 0x1,
//   HAS_BOOLEAN_VALUE: 0x4,
//   HAS_NUMERIC_VALUE: 0x8,
//   HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
//   HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
//   HAS_STRING_BOOLEAN_VALUE: 0x40,

//   /**
//    * Inject some specialized knowledge about the DOM. This takes a config object
//    * with the following properties:
//    *
//    * Properties: object mapping DOM property name to one of the
//    * DOMPropertyInjection constants or null. If your attribute isn't in here,
//    * it won't get written to the DOM.
//    *
//    * DOMAttributeNames: object mapping React attribute name to the DOM
//    * attribute name. Attribute names not specified use the **lowercase**
//    * normalized name.
//    *
//    * DOMAttributeNamespaces: object mapping React attribute name to the DOM
//    * attribute namespace URL. (Attribute names not specified use no namespace.)
//    *
//    * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
//    * Property names not specified use the normalized name.
//    *
//    * DOMMutationMethods: Properties that require special mutation methods. If
//    * `value` is undefined, the mutation method should unset the property.
//    *
//    * @param {object} domPropertyConfig the config as described above.
//    */
//   injectDOMPropertyConfig: function (domPropertyConfig) {
//     var Injection = DOMPropertyInjection;
//     var Properties = domPropertyConfig.Properties || {};
//     var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
//     var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
//     var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

//     for (var propName in Properties) {
//       !!DOMProperty.properties.hasOwnProperty(propName) ? invariant_1(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : void 0;

//       var lowerCased = propName.toLowerCase();
//       var propConfig = Properties[propName];

//       var propertyInfo = {
//         attributeName: lowerCased,
//         attributeNamespace: null,
//         propertyName: propName,
//         mutationMethod: null,

//         mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
//         hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
//         hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
//         hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
//         hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE),
//         hasStringBooleanValue: checkMask(propConfig, Injection.HAS_STRING_BOOLEAN_VALUE)
//       };
//       !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? invariant_1(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : void 0;

//       if (DOMAttributeNames.hasOwnProperty(propName)) {
//         var attributeName = DOMAttributeNames[propName];

//         propertyInfo.attributeName = attributeName;
//       }

//       if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
//         propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
//       }

//       if (DOMMutationMethods.hasOwnProperty(propName)) {
//         propertyInfo.mutationMethod = DOMMutationMethods[propName];
//       }

//       // Downcase references to whitelist properties to check for membership
//       // without case-sensitivity. This allows the whitelist to pick up
//       // `allowfullscreen`, which should be written using the property configuration
//       // for `allowFullscreen`
//       DOMProperty.properties[propName] = propertyInfo;
//     }
//   }
// };

// /* eslint-disable max-len */
// var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
// /* eslint-enable max-len */

// /**
//  * DOMProperty exports lookup objects that can be used like functions:
//  *
//  *   > DOMProperty.isValid['id']
//  *   true
//  *   > DOMProperty.isValid['foobar']
//  *   undefined
//  *
//  * Although this may be confusing, it performs better in general.
//  *
//  * @see http://jsperf.com/key-exists
//  * @see http://jsperf.com/key-missing
//  */
// var DOMProperty = {
//   ID_ATTRIBUTE_NAME: 'data-reactid',
//   ROOT_ATTRIBUTE_NAME: 'data-reactroot',

//   ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
//   ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

//   /**
//    * Map from property "standard name" to an object with info about how to set
//    * the property in the DOM. Each object contains:
//    *
//    * attributeName:
//    *   Used when rendering markup or with `*Attribute()`.
//    * attributeNamespace
//    * propertyName:
//    *   Used on DOM node instances. (This includes properties that mutate due to
//    *   external factors.)
//    * mutationMethod:
//    *   If non-null, used instead of the property or `setAttribute()` after
//    *   initial render.
//    * mustUseProperty:
//    *   Whether the property must be accessed and mutated as an object property.
//    * hasBooleanValue:
//    *   Whether the property should be removed when set to a falsey value.
//    * hasNumericValue:
//    *   Whether the property must be numeric or parse as a numeric and should be
//    *   removed when set to a falsey value.
//    * hasPositiveNumericValue:
//    *   Whether the property must be positive numeric or parse as a positive
//    *   numeric and should be removed when set to a falsey value.
//    * hasOverloadedBooleanValue:
//    *   Whether the property can be used as a flag as well as with a value.
//    *   Removed when strictly equal to false; present without a value when
//    *   strictly equal to true; present with a value otherwise.
//    */
//   properties: {},

//   /**
//    * Checks whether a property name is a writeable attribute.
//    * @method
//    */
//   shouldSetAttribute: function (name, value) {
//     if (DOMProperty.isReservedProp(name)) {
//       return false;
//     }
//     if ((name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
//       return false;
//     }
//     if (value === null) {
//       return true;
//     }
//     switch (typeof value) {
//       case 'boolean':
//         return DOMProperty.shouldAttributeAcceptBooleanValue(name);
//       case 'undefined':
//       case 'number':
//       case 'string':
//       case 'object':
//         return true;
//       default:
//         // function, symbol
//         return false;
//     }
//   },

//   getPropertyInfo: function (name) {
//     return DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
//   },
//   shouldAttributeAcceptBooleanValue: function (name) {
//     if (DOMProperty.isReservedProp(name)) {
//       return true;
//     }
//     var propertyInfo = DOMProperty.getPropertyInfo(name);
//     if (propertyInfo) {
//       return propertyInfo.hasBooleanValue || propertyInfo.hasStringBooleanValue || propertyInfo.hasOverloadedBooleanValue;
//     }
//     var prefix = name.toLowerCase().slice(0, 5);
//     return prefix === 'data-' || prefix === 'aria-';
//   },


//   /**
//    * Checks to see if a property name is within the list of properties
//    * reserved for internal React operations. These properties should
//    * not be set on an HTML element.
//    *
//    * @private
//    * @param {string} name
//    * @return {boolean} If the name is within reserved props
//    */
//   isReservedProp: function (name) {
//     return RESERVED_PROPS.hasOwnProperty(name);
//   },


//   injection: DOMPropertyInjection
// };

// var DOMProperty_1 = DOMProperty;

// /**
//  * Copyright (c) 2015-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @providesModule ReactDOMComponentFlags
//  */

// var ReactDOMComponentFlags = {
//   hasCachedChildNodes: 1 << 0
// };

// var ReactDOMComponentFlags_1 = ReactDOMComponentFlags;

// /**
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @providesModule ReactTypeOfWork
//  * 
//  */

// var ReactTypeOfWork = {
//   IndeterminateComponent: 0, // Before we know whether it is functional or class
//   FunctionalComponent: 1,
//   ClassComponent: 2,
//   HostRoot: 3, // Root of a host tree. Could be nested inside another node.
//   HostPortal: 4, // A subtree. Could be an entry point to a different renderer.
//   HostComponent: 5,
//   HostText: 6,
//   CoroutineComponent: 7,
//   CoroutineHandlerPhase: 8,
//   YieldComponent: 9,
//   Fragment: 10
// };

// /**
//  * Copyright (c) 2013-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @providesModule HTMLNodeType
//  */

// /**
//  * HTML nodeType values that represent the type of the node
//  */

// var HTMLNodeType = {
//   ELEMENT_NODE: 1,
//   TEXT_NODE: 3,
//   COMMENT_NODE: 8,
//   DOCUMENT_NODE: 9,
//   DOCUMENT_FRAGMENT_NODE: 11
// };

// var HTMLNodeType_1 = HTMLNodeType;

// var HostComponent = ReactTypeOfWork.HostComponent;
// var HostText = ReactTypeOfWork.HostText;

// var ELEMENT_NODE$1 = HTMLNodeType_1.ELEMENT_NODE;
// var COMMENT_NODE$1 = HTMLNodeType_1.COMMENT_NODE;



// var ATTR_NAME = DOMProperty_1.ID_ATTRIBUTE_NAME;
// var Flags = ReactDOMComponentFlags_1;

// var randomKey = Math.random().toString(36).slice(2);

// var internalInstanceKey = '__reactInternalInstance$' + randomKey;

// var internalEventHandlersKey = '__reactEventHandlers$' + randomKey;

// /**
//  * Check if a given node should be cached.
//  */
// function shouldPrecacheNode(node, nodeID) {
//   return node.nodeType === ELEMENT_NODE$1 && node.getAttribute(ATTR_NAME) === '' + nodeID || node.nodeType === COMMENT_NODE$1 && node.nodeValue === ' react-text: ' + nodeID + ' ' || node.nodeType === COMMENT_NODE$1 && node.nodeValue === ' react-empty: ' + nodeID + ' ';
// }

// /**
//  * Drill down (through composites and empty components) until we get a host or
//  * host text component.
//  *
//  * This is pretty polymorphic but unavoidable with the current structure we have
//  * for `_renderedChildren`.
//  */
// function getRenderedHostOrTextFromComponent(component) {
//   var rendered;
//   while (rendered = component._renderedComponent) {
//     component = rendered;
//   }
//   return component;
// }

// /**
//  * Populate `_hostNode` on the rendered host/text component with the given
//  * DOM node. The passed `inst` can be a composite.
//  */
// function precacheNode(inst, node) {
//   var hostInst = getRenderedHostOrTextFromComponent(inst);
//   hostInst._hostNode = node;
//   node[internalInstanceKey] = hostInst;
// }

// function precacheFiberNode$1(hostInst, node) {
//   node[internalInstanceKey] = hostInst;
// }

// function uncacheNode(inst) {
//   var node = inst._hostNode;
//   if (node) {
//     delete node[internalInstanceKey];
//     inst._hostNode = null;
//   }
// }

// /**
//  * Populate `_hostNode` on each 