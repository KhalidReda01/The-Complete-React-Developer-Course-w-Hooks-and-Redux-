//35. Build it:Adding State to visibilityToggle
/**
 * step 1  is going to create a component since we're trying to render something
 * to the screen and we're going to call this one visibility toggle and on there 
 * we're going to define three methods.
 *  render
 *  constructor 
 */
// VisibilityToggle -


/*


let visibility = false;
const toggleVisibility = () => {
  visibility = !visibility;
  render();
};
const render = () => {
  const jsx = (
    <div>
      <h1>Visibilty Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility?'Hide detail':'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey . These are some details you can now see!</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(jsx,document.getElementById('app'))
}
render();*/