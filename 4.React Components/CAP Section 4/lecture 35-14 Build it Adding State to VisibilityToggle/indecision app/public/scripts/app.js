'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
    _this.state = {
      visibility: true
    };

    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: 'handleToggleVisibility',
    value: function handleToggleVisibility() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.handleToggleVisibility },
          this.state.visibility ? 'Hide detail' : 'Show details'
        ),
        this.state.visibility && React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            'Hey . These are some details you can now see!'
          )
        )
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));
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
