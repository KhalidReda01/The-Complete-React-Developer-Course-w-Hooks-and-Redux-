import React from 'react'
// export default (pros)=>{ } // unknown 
const Option = (props) => (
  <div>
    {props.optionText}
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);
export default Option;