
/**
 * 40.2 Stateless Functional Component
 */
class IndecisionApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption=this.handleAddOption.bind(this)
    this.state = {
    
      options:[]
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
// Challenge Solve convert the Header Class componet to a Functionl Component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle }</h2>
    </div>
    )
}
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle }</h2>
//       </div>
//       )
// }
// }
const Action = (props) => {
  return (<div>
    
    <button onClick={props.handlePick}
    disabled={!props.hasOptions}
    >What should I do ?</button>
   </div>)
}
/**
 * Challenge Time 
 * conver all three other class componet 
 * Option
 * Options 
 * Header 
 */
// class Action extends React.Component{
 
//   render() {
//     console.log(this)
//     return (<div>
    
//       <button onClick={this.props.handlePick}
//       disabled={!this.props.hasOptions}
//       >What should I do ?</button>
//      </div>)
//   }
 
// }


// Challenge time Convert Option class compoent to a functioal one 
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
// class Options extends React.Component{
 
//   render() {
//     console.log(this.props.options[1])
//     return (
//       <div>
//         <p>Here are your options</p>
        
//         <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option }/>
//     )
//     }
//       </div>
      
//     )
//   }
// }


// and finally this is the last part of the Challenge convert the option class component to a functional one
const Option = (props) => {
  return (
    <div>
     <p>Option:{props.optionText}</p> 
    </div>
  )
}
// class Option extends React.Component{
//   render() {
  
    
//     return (
//       <div>
//        <p>Option:{this.props.optionText}</p> 
//       </div>
//     )
//   }
// }

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

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name }</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }
// ReactDOM.render(<User name="khalid" age="23"/>,document.getElementById('app'))
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))