// CFSC 27-6 Nesting Components


class IndecisionApp extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOptions/>
      </div>
    )
  }
}
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
        <Option/>
      </div>
    )
  }
}
// the challnge again
class Option extends React.Component{
  render() {
    return (
      <div>
        New Option Component Here
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
//delte this we don't need it more  but leave it to understand the big picture
// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOptions/>
//   </div>
// )
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))