import React from 'react';
import Modal from 'react-modal';
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleSelectedOption}
    contentLabel="Selectted Option"
  >
    <h3>Selected Option </h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    {/* Challenge Time
     1. Create  new event handle in IndecisionApp that cleart selectedOption state
     2. Pass that into OptionModal
     3. Call it on button click
    
     */}
    {/* third Call it on button click */}
    <button onClick={props.handleSelectedOption}>Okay</button>

 </Modal>
);

/**
 * !! this techniqe
 * undefined // undefined
 * 'test' // test
 * !!'test'// true
 * !! undefined // false 
 */
export default OptionModal;