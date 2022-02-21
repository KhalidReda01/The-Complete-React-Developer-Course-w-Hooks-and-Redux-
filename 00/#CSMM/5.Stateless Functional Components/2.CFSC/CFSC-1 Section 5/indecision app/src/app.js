//46/8 Saving and Loading Count CFSC

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
  // second lifecycel method
  //POC1
  componentDidUpdate(prevProps,prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
      console.log('saving data')
    }
    
  }
  // thid one
  // to see ths working ReactDOM.render(react.createElement('p'),document.getElementById('app'))
  //ReactDOM.render(React.createElement('p'),document.getElementById('app'));

  
  componentWillUnmount() {
    console.log('ComponentWillUnmount')
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
    // MDN array filter SAQ
    /**
     * Array.prototype.filter()
     The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     */
    this.setState((prevState) => ({
      options:prevState.options.filter((option)=> optionToRemove!==option)
      // options:prevState.options.filter((option)=> optionToRemove!==option) 
      // console.log("this is prevstate value",prevState)// 
      /**
       * it return an object 
       * an object of array I mean object conaain aray that's why you usd prevsate.option . access it I understand now
       * {
    "options": [
        "Item 1",
        "Item 2",
        "Item 3"
    ]
}
       */
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
      {props.options.length===0&& <p>Please add an option  to get Started!</p>}
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