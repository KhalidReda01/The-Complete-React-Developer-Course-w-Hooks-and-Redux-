import React from 'react';
import AddOption from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
// Challenge time
// pull the state out of constructor
// convert all 4 event handlers to calss prperties (arrow functions )
// delete the constructor completely
// start with class properites and end with methods 
class IndecisionApp extends React.Component {
  state = {
    options:[]
  }
  // constructor(props) {
  //   super(props);
  //   // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   // this.handlePick = this.handlePick.bind(this);
  //   // this.handleAddOption = this.handleAddOption.bind(this);
  //   // this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   // first POC
  //   // this.state = {
  //   //   options: []
  //   // };
  // }
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
  // second 
  handleDeleteOptions =()=> {
    this.setState(() => ({ options: [] }));
  }
  //third
  handleDeleteOption =(optionToRemove)=> {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }//Foruth
  handlePick=() =>{
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  //Fifth
  handleAddOption =(option)=> {
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
        <OptionModal/>
      </div>
    );
  }
}



Header.defaultProps = {
  title: 'Indecision app'
};
// Focus first you didn't export this then the compoent at the import you dont' need it you  already at the same folder component 
export default IndecisionApp