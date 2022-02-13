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

const jsx = (
  <div>
    <Header/>
    
    <Action/>
  </div>
)
ReactDOM.render(jsx,document.getElementById('app'))