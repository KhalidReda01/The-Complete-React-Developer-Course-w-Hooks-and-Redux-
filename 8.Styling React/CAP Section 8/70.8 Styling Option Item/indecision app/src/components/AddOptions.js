import React from 'react'
/**
 * class properties 
 * 
 */
class AddOption extends React.Component {
  state = {
    error: undefined
  }
 
  handleAddOption =(e)=> {
    e.preventDefault();
    // use devtool
  //  console.log(testing)// you are still here OMG
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
          <button class="button">Add Option </button>
        </form>
      </div>
    );
  }
}
export default AddOption