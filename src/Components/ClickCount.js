import React, { Component } from "react";
import UpdateComp from "./CounterHoc";

class ClickCount extends Component {
  render() {
    const { count, increment } = this.state;
    return <button onClick={increment}>I have clicked {count} times</button>;
  }
}

export default UpdateComp(ClickCount);
