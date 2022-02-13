// 27-6 Nesting component
class IndecisionApp extends React.Component{
  render() {
    return (
         <div>
      <Header />
        <Action />
        <Options/>
      <AddOptions />
    </div>)
  }
    
 
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your Life in the hand of a computer</h2>
      </div>
      )
}
}
class Action extends React.Component{
  render() {
    return (<div>
       <button>What should I do ?</button>
     </div>)
  }
 
}


class Options extends React.Component{
  render() {
    return (
      <div>
        <p>Here are your options</p>
        <Option/>
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
      </div>
    )
  }
}
class AddOptions extends React.Component{
  render() {
    return (
      <div>
        <p>Add option Component Here</p>
         <ol>
          <li>option 1</li>
          <li>option 2</li>
        </ol>
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