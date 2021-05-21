import React, { Component } from "react";
import "./styles.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }
  handleReset() {
    this.setState({ counter: 0 });
  }
  render() {
    return (
      <>
        <h1>ABHISHEK TIWARI</h1>
        <h3>COUNTER - {this.state.counter}</h3>
        <button onClick={this.handleIncrement}>INCREMENT</button>
        <button onClick={this.handleDecrement}>DECREMENT</button>
        <button onClick={this.handleReset}>RESET</button>
      </>
    );
  }
}
