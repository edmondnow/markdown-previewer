import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props){
    super(props);
 
  }
  
  render() {
    return (
      <div>
        <h1>Input Area</h1>
        <textarea id="content" type='text' onChange={this.props.handleInput} value={this.props.input}/>
      </div>
    );
  }
}


Input.defaultProps = {
input: "Heading ======= Sub-heading ----------- ### Another deeper heading Paragraphs are separated by a blank line. Leave 2 spaces at the end of a line to do a line break Text attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ . Shopping list: * apples * oranges * pears Numbered list: 1. apples 2. oranges 3. pears The rain---not the reign---in Spain."
  
}
  

