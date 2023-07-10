import React, { Component } from "react";

class Hovered extends Component {
  render() {
    const { count, increment } = this.state;
    return <h1 onMouseOver={increment}>I have clicked {count} times</h1>;
  }
}

export default Hovered;
