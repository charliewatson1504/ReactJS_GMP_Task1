import { Component } from "react";

import "../styles.css";

import Counter from "./Counter";
import Hello from "./Hello";
import Menu from "./Menu";

export default class MainContent extends Component {
  render() {
    return (
      <div className="container dark-background">
        <Menu />
        <Hello />
        <Counter />
      </div>
    );
  }
}
