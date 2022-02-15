"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 30.9 Method Binding
 * 
 * 
 */
// this is the binding you need ASQ WCN
// const obj = {
//   name: 'Youssef',
//   getName() {
//     return this.name
//   }
// }

// // const getName = obj.getName;
// // const getName = obj.getName.bind(obj);
// const getName = obj.getName.bind({name:"loda"});// print loda
// console.log(getName())
// // console.log(obj.getName());
// //Uncaught TypeError: getName is not a function

// // const func = function () {
// //   console.log(this)
// // }
// // func() // undefined
// //  to solve this we are goning to use the bind method available on fuciton in javascript
// // SAQ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind MDN that's it even he recomend that but you just searced before he mention that so 
// MDN is your resouces to js
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = "Indecision ";
      var subtitle = "Put your Life in the hand of a computer";
      var options = ['Thing One', 'Thing two', 'Thing three'];
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(Options, { options: options }),
        React.createElement(AddOptions, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "handlePick",
    value: function handlePick() {
      alert('handle Pick');
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handlePick },
          "What should I do ?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  // use this instead you have to repeat WTV WCN to funlly master 
  function Options(props) {
    _classCallCheck(this, Options);

    var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
    return _this4;
  }
  /** NOw when we do that we are making sure that whatever we call hand to remove all the context is correct 
   * and that also means that I just run this binding once when the component first get intialized
   * so we have to ways to bind those event handlers 
   * we can call bind in line and render but that's not efficient
   * but what we're going to be doing is calling bind in the constructor method
   * so Now ther 's no need to set up the bindings for the other tow components .
   * but we are going to do in the next lecture is to take a look at how we can start setting up react components to render data  and have that real time binding 
   * so when the data changes automatically render the UI that is in contrast to what we saw in jsx-indesion 
  */


  _createClass(Options, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      alert("This remove button works now");
      console.log(this.props.options);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.options[1]);
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
          { onClick: this.handleRemoveAll },
          "RemoveAll"
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Option:",
          this.props.optionText
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
  _inherits(AddOptions, _React$Component6);

  function AddOptions() {
    _classCallCheck(this, AddOptions);

    return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
  }

  _createClass(AddOptions, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      console.log(option);

      if (option) {
        alert(option);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
