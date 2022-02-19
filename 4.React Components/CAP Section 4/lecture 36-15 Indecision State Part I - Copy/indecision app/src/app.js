
class IndecisionApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption=this.handleAddOption.bind(this)
    this.state = {
      options:['Thing One','Thing two','Thing three']
    }
  }
  // handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options:[]
      }
    })
  }
  handlePick() {
    this.setState(() => {
          // thiss part from jsx-indecision.js
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    })
    
  }
  handleAddOption(option) {
    // console.log(option)
    // prevState.options.push(option) // we gonna use array concat method 
    this.setState((prevState) => {
      return {
        Options:prevState.options.concat([option])
      }
    })
  }

  render() {
    const title = "Indecision ";
    const subtitle = "Put your Life in the hand of a computer"
    return (
         <div>
        <Header title={title} subtitle={subtitle} />
      
        <Action hasOptions={this.state.options.length > 0}
        
        handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        
        <AddOptions
          handleAddOption={this.handleAddOption}
        />
    </div>)
  }
    
 
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle }</h2>
      </div>
      )
}
}
class Action extends React.Component{
 
  render() {
    console.log(this)
    return (<div>
    
      <button onClick={this.props.handlePick}
      disabled={!this.props.hasOptions}
      >What should I do ?</button>
     </div>)
  }
 
}

class Options extends React.Component{
 
  render() {
    console.log(this.props.options[1])
    return (
      <div>
        <p>Here are your options</p>
        
        <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option }/>
    )
    }
      </div>
      
    )
  }
}

class Option extends React.Component{
  render() {
  
    
    return (
      <div>
       <p>Option:{this.props.optionText}</p> 
      </div>
    )
  }
}

class AddOptions extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddOption=this.handleAddOption.bind(this)
 }
    handleAddOption(e) {
    e.preventDefault();

      const option = e.target.elements.option.value.trim();
      // console.log(option)

    if (option) {
      this.props.handleAddOption(option);
    }
  }
  render() {
    return (
      <div>        
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option </button>
        </form>
        
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))