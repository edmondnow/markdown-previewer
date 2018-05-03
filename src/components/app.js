import React, { Component } from 'react';
import Input from './input';
import Output from './output';
import marked from 'marked';
import defaultText from './default';



export default class App extends Component{
  constructor(props){
    super(props)
    
    this.state = {
    input: defaultText,
    output: marked(defaultText)
    }
  this.handleInput = this.handleInput.bind(this)

  }
  
  handleInput(event){
    this.setState({
      input: event.target.value,
      output: marked(event.target.value)
     })
  }



  render(){
    return(
      <div>
        <Input input={this.state.input} handleInput={this.handleInput}/>
        <Output output={this.state.output}/>
      </div>

    )
  }
}

