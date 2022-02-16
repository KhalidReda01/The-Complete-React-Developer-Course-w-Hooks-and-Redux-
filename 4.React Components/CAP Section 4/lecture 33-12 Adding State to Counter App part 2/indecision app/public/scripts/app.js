'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 33/13 Adding state to Counter App : part II
 * files.mead.io/2H3soy31222k
 * 
 */

// this.state.count = this.state.count + 1
// console.log(this.state)
/**
 * when we are insdide our updater function this function right here we actally have access
 * to the current state values via the first argument which is commoly called previous state 
 * 
 * 
 * 1-if you have multiple pieces of state on your component you don't have to provide them all you only provide the one that you gonna change 
 * ** so when we're defining the updates in our st state updater function we're not overriding the state
 */
// class Counter extends React.Component{
//   //I missed that part becaue it's working well without it the method  binding lecture CSMM
//   constructor(props) {
//     super(props);
//     this.handleAddOne = this.handleAddOne.bind(this);
//     this.handleMinusOne = this.handleAddOne.bind(this);
//     this.handlereset = this.handleReset.bind(this);
//     this.state = {
//       count:0
//     }
//   }
//   handleAddOne() {

//     this.setState((prevState) =>
//     {
//       // console.log(prevState)
//       return {
//         count: prevState.count + 1// compare with the old way vanialla js 
//       }
//     })
//   }

/**
 * Now test with Souce code to see where is the problem exactly 
 * OMG what is this even with the  souce code all the button is increment and reset is not working 
 * hahah hhah What is going on I know that you will laugh later 
 * Now try to use the full one 
 *
 */
//  handleAddOne() {
//   this.setState((prevState) => {
//     return {
//       count: prevState.count + 1
//     };
//   });
// }
// handleMinusOne() {
//   this.setState((prevState) => {
//     return {
//       count: prevState.count - 1
//     };
//   });
// }
// handleReset() {
//   this.setState(() => {
//     return {
//       count: 0
//     };
//   });
// }
// handleMinusOne() {

//   this.setState((prevState) =>
//   {
//     return {
//       count: prevState.count +5// compare with the old way vanialla js 
//     }
//   })
// }
// // Challenge Time
// /**
//  * my challenge for this video is to wire up handleMinusOne we're not going to worry about handle reset
//  * the challenge is to call this setstate and you are goin to decrement the count by 1   
//  */
// // handleMinusOne() {
// //   // call this.setState decrement the count by 1
// //   // console.log("handleMinusOne")
// // this is hidden error here 
// //   this.setState((prevState) => {
// //     console.log(prevState.count)
// //     return {

// //     count:'test '
// //     }

// //   })

// // }
// handleReset() {
//   this.setState(() => {
//     return {
//       count :0
//     }
//   })
// }
//   render() {
//     return (
//       <div>
//         {/*e-1 {this.state.name} */}
//         <h1>Count:{this.state.count }</h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>reset</button>
//     </div>
//   )
// }
// }
// Create three methods : handleAddOne ,handleMinusOne,handleReset 
// use console.log to print method name

// ReactDOM.render(<Counter/>,document.getElementById('app'))
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log("addOne",count)
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log("minusOne")
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log('reset')
// }

// const appRoot = document.getElementById('app')


// // rerender cout to the screen
// const renderCounterApp = () => {
//   const templateTwo = (
//   <div>
//     <h1>Count:{count}</h1>
//     <button onClick={addOne} className="button">+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//    </div>
//   );
//   ReactDOM.render(templateTwo , appRoot)
// }
// renderCounterApp();


/**
 * Now test the code of the Instructor to really see where is the bug
 * OMG this part Works 
 */
var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
