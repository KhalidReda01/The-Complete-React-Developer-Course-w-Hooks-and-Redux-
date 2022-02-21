
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
/**
 * POC3
 * localStorage.clear()
 * localStorage.getItem('options') //null
 * JSON.parse(null) //null
 * if(options){
 * }
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
   * POC2-1-1 CAP Done WVI
   *  componentDidMount() {
    console.log('fetching data')
    const json = localStorage.getItem('options');
    const otions=JSON.parse(jsoon)
    this.setState(()=>({options:options}))
  }
   browser console -> localStorage.clear()
   */
  /**
   * stupid erro shows from now where
   * Uncaught TypeError: props.options.map is not a function
   * I think it comes from the browser local storage OMG It's the same at firefox I did nothing actually I did nothing
   */
  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    this.setState(()=>({options:{options}}))
    console.log('fetching data')
  }

  /**
 * POC2-1 CAP Done  WVI
 *  componentDidUpdate(prevProps,prevState) {
    if(prevState.options.length !==this.options.length){
    const json = JSON.stringify(this.state.options)
    localStorage.setItem('options',json)
        console.log('saving data')

    }
  }
 *
 */
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      console.log(json) // this print the exactly same as this.state.options //Done
      localStorage.setItem('options', json)
     // localStorage.getItem('options') //'["thing one ","thing two ","a"]' // print the same
      console.log('saving data')
      // console.log(this.state.options.length)
      // console.log(this.state.options) // this print what you see right now
      // console.log(prevState) this print the old condition before change I think I got it now
     }
       

   
    /**
     *    console.log(prevProps)// prevProps always give me the previous array
     * {
    "options": [
        "thing one ",
        "thing two ",
        "thing three"
    ]
}
    console.log(prevState)//preState give me an array but before the change happen

     */

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
  options:["thing one ","thing two ", "thing three"]
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



/**
 * Want to see  why is this even I'm sure that I did nothing   all this happen after try and catch 
 * DEES 
 * But now now I have to finish this section and fully undertand it then come back to these Errors that just happen without I noticed a reason 
 * 
 */
 
