// 26-5 Creating a React Component
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
// Challenge time
// options contains a list Options component here
// AddOptions -> Add Option Component here
class Options extends React.Component{
  render() {
    return (
      <div>
       <p>Here are your options</p>
      </div>
    )
  }
}
class AddOptions extends React.Component{
  render() {
    return (
      <div>
         <ol>
          <li>option 1</li>
          <li>option 2</li>
        </ol>
      </div>
    )
  }
}
const jsx = (
  <div>
    <Header/>
    <Action />
    <Options />
    <AddOptions />
  </div>
)
ReactDOM.render(jsx,document.getElementById('app'))