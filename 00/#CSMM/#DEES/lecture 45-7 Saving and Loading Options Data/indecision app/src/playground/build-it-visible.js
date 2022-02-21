//35. Build it:Adding State to visibilityToggle
/**
 * step 1  is going to create a component since we're trying to render something
 * to the screen and we're going to call this one visibility toggle and on there 
 * we're going to define three methods.
 *  render -> render it to the screen
 *  constructor -> for 2 reason we define constructr we want to bind of of our methods
 * for the button click and also we want to set up our default state
 * and finally the method that we're going to have firing on click 
 * we'll call that something like handleToggle Visibiltity awesome 
 * Now we have these thre methods but the implementatin odetails arre going to be up to you  
 * 
 * *** the last thing I'm gion to give you is the  piece of state we're goin to have 
 *  a single piece os state visibility and we'll start off at the defalut value false 
 * and we'll toggle  it betweeen true and false depneding  on how many times the user clicks the button 
 * when visibilty is false the butoon text will read show details when th visiblity is true will shte the contetn and the button 
 * and the button text will read hide details 
 */
// VisibilityToggle -render ,constructor ,handleToggleVisibility
//visivlity- false 

class VisibilityToggle extends React.Component{
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: true
    }

  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility:!prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
        {this.state.visibility?'Hide detail':'Show details'}
        </button>
        {this.state.visibility && (
        <div>
          <p>Hey . These are some details you can now see!</p>
        </div>
      )}
      </div>
    )
  }
}
ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'))
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