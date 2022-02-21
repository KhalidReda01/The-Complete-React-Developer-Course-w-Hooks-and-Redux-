
/**
 * 45.7 Saving and Loading Options Data 
 * POC 
 */
/**
 * POC 1
 * try at the console
 * localStorage.setItem('name','Khalid')// undefined
 * localStorage.getItem('name'); khalid
 * localStorage.removeItem('name') // undefined
 * localStorage.getItem('name')// null
 * localStorage.setItem('age',26)//undefined
 * localStorage.getItem('age') //"26"// local storage only works with string data 
 * // that's why we will use json data 
 * JSON.stringify
 * JSON.parse 
 * JSON.stringify({age:26})//{"age":26}
 * const json =JSON.stringify({age:23})//undefined
 * json print at the console  '{"age":23}'
 * JSON.parse(json) //Object  {age:23}  
 * JSON.parse(json).age // 23 
 * 
 */

/**
 * POC1-3 Done 
 * WVI : I take the notes Now Go ahead 
 * No need to write the notes again here the paper is more than enough no one gonna read this but you only
 * So do what ever you want this account is yours and you are learning no one gonna judge the way you are learning Okay 
 * So feel free to do what ever you want and commit what you want That's it 
 * 
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
  
  /**
   * POC2-1-1
   *  componentDidMount() {
    console.log('fetching data')
    const json = localStorage.getItem('options');
    const otions=JSON.parse(jsoon)
    this.setState(()=>({options:options}))
  }
   browser console -> localStorage.clear()
   */
  componentDidMount() {
    console.log('fetching data')
  }

  /**
 * POC2-1
 *  componentDidUpdate(prevProps,prevState) {
    if(prevState.options.length !==this.options.length){
    const json = JSON.stringify(this.state.options)
    localStorage.setItem('options',json)
        console.log('saving data')

    }
  }
 * 
 */
  
  componentDidUpdate(prevProps,prevState) {
    console.log('saving data')
  }

  componentWillUnmount() {
    console.log('ComponentWilUnmout')
    
  }
  
  handleDeleteOptions() {
   
    this.setState(() => ({options:[] } ) )
  }
  
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
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
    
    this.setState((prevState)=>({options:prevState.options.concat(option)}))
  }

  render() {
    const subtitle = "Put your Life in the hand of a computer"
    return (
         <div>
       
        <Header subtitle={subtitle}   />
        
      
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
  options:["three"]
 }


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle&&<h2>{props.subtitle}</h2>}
    </div>
    )
}
Header.defaultProps = {
  title: 'Indecision'

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
        props.options.map((option) => (

          <Option
            key={option}
            optionText={option}
            handleDeleteOption ={props.handleDeleteOption}
          />)
  )
  }
    </div>
    
  )
}

const Option = (props) => {
  return (
    <div>
      <p>Option:{props.optionText}</p> 
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  )
}


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
     
     this.setState(()=>({ error: error}))
  
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