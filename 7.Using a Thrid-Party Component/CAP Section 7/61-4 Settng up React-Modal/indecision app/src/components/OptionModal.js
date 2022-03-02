import React from 'react';
import Modal from 'react-modal';
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selectted Option"
  >
    <h3>Selected Option </h3>
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