//43/5 Removing Individual Options CFSC
/**
 * 1.he replaced all the setState with the shorthand one Ok do it  
 * Now you adjusted the setState syntax not go ahead and dive into the meat of the lecture which is add or remove buttons next to each individual item 
 * thiss is actualally going to be sligtly more complex than anything we've done before 
 * So go ahead and walk through this step by step 
 *   ********* going to create a new metod that going to be responsible for taking in an option the one that you want to delete and using setState to actually remove it 
 * so now affter face this erro what I don't understand why I did exactly the same 
 * OMG It's working now after I copid now compare 
 */
class IndecisionApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption=this.handleDeleteOption.bind(this)
    // this.handleDeleteOption = this.handleDeleteOption.bind(this);// the CS

    this.state = {
      options:props.options
    }
  }
  // first one 
  handleDeleteOptions() {
    this.setState(() => ( {
        options:[]
      })
     
    )
  }
  handleDeleteOption(optionToRemove) {
// yes this part isn't woring
    // console.log("No way It's working now  ",option)
    // need to fully understand the filter method false false working and return the arry without the filtered one 
    this.setState((prevState) => ({
      // options:prevState.options.filter((option)=> optionToRemove!==option)
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
    // second one
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
        // handleDeleteOption={this.handleDeleteOption} //the CS Uncaught TypeError: props.handleDeleteOption is not a function
          
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

// This part is little confusing don't negleectCSMM from now and during all the other section
// It's so imporntant to know why you exactly did everthing and alwaya ask why
//because you will learn better this way Fuck time and deadline Time will pass any whether
// you  finish the lecture in on hour or four no one will judge  you and if they will not probelem  It's my way Prove that It's work well


/**
 * yes I want errors to show up I don't want to just finish the course I want to understand I'm alone at this so now one gonna help you after you finish the course so practice practice practice 
 * 
 *  {app.js:192 Uncaught TypeError: props.handleDeleteOption is not a function} props 
 * 
 */
const Options = (props) => {
  return (
    <div>
      <p>Here are your options</p>
      
      <button onClick={props.handleDeleteOptions}>RemoveAll</button>
      {
        props.options.map((option) => <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption} // Finally Focus again make sure that you write right don't just typing Okay I  know that you type fast but It's not a race
          //OMG handleDeleteOption={props.handleAddOption} //Deug one Yes that's why I said just be patient and never take course without you offer the source course for stupid mistakes like this Iron Focus 
          // handleDeleteOptio={props.handleDeleteOption} // cs
          
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
      console.log(option)
      const error = this.props.handleAddOption(option);
      //third one 
      this.setState(() => ({
          error: error
         
        })
         
      )

    
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