'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 44.6 Lifecycle Methods  
 * POC 
 */
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    // you missed this part It's very impornt to bind 
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {

      // options:[]
      options: props.options
    };
    return _this;
  }
  // these three  are the lifecyecle methods you can learn more by googling react componet lifecycle 
  //https://reactjs.org/docs/react-component.html


  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('comoponentDidMount!');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('componentDidUpdate!');
    }
    //ReactDOM.render(React.createElement('p'),document.getElementById('app'))

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('ComponentWilUnmout');
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {

      this.setState(function () {
        return { options: [] };
      });
    }
    /**
     * there is an error at this this.state isn't a function
     *   this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return true
        })
      }))
     *
     */
    // handleDeleteOption(option) {
    //   // console.log('hdo',option )
    // //Uncaught TypeError: this.setState is not a function       console.log("DEES",option),

    //   this.setState((prevState) => ({
    //     options:['hello what is going on']

    //   }))
    // }
    // CFSC
    /**
     * Even the souce code had the same  error 
     * this.setState is not a function
     * So now the problem wihhin hidden part 
     * 
     */

  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
    // OMG not again this was typiny mistake optionToReomve  you wrote it like that at retrun but the right was as argument 
    //so you deserve that erro app.js: 81 Uncaught ReferenceError: optionToReomve is not defined
    // handleDeleteOption(optionToRemove) {
    //   this.setState((prevState) => ({
    //     options: prevState.options.filter((option) => optionToRemove !== option)
    //   }));
    // }
    /**
     * Challenge Time
     * Your Challenge  is going to be to convert the other to this data set state calls 
     */

  }, {
    key: 'handlePick',
    value: function handlePick() {
      var _this2 = this;

      this.setState(function () {
        var randomNum = Math.floor(Math.random() * _this2.state.options.length);
        var option = _this2.state.options[randomNum];
        alert(option);
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {

      if (!option) {
        return 'Enter Valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return "This Option already exists";
      }

      console.log("what is this ", option);
      // one state to convert
      // this.setState((prevState) => {
      //   return {


      //     options:prevState.options.concat(option)
      //   }
      // })
      // prevState is not Defined you didn't put it as argument hahah 
      // Okay the first part of the challenge NOW work so well
      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // const title = "Indecision ";
      var subtitle = "Put your Life in the hand of a computer";
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0,

          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOptions, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: ["three"]
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};
Header.defaultProps = {
  title: 'Indecision'

};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What should I do ?'
    )
  );
};

var Options = function Options(props) {
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
      { onClick: props.handleDeleteOptions },
      'RemoveAll'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};
/**
 * so instead of passing in props.handleDeleteOption just gonna defune an inline arrow function 
 * {    <button onClick={props.handleDeleteOption}>remove</button>} 
 *  
 */
var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Option:',
      props.optionText
    ),
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'remove'
    )
  );
};

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
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      console.log(option);
      var error = this.props.handleAddOption(option);
      // another one to convert
      // this.setState(() => {
      //   return {
      //     error: error

      //   }
      // })
      // this is the second part of the challenge test it now Okay it working 
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
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

// ReactDOM.render(<IndecisionApp options={["Devils den","Second District"] }/>,document.getElementById('app'))


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
