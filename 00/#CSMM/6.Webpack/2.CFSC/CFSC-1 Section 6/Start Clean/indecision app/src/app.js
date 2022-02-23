
// /**
// section 6webpack
// 48.what is webpack ?

//  */
/**
 * so even after I replaced all my code the error is still exist 
 * change src/app.js
SyntaxError: src/app.js: Unexpected token (100:9)
   98 |     const subtitle = "Put your Life in the hand of a computer"
   99 |     return (
> 100 |          <div>
      |          ^
  101 |
  102 |         <Header subtitle={subtitle} />
  103 |

 */
// Okay now I take the same code that works at the source code now gonna see what will happen 


  // class IndecisionApp extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //     this.handlePick = this.handlePick.bind(this);
  //     this.handleAddOption = this.handleAddOption.bind(this);
  //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //     this.state = {
  //       options: []
  //     };
  //   }
  //   componentDidMount() {
  //     try {
  //       const json = localStorage.getItem('options');
  //       const options = JSON.parse(json);
  
  //       if (options) {
  //         this.setState(() => ({ options }));
  //       }
  //     } catch (e) {
  //       // Do nothing at all
  //     }
  //   }
  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevState.options.length !== this.state.options.length) {
  //       const json = JSON.stringify(this.state.options);
  //       localStorage.setItem('options', json);
  //     }
  //   }
  //   componentWillUnmount() {
  //     console.log('componentWillUnmount');
  //   }
  //   handleDeleteOptions() {
  //     this.setState(() => ({ options: [] }));
  //   }
  //   handleDeleteOption(optionToRemove) {
  //     this.setState((prevState) => ({
  //       options: prevState.options.filter((option) => optionToRemove !== option)
  //     }));
  //   }
  //   handlePick() {
  //     const randomNum = Math.floor(Math.random() * this.state.options.length);
  //     const option = this.state.options[randomNum];
  //     alert(option);
  //   }
  //   handleAddOption(option) {
  //     if (!option) {
  //       return 'Enter valid value to add item';
  //     } else if (this.state.options.indexOf(option) > -1) {
  //       return 'This option already exists';
  //     }
  
  //     this.setState((prevState) => ({
  //       options: prevState.options.concat(option)
  //     }));
  //   }
  //   render() {
  //     const subtitle = 'Put your life in the hands of a computer';
  
  //     return (
  //       <div>
  //         <Header subtitle={subtitle} />
  //         <Action
  //           hasOptions={this.state.options.length > 0}
  //           handlePick={this.handlePick}
  //         />
  //         <Options
  //           options={this.state.options}
  //           handleDeleteOptions={this.handleDeleteOptions}
  //           handleDeleteOption={this.handleDeleteOption}
  //         />
  //         <AddOption
  //           handleAddOption={this.handleAddOption}
  //         />
  //       </div>
  //     );
  //   }
  // }
  
  // const Header = (props) => {
  //   return (
  //     <div>
  //       <h1>{props.title}</h1>
  //       {props.subtitle && <h2>{props.subtitle}</h2>}
  //     </div>
  //   );
  // };
  
  // Header.defaultProps = {
  //   title: 'Indecision'
  // };
  
  // const Action = (props) => {
  //   return (
  //     <div>
  //       <button
  //         onClick={props.handlePick}
  //         disabled={!props.hasOptions}
  //       >
  //         What should I do?
  //       </button>
  //     </div>
  //   );
  // };
  
  // const Options = (props) => {
  //   return (
  //     <div>
  //       <button onClick={props.handleDeleteOptions}>Remove All</button>
  //       {props.options.length === 0 && <p>Please add an option to get started!</p>}
  //       {
  //         props.options.map((option) => (
  //           <Option
  //             key={option}
  //             optionText={option}
  //             handleDeleteOption={props.handleDeleteOption}
  //           />
  //         ))
  //       }
  //     </div>
  //   );
  // };
  
  // const Option = (props) => {
  //   return (
  //     <div>
  //       {props.optionText}
  //       <button
  //         onClick={(e) => {
  //           props.handleDeleteOption(props.optionText);
  //         }}
  //       >
  //         remove
  //       </button>
  //     </div>
  //   );
  // };
  
  // class AddOption extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.handleAddOption = this.handleAddOption.bind(this);
  //     this.state = {
  //       error: undefined
  //     };
  //   }
  //   handleAddOption(e) {
  //     e.preventDefault();
  
  //     const option = e.target.elements.option.value.trim();
  //     const error = this.props.handleAddOption(option);
  
  //     this.setState(() => ({ error }));
  
  //     if (!error) {
  //       e.target.elements.option.value = '';
  //     }
  //   }
  //   render() {
  //     return (
  //       <div>
  //         {this.state.error && <p>{this.state.error}</p>}
  //         <form onSubmit={this.handleAddOption}>
  //           <input type="text" name="option" />
  //           <button>Add Option </button>
  //         </form>
  //       </div>
  //     );
  //   }
  // }
  
  const User = (props) => {
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  };
  
  // ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  /**
   * gave me the same error even using the same code the works so I think the problem at the node_moduels and package.json
   * change src/app.js
SyntaxError: src/app.js: Unexpected token (83:8)
  81 | 
  82 |       return (
> 83 |         <div>
     |         ^
  84 |           <Header subtitle={subtitle} />
  85 |           <Action
  86 |             hasOptions={this.state.options.length > 0}

   */
  ReactDOM.render(<User name="khalid" age="23" />, document.getElementById('app'));
  
  /**
   * I want to laugh now because even using this basic one babel see an error so  there is something that I can't see 
   * change src/app.js
SyntaxError: src/app.js: Unexpected token (196:6)
  194 |   const User = (props) => {
  195 |     return (
> 196 |       <div>
      |       ^
  197 |         <p>Name: {props.name}</p>
  198 |         <p>Age: {props.age}</p>
  199 |       </div>

   * 
   */