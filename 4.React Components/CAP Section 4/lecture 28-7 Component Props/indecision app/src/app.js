// 27-6 Nesting component
class IndecisionApp extends React.Component{
  render() {
    const title = "Indecision ";
    const subtitle = "Put your Life in the hand of a computer"
    const options=['Thing One','Thing two','Thing three']
    return (
         <div>
      <Header title={title} subtitle={subtitle} />
        <Action />
        <Options option={options }/>
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
  render() {
    console.log(this)
    return (<div>
    
       <button>What should I do ?</button>
     </div>)
  }
 
}
// Challenge time
// setup options prop for options component
// Render the lenght of array 


class Options extends React.Component{
  render() {
    console.log(this.props.option[1])
    return (
      <div>
        <p>Here are your options</p>
        <p></p>
        <Option option={this.props.option }/>
      </div>
      
    )
  }
}
// Challenge time redner a new compent that render insdie of options
//Option -> option Compoent here 
class Option extends React.Component{
  render() {
    return (
      <div>
        <p>Option Component Here </p> 
        <p>Your Option length is {this.props.option.length }</p>
        <p>{this.props.option[0] }</p>
        <p>{this.props.option[1] }</p>
        <p>{this.props.option[2] }</p>
      </div>
    )
  }
}
class AddOptions extends React.Component{
  render() {
    return (
      <div>
        <p>Add option Component Here</p>
         {/* <ol>
          <li>option 1</li>
          <li>option 2</li>
        </ol> */}
      </div>
    )
  }
}

// No longer been requried 
// const jsx = (
//   <div>
//     <Header/>
//     <Action />
//     <Options />
//     <AddOptions />
//   </div>
// )
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))