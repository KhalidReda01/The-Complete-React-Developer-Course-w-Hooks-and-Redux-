"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 40.2 Stateless Functional Component
 */
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {

      options: []
    };
    return _this;
  }
  // handleDeleteOptions


  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var _this2 = this;

      this.setState(function () {
        // thiss part from jsx-indecision.js
        var randomNum = Math.floor(Math.random() * _this2.state.options.length);
        var option = _this2.state.options[randomNum];
        alert(option);
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {

      if (!option) {
        return 'Enter Valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return "This Option already exists";
      }

      console.log("what is this ", option);
      this.setState(function (prevState) {
        return {

          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision ";
      var subtitle = "Put your Life in the hand of a computer";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0,

          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOptions, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);
// Challenge Solve convert the Header Class componet to a Functionl Component


var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle }</h2>
//       </div>
//       )
// }
// }
var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      "What should I do ?"
    )
  );
};
/**
 * Challenge Time 
 * conver all three other class componet 
 * Option
 * Options 
 * Header 
 */
// class Action extends React.Component{

//   render() {
//     console.log(this)
//     return (<div>

//       <button onClick={this.props.handlePick}
//       disabled={!this.props.hasOptions}
//       >What should I do ?</button>
//      </div>)
//   }

// }


// Challenge time Convert Option class compoent to a functioal one 
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Here are your options"
    ),
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "RemoveAll"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    })
  );
};
// class Options extends React.Component{

//   render() {
//     console.log(this.props.options[1])
//     return (
//       <div>
//         <p>Here are your options</p>

//         <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option }/>
//     )
//     }
//       </div>

//     )
//   }
// }


// and finally this is the last part of the Challenge convert the option class component to a functional one
var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Option:",
      props.optionText
    )
  );
};
// class Option extends React.Component{
//   render() {


//     return (
//       <div>
//        <p>Option:{this.props.optionText}</p> 
//       </div>
//     )
//   }
// }

var AddOptions = function (_React$Component2) {
  _inherits(AddOptions, _React$Component2);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this3 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOptions, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      console.log(option);
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error

        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option "
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name }</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }
// ReactDOM.render(<User name="khalid" age="23"/>,document.getElementById('app'))


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
