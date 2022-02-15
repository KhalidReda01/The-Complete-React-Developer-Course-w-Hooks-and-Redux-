/**
 * 32/11 Adding state to Counter App : part I
 * 
 */
class Counter extends React.Component{
  //I missed that part becaue it's working well without it the method  binding lecture CSMM
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleAddOne.bind(this);
    this.handlereset = this.handleReset.bind(this);
  }
  handleAddOne() {
    console.log('hanldeAddOne')
  }
  handleMinusOne() {
    console.log("handleMinusOne")
  }
  handleReset() {
    console.log("handleReset")
  }
  render() {
    return (
      <div>
        <h1>Count:</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
    </div>
  )
}
}
// Create three methods : handleAddOne ,handleMinusOne,handleReset 
// use console.log to print method name

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