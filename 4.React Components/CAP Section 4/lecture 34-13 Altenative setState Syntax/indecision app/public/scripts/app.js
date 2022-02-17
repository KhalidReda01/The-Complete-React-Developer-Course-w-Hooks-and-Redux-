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
      // this.setState(() => {
      //   return {
      //     count: 0
      //   };
      // });
      this.setState({
        count: 0
      });
      this.setState(function (pre) {
        return {
          // count:pre.count +1
          count: 0

          // // })
          // this.setState({
          //   count:0
        };
      });
    }
    /**
     * so what exactly is happening here 
     * the first thing that we need to understand is that our calls to this setState are asnchronouns
     * that means just  because we started this process of changing the count doesn't mean that count will be changed 
     * on the very next line is why when we try to access this dot state here we are still getting thoe old value 
     * we;ve started the process of getting the count to zero but it hasn't completed yet 
     * so we grabbed the value we'are getting the old one which was 15 we're adding 1 to it and that's why we see 16 printin to the screen
     * so why this.setState asnynchronous because ther's lot more going on behind the scenes than updating an an object
     * React does emerge the old state object with the new one but then it goes ahead and it does all that sutff we talked about where it creates
     * a virtual dom representaton of your component and it figure out what stuff need to change Then and only then is this state  brought up to speed 
     * so because react is really efficent and in batches together are set state operation s allwoing it to rerender for less often
     * we can get into really weird situation like this one where we're accessing stale and oudated data.
     * In this case we are not getting the result we expect 
     * The Solution is to always use this.setState with an update  function 
     * It does not suffer from the same problems because we  never access this data state 
     * Instead react passes in prevState and we'are going to see how that's going to affect this particular example
     * 
     *
     */

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
