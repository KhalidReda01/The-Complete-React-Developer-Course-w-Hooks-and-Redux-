// use this as a refernce I made it clean now
// This is CFSC is so so so important dont' skip it again 
// 41 Default Prop Values 
 class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
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
Counter.defaultProps = {
  count:0
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// ReactDOM.render(<Counter count={0} />, document.getElementById('app'));