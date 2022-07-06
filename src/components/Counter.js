import { PureComponent } from "react";

import "../styles.css";

export default class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: { count: 0 }
    };
  }

  increment = () => {
    this.setState((prev) => ({
      counter: {
        count: prev.counter.count + 1
      }
    }));
  };

  decrement = () => {
    this.setState((prev) => ({
      counter: {
        count: prev.counter.count - 1
      }
    }));
  };

  render() {
    return (
      <div className="counter">
        <button className="btn" type="button" onClick={this.increment}>
          +
        </button>
        <p>{this.state.counter.count}</p>
        <button className="btn" type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
