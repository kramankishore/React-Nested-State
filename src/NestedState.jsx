import React, { Component } from "react";

class NestedState extends Component {
  state = {
    var1: 0,
    var2: 0,
    var3: 0,
    var4: 0
  };

  incrementHandler = () => {
    this.setState({ var1: this.state.var1 + 1, var2: this.state.var2 + 1 });
  };

  incrementHandlerNested = () => {
    this.setState({ var3: this.state.var3 + 1 }, () =>
      this.setState({ var4: this.state.var4 + 1 })
    );
  };

  componentDidUpdate() {
    console.log("Rerendered!");
  }

  render() {
    return (
      <div>
        <h1>Normal</h1>
        <a>{this.state.var1}</a>
        <a>{this.state.var2}</a>
        <div />
        <button onClick={this.incrementHandler}>Increment</button>
        <h1>Nested</h1>
        <a>{this.state.var3}</a>
        <a>{this.state.var4}</a>
        <div />
        <button onClick={this.incrementHandlerNested}>Increment</button>
      </div>
    );
  }
}

export default NestedState;
