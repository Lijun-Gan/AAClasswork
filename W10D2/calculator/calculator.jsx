import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {start: 0, num1: 0, num2: 0};

    this.updateNum1 = this.updateNum1.bind(this);
    this.updateNum2 = this.updateNum2.bind(this);
    this.addNums = this.addNums.bind(this);
    
  }

  updateNum1(event){
    this.setState({num1: event.currentTarget.value});
  }
  updateNum2(event){
    this.setState({num2: event.currentTarget.value});
  }

  addNums(event){
    this.setState({start : this.state.num1 + this.state.num2})
  }

  render(){
    return (
      <div>
        <h1>{this.state.start}</h1>
          
          <input onChange={this.updateNum1} value={this.state.num1} />
          <span>this is num1: {this.state.num1}</span>
          <br/>
          <input onChange={this.updateNum2} value={this.state.num2} />
          <span>this is num2: {this.state.num2}</span>
          <br />
   
        <button onClick={this.addNums}>+</button>
        <button onClick={this.reset}>Reset!</button>
      </div>
    );
  }
}

export default Calculator;
