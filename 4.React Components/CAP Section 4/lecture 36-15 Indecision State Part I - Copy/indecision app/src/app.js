/**
 * 36.Indecision State: Part I
 * I don't have internet connection but bery week one I think 10KB so I made a js files instead of waiting the unpkg to download 
 * but this doesn't work so you have to wait to dowload Okay now It's downloaded you can contiue study the section this lecture
 * 
 * 
 */
/**
 * WVI Write Video Information You really need that  It make every thing clear more effort and time I know but this way  make it stick and you understand better this way even the instructor
 * didn't say that but You have to do that don't skip that Okay
 * 
 */
/***
 * 5^
 * 1

Now that we have some real world experience using component state let's go ahead and integrate it into the indecision app.

There's only a few videos left for this section and we're going to spend those finishing off the main functionality for the component version of indecision.
make #WVI after you finish #WTV and #CAP after that try to WVI




Typing Error 

 * 
 */
class IndecisionApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick=this.handlePick.bind(this)
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
// handlePick - pass down to Action and setup OnClick - bind here
  // randomly pick and option alert it 
  render() {
    const title = "Indecision ";
    const subtitle = "Put your Life in the hand of a computer"
    // const options=['Thing One','Thing two','Thing three']
    return (
         <div>
        <Header title={title} subtitle={subtitle} />
        {/* Focus Typing Errror is the hardest 
        <Action hasOptions={this.state.lenght>0}/> */}
        <Action hasOptions={this.state.options.length > 0}
        
        handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        
      <AddOptions />
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
  // wd dont' need here now
  // handlePick() {
  //   alert('handle Pick')
  // }
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
  // constructor(props) {
  //   super(props)
  //   this.handleRemoveAll=this.handleRemoveAll.bind(this)
  // }
  
//   handleRemoveAll() {
//   alert ("This remove button works now")
//     console.log(this.props.options)
// }
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
 
    handleAddOption(e) {
    e.preventDefault();

      const option = e.target.elements.option.value.trim();
      console.log(option)

    if (option) {
      alert(option);
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