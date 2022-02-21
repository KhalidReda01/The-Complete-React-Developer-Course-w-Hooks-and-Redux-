'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//45/7 Saving and Loading Option Data CFSC

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    // this.handleDeleteOption = this.handleDeleteOption.bind(this);// the CS

    _this.state = {
      options: props.options
    };
    return _this;
  }
  // first  life cycle method
  //POC2


  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (error) {}

      console.log('fetching data');
    }
    // second lifecycel method
    //POC1

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('saving data');
      }
    }
    // thid one
    // to see ths working ReactDOM.render(react.createElement('p'),document.getElementById('app'))
    //ReactDOM.render(React.createElement('p'),document.getElementById('app'));


  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('ComponentWillUnmount');
    }
    // first one 

  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      // yes this part isn't woring
      // console.log("No way It's working now  ",option)
      // need to fully understand the filter method false false working and return the arry without the filtered one 
      // MDN array filter SAQ
      /**
       * Array.prototype.filter()
       The filter() method creates a new array with all elements that pass the test implemented by the provided function.
       */
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
          // options:prevState.options.filter((option)=> optionToRemove!==option) 
          // console.log("this is prevstate value",prevState)// 
          /**
           * it return an object 
           * an object of array I mean object conaain aray that's why you usd prevsate.option . access it I understand now
           * {
          "options": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
          }
           */
        };
      });
    }
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
      // second one
      this.setState(function (prevState) {
        return {

          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "Indecision ";
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
          // handleDeleteOption={this.handleDeleteOption} //the CS Uncaught TypeError: props.handleDeleteOption is not a function

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
  options: []
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
  title: "Indecision"

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

// This part is little confusing don't negleectCSMM from now and during all the other section
// It's so imporntant to know why you exactly did everthing and alwaya ask why
//because you will learn better this way Fuck time and deadline Time will pass any whether
// you  finish the lecture in on hour or four no one will judge  you and if they will not probelem  It's my way Prove that It's work well


/**
 * yes I want errors to show up I don't want to just finish the course I want to understand I'm alone at this so now one gonna help you after you finish the course so practice practice practice 
 * 
 *  {app.js:192 Uncaught TypeError: props.handleDeleteOption is not a function} props 
 * 
 */
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
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option  to get Started!'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption // Finally Focus again make sure that you write right don't just typing Okay I  know that you type fast but It's not a race
        //OMG handleDeleteOption={props.handleAddOption} //Deug one Yes that's why I said just be patient and never take course without you offer the source course for stupid mistakes like this Iron Focus 
        // handleDeleteOptio={props.handleDeleteOption} // cs

      });
    })
  );
};

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
      { onClick: function onClick(e) {
          // props.handleDeleteOption(props.optionText)
          props.handleDeleteOption(props.optionText);
        }
      },
      'remove'
    )
  );
};
// 

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
      // console.log(option)
      var error = this.props.handleAddOption(option);
      //third one 
      this.setState(function () {
        return {
          error: error

        };
      });
      if (!error) {
        // I think if there is not error then made the input value clean 
        // e.target.elements.option.value = 'OMG I got it '
        e.target.elements.option.value = 'Add another option ';
        // console.log('what is this part I dont get it '+e.target.elements.option.value)
      }
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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
