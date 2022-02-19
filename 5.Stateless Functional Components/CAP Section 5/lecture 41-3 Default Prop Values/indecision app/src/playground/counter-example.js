/**
 * Did what you just did for indecision app for the counter app 
 * so you'are going to allow counter to take a prop count if that prop exists
 * you are going to use its value as the default state value if it doesn't exist you are going to set up a default value 
 * set up default value to zero
 * so if the prop is passed in great we'll use that one as the starting state
 * if it's not we'll default to 0 and we 'll have the exact same functionailty
 */
// count -setup default prop value to 0 

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      // props.count instead of 0
      count: props.count
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
   
    this.setState({
      count: 0
    });
    this.setState((pre) => {
      return {
        // count:pre.count +1
        count:0
      }
      
    
    })
   }

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

// solution 1 
Counter.defaultProps = {
  count:0
}
ReactDOM.render(<Counter />, document.getElementById('app'));
// Solution 2
// ReactDOM.render(<Counter count={20} />, document.getElementById('app'));