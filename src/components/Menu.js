import { Component } from "react";

import "../styles.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: null,
      menuItems: [
        { id: 1, name: "ALL" },
        { id: 2, name: "DOCUMENTARY" },
        { id: 3, name: "COMEDY" },
        { id: 4, name: "HORROR" },
        { id: 5, name: "CRIME" }
      ]
    };
  }

  toggleActive = (index) => {
    this.setState({
      activeMenuItem: this.state.menuItems[index]
    });
  };

  toggleActiveStyles = (index) => {
    if (this.state.menuItems[index] === this.state.activeMenuItem) {
      return " active";
    } else {
      return "";
    }
  };

  render() {
    return (
      <div className="menu">
        {this.state.menuItems.map((elements, index) => (
          <div
            key={index}
            className={`menu-item${this.toggleActiveStyles(index)}`}
            onClick={() => {
              this.toggleActive(index);
            }}
          >
            {elements.name}
          </div>
        ))}
      </div>
    );
  }
}
