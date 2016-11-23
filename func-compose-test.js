var chalk = require('chalk')

// 'use strict';

// exports.__esModule = true;

// var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// exports["default"] = applyMiddleware;

// var _compose = require('./compose');

// var _compose2 = _interopRequireDefault(_compose);

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
// function applyMiddleware() {
//   for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
//     middlewares[_key] = arguments[_key];
//   }

//   return function (createStore) {
//     return function (reducer, initialState, enhancer) {
//       var store = createStore(reducer, initialState, enhancer);
//       var _dispatch = store.dispatch;
//       var chain = [];

//       var middlewareAPI = {
//         getState: store.getState,
//         dispatch: function dispatch(action) {
//           return _dispatch(action);
//         }
//       };
//       chain = middlewares.map(function (middleware) {
//         return middleware(middlewareAPI);
//       });
//       _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

//       return _extends({}, store, {
//         dispatch: _dispatch
//       });
//     };
//   };
// }

function compose() {  
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }  

  console.log(arguments)

  return function () {
    if (funcs.length === 0) {
      return arguments.length <= 0 ? undefined : arguments[0];
    }

    var last = funcs[funcs.length - 1];
    var rest = funcs.slice(0, -1);

    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined));
  };
}

var sum = 0
var tmp = 1

function func1(tmp){
  sum ++
}

function func2(){
  sum += 2
}

function func3(){
  sum += 3
  // console.log(arguments)
}

var funcAll = compose(func1, func2, func3)

// func1(){
//   func2(){
//     func3(){
//       // ...
//     }
//   }
// }

funcAll()
console.log(chalk.green(sum))




