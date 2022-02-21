
// /**
//  * 45.7 Saving and Loading Options Data
//  * POC
//  */



/**
 * Want to see  why is this even I'm sure that I did nothing   all this happen after try and catch 
 * 
 */
/**
 * POC 1
 * try at the console
 * localStorage.setItem('name','Khalid')// undefined
 * localStorage.getItem('name'); khalid
 * localStorage.removeItem('name') // undefined
 * localStorage.getItem('name')// null
 * localStorage.setItem('age',26)//undefined
 * localStorage.getItem('age') //"26"// local storage only works with string data
 * // that's why we will use json data
 * JSON.stringify
 * JSON.parse
 * JSON.stringify({age:26})//{"age":26}
 * const json =JSON.stringify({age:23})//undefined
 * json print at the console  '{"age":23}'
 * JSON.parse(json) //Object  {age:23}
 * JSON.parse(json).age // 23
 *
 */

/**
 * POC1-3 Done
 * WVI : I take the notes Now Go ahead
 * No need to write the notes again here the paper is more than enough no one gonna read this but you only
 * So do what ever you want this account is yours and you are learning no one gonna judge the way you are learning Okay
 * So feel free to do what ever you want and commit what you want That's it
 *
 */
/**
 * POC3
 * localStorage.clear()
 * localStorage.getItem('options') //null
 * JSON.parse(null) //null
 * if(options){
 * }
 */

/**
 * POC3 
 * localStorage.clear()
 * localStorage.getItem('options') //null
 * JSON.parse(null) //null 
 * if(options){
 *   this.setState(()=>({options:{options}}))
 * }
 * JSON.parse('[12})
 * try {
 * }catch(e){
 * }
 * 
 * // here faced the error that I don't want to bug it or even try because I don't understand what happeed after localStorage clear 
 */
 class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      // options: props.options
      options: []
    };
   }
   /**
    *   // componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  // }
    * 
    * 
    */
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
     console.log("fetching data")
     
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

// IndecisionApp.defaultProps = {
//   options: []
// };

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
      {/*  this the other tweak */}
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
    //Don't fully get him review this lecture is a must 
    // Yes I don't see any difference at the UI It's the same 
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
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
