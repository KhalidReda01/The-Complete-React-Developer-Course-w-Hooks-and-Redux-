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
class Counter extends React.Component{
  //I missed that part becaue it's working well without it the method  binding lecture CSMM
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleAddOne.bind(this);
    this.handlereset = this.handleReset.bind(this);
    this.state = {
      count: 10,
      //1-* name:'Khalid'
    }
  }
  handleAddOne() {
  
    this.setState((prevState) =>
    {
      // console.log(prevState)
      return {
        count: prevState.count + 1// compare with the old way vanialla js 
      }
    })
  }
  handleMinusOne() {
  
    this.setState((prevState) =>
    {
      // console.log(prevState)
      return {
        count: prevState.count - 1// compare with the old way vanialla js 
      }
    })
  }
  // Challenge Time
  /**
   * my challenge for this video is to wire up handleMinusOne we're not going to worry about handle reset
   * the challenge is to call this setstate and you are goin to decrement the count by 1   
   */
  // handleMinusOne() {
  //   // call this.setState decrement the count by 1
  //   // console.log("handleMinusOne")
  // this is hidden error here 
  //   this.setState((prevState) => {
  //     console.log(prevState.count)
  //     return {
        
  //     count:'test '
  //     }
      
  //   })
      
  // }
  handleReset() {
    console.log("handleReset")
  }
  render() {
    return (
      <div>
        {/*e-1 {this.state.name} */}
        <h1>Count:{this.state.count }</h1>
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