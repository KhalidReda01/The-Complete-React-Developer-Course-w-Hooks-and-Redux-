// CFSC 26-5 Creating a React Component

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}
class Action extends React.Component{
  render() {
    return (
      <div>
        <button>What Should I do</button>
      </div>
    )
  }
}
class Options extends React.Component{
  render() {
    return (
      <div>
        Options Component Here
      </div>
    )
  }
}
class AddOptions extends React.Component{
  render() {
    return (
      <div>
        Add Options Component here
      </div>
    )
  }
}
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOptions/>
  </div>
)
ReactDOM.render(jsx,document.getElementById('app'))