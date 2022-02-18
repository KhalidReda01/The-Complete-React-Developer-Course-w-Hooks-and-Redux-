/**
 * 36.Indecision State: Part I
 * I don't have internet connection but bery week one I think 10KB so I made a js files instead of waiting the unpkg to download 
 * but this doesn't work so you have to wait to dowload 
 * 
 */
class IndecisionApp extends React.Component{
  render() {
    const title = "Indecision ";
    const subtitle = "Put your Life in the hand of a computer"
    const options=['Thing One','Thing two','Thing three']
    return (
         <div>
      <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
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
  handlePick() {
    alert('handle Pick')
  }
  render() {
    console.log(this)
    return (<div>
    
       <button onClick={this.handlePick}>What should I do ?</button>
     </div>)
  }
 
}

class Options extends React.Component{
  constructor(props) {
    super(props)
    this.handleRemoveAll=this.handleRemoveAll.bind(this)
  }
  
  handleRemoveAll() {
  alert ("This remove button works now")
    console.log(this.props.options)
}
  render() {
    console.log(this.props.options[1])
    return (
      <div>
        <p>Here are your options</p>
        
        <button onClick={this.handleRemoveAll}>RemoveAll</button>
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