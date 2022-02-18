/**
 * 30.9 Method Binding
 * 
 * 
 */
// this is the binding you need ASQ WCN
// const obj = {
//   name: 'Youssef',
//   getName() {
//     return this.name
//   }
// }

// // const getName = obj.getName;
// // const getName = obj.getName.bind(obj);
// const getName = obj.getName.bind({name:"loda"});// print loda
// console.log(getName())
// // console.log(obj.getName());
// //Uncaught TypeError: getName is not a function

// // const func = function () {
// //   console.log(this)
// // }
// // func() // undefined
// //  to solve this we are goning to use the bind method available on fuciton in javascript
// // SAQ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind MDN that's it even he recomend that but you just searced before he mention that so 
// MDN is your resouces to js
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
  // use this instead you have to repeat WTV WCN to funlly master 
  constructor(props) {
    super(props)
    this.handleRemoveAll=this.handleRemoveAll.bind(this)
  }
  /** NOw when we do that we are making sure that whatever we call hand to remove all the context is correct 
   * and that also means that I just run this binding once when the component first get intialized
   * so we have to ways to bind those event handlers 
   * we can call bind in line and render but that's not efficient
   * but what we're going to be doing is calling bind in the constructor method
   * so Now ther 's no need to set up the bindings for the other tow components .
   * but we are going to do in the next lecture is to take a look at how we can start setting up react components to render data  and have that real time binding 
   * so when the data changes automatically render the UI that is in contrast to what we saw in jsx-indesion 
  */
  handleRemoveAll() {
  alert ("This remove button works now")
    console.log(this.props.options)
}
  render() {
    console.log(this.props.options[1])
    return (
      <div>
        <p>Here are your options</p>
        {/* <button onClick={this.handleRemoveAll.bind(this)} this method isn't efficient 
        it requers us to reun bind every time the component reounders>RemoveAll</button> */}
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