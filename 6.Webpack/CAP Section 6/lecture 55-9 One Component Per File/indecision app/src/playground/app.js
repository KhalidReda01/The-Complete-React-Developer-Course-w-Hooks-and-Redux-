/**
 * Installing & Configuring Webpack
 */
/**
 * yarn add webpack@3.1.0 done
 *  "scripts": {
    "serve": "live-server public/",
    "build":"webpack",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
  },
 * 

  // this was an error 
   // entry -> output
 //webpack.js.org
 // docs cofig entry 
 // 
const path = require('path')
//  console.log(path.join(__dirname,'public'))
// console.log(__dirname);
///C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\6.Webpack\CAP Section 6\lecture 50-4 Installing & Configuring Webpack\indecision app\public
//C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\6.Webpack\CAP Section 6\lecture 50-4 Installing & Configuring Webpack\indecision app

 
module.exports = {
  entry: './src/app.js',
  path: path.join(__dirname,'public'),
  filename:'bundle.js'
}
$ yarn run build
yarn run v1.22.5
$ webpack
C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\6.Webpack\CAP Section 6\lecture 50-4 Installing & Configuring Webpack\indecision app\node_modules\webpack\bin\convert-argv.js:487
                                throw new Error("'output.filename' is required, either in config file or as --output-filename");
                                ^

Error: 'output.filename' is required, either in config file or as --output-filename
    at processOptions (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\6.Webpack\CAP Section 6\lecture 50-4 Installing & Configuring Webpack\indecision app\node_modules\webpack\bin\convert-argv.js:487:11)
    at processConfiguredOptions (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\6.Webpack\CAP Section 6\lecture 50-4 Installing & Configuring Webpack\indecision app\node_modules\webpack\bin\convert-argv.js:136:4)
    at module.exports (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\6.Webpack\CAP Section 6\lecture 50-4 Installing & Configuring Webpack\indecision app\node_modules\webpack\bin\convert-argv.js:112:10)
    at Object.<anonymous> (C:\Users\khalid\Desktop\Current Projects\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\6.Webpack\CAP Section 6\lecture 50-4 Installing & Configuring Webpack\indecision app\node_modules\webpack\bin\webpack.js:155:40)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
 */

/**
 * now after the bundle.js cerated  you can delete the scripts directory 
 * and inside index.html you can remve all the scrpts tag 
 */

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option </button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
