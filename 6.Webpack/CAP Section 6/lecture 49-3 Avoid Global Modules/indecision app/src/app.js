
// /**
// section 6webpack
// 48.what is webpack ?

//  */
/**
 * so even after I replaced all my code the error is still exist 
 * change src/app.js
SyntaxError: src/app.js: Unexpected token (100:9)
   98 |     const subtitle = "Put your Life in the hand of a computer"
   99 |     return (
> 100 |          <div>
      |          ^
  101 |
  102 |         <Header subtitle={subtitle} />
  103 |

 */



class IndecisionApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption=this.handleDeleteOption.bind(this)

    this.state = {
      options:props.options
    }
  }
  
 

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
           this.setState(() => ({options:options}))
      }
   

    } catch (error) {
      
    }
    
    console.log('fetching data')
  }
  
  componentDidUpdate(prevProps,prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
      console.log('saving data')
    }
    
  }
 

  
  componentWillUnmount() {
    console.log('ComponentWillUnmount')
  }
  handleDeleteOptions() {
    this.setState(() => ( {
        options:[]
      })
     
    )
  }
  handleDeleteOption(optionToRemove) {

    this.setState((prevState) => ({
      options:prevState.options.filter((option)=> optionToRemove!==option)
     
    }))
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

    console.log("what is this ", option)
    this.setState((prevState) => ({
        
       
        options:prevState.options.concat(option)
      })
      
    )
  }

  render() {
    const title = "Indecision ";
    const subtitle = "Put your Life in the hand of a computer"
    return (
         <div>
       
        <Header subtitle={subtitle} />
      
        <Action hasOptions={this.state.options.length > 0}
        
        handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
         handleDeleteOption={this.handleDeleteOption} 
          
        />
        
        <AddOptions
          handleAddOption={this.handleAddOption}
        />
    </div>)
  }
    
 
}

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
  title: "Indecision"
 
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
      {props.options.length===0&& <p>Please add an option  to get Started!</p>}
      {
        props.options.map((option) => <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption} 
         
          
        />
  )
  }
    </div>
    
  )
}


const Option = (props) => {
  return (
    <div>
      <p>Option:{props.optionText}</p> 
      <button onClick={(e) => {
        // props.handleDeleteOption(props.optionText)
        props.handleDeleteOption(props.optionText);

      }}
      >remove</button>
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
      // console.log(option)
      const error = this.props.handleAddOption(option);
      //third one 
      this.setState(() => ({
          error: error
         
        })
         
      )
      if (!error) {
        // I think if there is not error then made the input value clean 
        // e.target.elements.option.value = 'OMG I got it '
        e.target.elements.option.value = 'Add another option '
        // console.log('what is this part I dont get it '+e.target.elements.option.value)
   }
    
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

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))
