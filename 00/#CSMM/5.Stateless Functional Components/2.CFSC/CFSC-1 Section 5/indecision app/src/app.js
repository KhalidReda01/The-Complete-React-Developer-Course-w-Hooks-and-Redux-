//41/3 Default Prop Values CFSC
class IndecisionApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption=this.handleAddOption.bind(this)
    this.state = {
      options:props.options
      // options:[]
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options:[]
      }
    })
  }
  handlePick() {
    this.setState(() => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    })
    
  }
  handleAddOption(option) {
    
    if (!option) {
      return 'Enter Valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return "This Option already exists"
    }

    console.log("what is this ",option )
    this.setState((prevState) => {
      return {
        
       
        options:prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = "Indecision ";
    const subtitle = "Put your Life in the hand of a computer"
    return (
         <div>
        {/* <Header title={title} subtitle={subtitle} /> */}
        {/* <Header  subtitle={subtitle} /> */}
        <Header subtitle={subtitle} />
      
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
// Focus see this is why Practice is so so important you have to make your handy dirty
// Fuck time Yes Fuck time but after that you will master that and will code from your mind
// Options.defaultProps = {
//   options:["hello1","hello2"]
// }
IndecisionApp.defaultProps = {
  options:[]
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle&&<h2>{props.subtitle }</h2> }
    </div>
    )
}
Header.defaultProps = {
  title: "Some Default"
 
}
const Action = (props) => {
  return (<div>
    
    <button onClick={props.handlePick}
    disabled={!props.hasOptions}
    >What should I do ?</button>
   </div>)
}


const Options = (props) => {
  return (
    <div>
      <p>Here are your options</p>
      
      <button onClick={props.handleDeleteOptions}>RemoveAll</button>
      {
        props.options.map((option) => <Option key={option} optionText={option }/>
  )
  }
    </div>
    
  )
}


const Option = (props) => {
  return (
    <div>
     <p>Option:{props.optionText}</p> 
    </div>
  )
}
// 

class AddOptions extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
 }
    handleAddOption(e) {
    e.preventDefault();

      const option = e.target.elements.option.value.trim();
      console.log(option)
      const error = this.props.handleAddOption(option);
      this.setState(() => {
        return {
          error: error
         
        }
      })

    
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error }</p>}  
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option </button>
        </form>
        
      </div>
    )
  }
}

// ReactDOM.render(<IndecisionApp options={ ["page 1","page 2"]}/>,document.getElementById('app'))
ReactDOM.render(<IndecisionApp />,document.getElementById('app'))