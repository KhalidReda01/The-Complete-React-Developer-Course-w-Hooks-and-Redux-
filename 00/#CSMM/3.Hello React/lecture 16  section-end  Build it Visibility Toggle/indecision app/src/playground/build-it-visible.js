// 21/16 Build it Visibility Toggle CFSC4
let visibility = false;
const toggleVisibility = () => {
  visibility = !visibility
  render()
  console.log("test")
}
const render = () => {
  const jsx = (
  <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleVisibility}>
{visibility?"Hide detail":"Show details"}
      </button>
      {
        visibility&&(<div><p>Hey these are som details you can see now</p></div>)
      }
  </div>
)
ReactDOM.render(jsx,document.getElementById('app'))
}
render()