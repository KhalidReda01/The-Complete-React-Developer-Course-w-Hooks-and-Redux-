/**
 * 32/11 Adding state to Counter App : part I
 * 
 */
class Counter  extends React.Component{
  render() {
    return (
      <div>
        <h1>Count:</h1>
        <button>+1</button>
        <button>-1</button>
        <button>reset</button>
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