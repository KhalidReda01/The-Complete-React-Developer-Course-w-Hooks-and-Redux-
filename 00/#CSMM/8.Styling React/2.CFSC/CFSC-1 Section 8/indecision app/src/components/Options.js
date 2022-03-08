import React from 'react';
// import Option from "./components/Option";
// // not this error again Focus It's located at the same file
import Option from "./Option";


const Options = (props) => (
  <div>
    <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
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
export default Options