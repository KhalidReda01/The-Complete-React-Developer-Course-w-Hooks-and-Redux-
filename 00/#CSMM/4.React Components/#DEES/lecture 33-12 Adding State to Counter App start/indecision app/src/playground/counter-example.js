// Debug Error Explore Solution  I need to understand this
/**
 * Uncaught TypeError: Cannot read properties of undefined (reading 'setState')
    at handleReset (app.js:50:12)
    at HTMLUnknownElement.callCallback  
    this is the same Erro but wher is the Erro setState undefined 
 */
/*
// this is the only one that I didn't replace the and erro I think is here

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handlereset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  */
  // class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.handleAddOne = this.handleAddOne.bind(this);
  //     this.handleMinusOne = this.handleMinusOne.bind(this);
  //     this.handleReset = this.handleReset.bind(this);
  //     this.state = {
  //       count: 0
  //     };
  //   }

    /// OMG Now It's working so where is the wrong with other one
    // NOw I understand why It wasn't working properly Focus more at naming variables now try again 
    // now the decrement and increment work so well but the rest button is freezing I mean now respnond 
    // OMG thw wrong letter at 
    // this.handleMinusOne = this.handle{Minus} this not add okay One.bind(this);//
   // this.handlereset = this.handleReset.bind(this); // here the wrong with the r letter
      /*
      replace this part with the SC
      handleAddOne() {
        this.setState((prevState) => {
          return {
            count: prevState.count + 1
          }
        })
      }
      handleMinusOne() {
        this.setState((prevState) => {
          return {
            count:prevState.count -1
          }
        })
      }
      handleReset() {
        this.setState((prevState) => {
          return {
            count:0
          }
        })
      }*/

      // even I replaced this part that is new and still the same problem so I think the prolom 
      //SyntaxError: src/playground/counter-example.js: Unexpected token, expected ; (18:19)
      class Counter extends React.Component{
        constructor(props) {
          super(props);
          this.handleAddOne = this.handleAddOne.bind(this);
          this.handleMinusOne = this.handleMinusOne.bind(this);
          this.handleReset = this.handleReset.bind(this);
          this.state = {
            count: 0
          }
        }
      handleAddOne() {
        this.setState((prevState) => {
          return {
            count: prevState.count + 1
          };
        });
      }
      handleMinusOne() {
        this.setState((why) => {
          return {
            count: why.count - 1
          };
        });
      }
      handleReset() {
        this.setState(() => {
          return {
            count: 0
          };
        });
      }
    
  /*
  so replace this part too
  render() {
    return (
      <div>
        <h1>Count:{this.state.count }</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
    </div>
  )
}
}*/
render() {
  return (
    <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>reset</button>
    </div>
  );
}
}

ReactDOM.render(<Counter/>,document.getElementById('app'))
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