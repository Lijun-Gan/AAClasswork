import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {start: 0, num1: "", num2: ""};

    this.updateNum1 = this.updateNum1.bind(this);
    this.updateNum2 = this.updateNum2.bind(this);
    this.resetNum = this.resetNum.bind(this);
    this.addNums = this.addNums.bind(this);
    this.minusNums = this.minusNums.bind(this);
    this.timesNums = this.timesNums.bind(this);
    this.dividesNums = this.dividesNums.bind(this);
    
  }

  updateNum1(event){
    event.preventDefault();
    this.setState({num1: event.currentTarget.value});
  }
  updateNum2(event){
    event.preventDefault();
    this.setState({num2: event.currentTarget.value});
  }
  resetNum(event){
    event.preventDefault();
    this.setState({start : 0, num1: "", num2:""},)
  }

  addNums(event){
    event.preventDefault();
    this.setState({start : parseInt(this.state.num1) + parseInt(this.state.num2)})
  }
  minusNums(event){
    event.preventDefault();
    this.setState({start : parseInt(this.state.num1) - parseInt(this.state.num2)})
  }
  timesNums(event){
    event.preventDefault();
    this.setState({start : parseInt(this.state.num1) * parseInt(this.state.num2)})
  }
  dividesNums(event){
    event.preventDefault();
    this.setState({start : parseInt(this.state.num1) / parseInt(this.state.num2)})
  }


  render(){
    return (
      <div>
        <h1>{this.state.start}</h1>
          
          <input onChange={this.updateNum1} value={this.state.num1} />
          <input onChange={this.updateNum2} value={this.state.num2} />
          <button onClick={this.resetNum}>Clear!</button>
          <br />
          <button onClick={this.addNums}>+</button>
          <button onClick={this.minusNums}>-</button>
          <button onClick={this.timesNums}>*</button>
          <button onClick={this.dividesNums}>/</button>
      </div>
    );
  }
}

export default Calculator;
