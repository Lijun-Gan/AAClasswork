import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {start: 0, num1: "", num2: ""};

    this.updateNum1 = this.updateNum1.bind(this);
    this.updateNum2 = this.updateNum2.bind(this);
    
  }

  updateNum1(event){
    this.setState({num1: event.currentTarget.value});
  }

  

  render(){
    return (
      <div>
        <h1>Hello World</h1>
          <input onChange={this.updateNum1} value={this.state.num1} />
          <span>this is num1: {this.state.num1}</span>
          <br />
        <button onClick={this.reset}>Reset!</button>
      </div>
    );
  }
}

export default Calculator;
