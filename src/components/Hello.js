import React, { Component } from "react";

import "../styles.css";

export default class Hello extends Component {
  render() {
    return React.createElement("h1", null, "Hello World!");
  }
}
