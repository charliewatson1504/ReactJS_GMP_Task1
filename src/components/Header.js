import { Component } from "react";

import "../styles.css";
import image from "../images/header-img.png";
import Logo from "./Logo";
import Search from "./Search";

export default class Header extends Component {
  render() {
    const bgImgStyle = {
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: 250
    };
    return (
      <div className="header" style={bgImgStyle}>
        <div className="header-logo">
          <Logo />
          <div className="container">
            <h1>FIND YOUR MOVIE</h1>
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
