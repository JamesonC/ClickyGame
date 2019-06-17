import React, {Component} from "react";
import "./style.css";

class Title extends Component {
  render() {
  return (
    <div className="container">
      <h1 className="title">Clicky Game!</h1>
      <h2 className="sub">Click on an image to earn points, but don't click on any more than once!</h2>
      <h2 className="scores"> Score: {this.props.score}   | Top Score: {this.props.topScore}</h2>
    </div>
  );
  }
}

export default Title;
