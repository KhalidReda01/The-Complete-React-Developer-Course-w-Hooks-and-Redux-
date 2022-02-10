let visibilty = false;
const toggleVisibilty = () => {
  visibilty = !visibilty;
  console.log(visibilty,!visibilty)
  render()
};
const render = () => {
  const jsx = (
    <div>
      <h1>visibilty Toggle</h1>
      <button onClick={toggleVisibilty}>
        {visibilty?"Hide detail":"Show details"}
      </button>
      {visibilty && (
        <div>
          <p>Hey . These are some details you can now see!</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(jsx,document.getElementById('app'))
}
render()