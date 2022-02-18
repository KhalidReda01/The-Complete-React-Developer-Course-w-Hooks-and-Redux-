'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 36.Indecision State: Part I
 * I don't have internet connection but bery week one I think 10KB so I made a js files instead of waiting the unpkg to download 
 * but this doesn't work so you have to wait to dowload Okay now It's downloaded you can contiue study the section this lecture
 * 
 * 
 */
/**
 * WVI Write Video Information You really need that  It make every thing clear more effort and time I know but this way  make it stick and you understand better this way even the instructor
 * didn't say that but You have to do that don't skip that Okay
 * 
 */
/***
 * 5^
 * 1

Now that we have some real world experience using component state let's go ahead and integrate it into the indecision app.

There's only a few videos left for this section and we're going to spend those finishing off the main functionality for the component version of indecision.
make #WVI after you finish #WTV and #CAP after that try to WVI




Typing Error 

 * 
 */
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.state = {
      options: ['Thing One', 'Thing two', 'Thing three']
    };
    return _this;
  }
  // handleDeleteOptions


  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "Indecision ";
      var subtitle = "Put your Life in the hand of a computer";
      // const options=['Thing One','Thing two','Thing three']
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0 }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
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
    key: 'handlePick',
    value: function handlePick() {
      alert('handle Pick');
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handlePick,
            disabled: !this.props.hasOptions
          },
          'What should I do ?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',

    // constructor(props) {
    //   super(props)
    //   this.handleRemoveAll=this.handleRemoveAll.bind(this)
    // }

    //   handleRemoveAll() {
    //   alert ("This remove button works now")
    //     console.log(this.props.options)
    // }
    value: function render() {
      console.log(this.props.options[1]);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'Here are your options'
        ),
        React.createElement(
          'button',
          { onClick: this.props.handleDeleteOptions },
          'RemoveAll'
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
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'Option:',
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
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      console.log(option);

      if (option) {
        alert(option);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option '
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
