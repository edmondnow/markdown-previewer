import React, { Component } from 'react';


class Output extends Component{
  constructor(props){
    super(props);

  
  this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup(){
    return {__html: this.props.output}
  }
  render(){
  
    
    return(
      <div className="render" dangerouslySetInnerHTML={this.createMarkup()}>

      </div>
    )

  }
}


export default Output;