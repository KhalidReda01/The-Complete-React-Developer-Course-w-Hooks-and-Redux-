// 28-8 Events & Methods
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
// Challenge Time Rancho
// Add Remove All Button
// setup handleRemoveAll  -> alert some message 
// setup onClick to fire the method
class Options extends React.Component{
  handleRemoveAll() {
  alert ("This remove button works now")
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
// Challenge time redner a new compent that render insdie of options
//Option -> option Compoent here 
class Option extends React.Component{
  render() {
  //challenge two
  // render new p tage for each option
    
    return (
      <div>
       <p>Option:{this.props.optionText}</p> 
      </div>
    )
  }
}
// Second Challenge
// 1. setup th form with text input and submit button
// 2. wire up onSubmit 
// 3.handleAddOption -> fetch the  value typed -> if value ,then alert 
class AddOptions extends React.Component{
  render() {
    return (
      <div>
        <p>Add option Component Here</p>
        
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