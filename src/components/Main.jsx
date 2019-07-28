import React, { Component } from "react";
import LeftColumn from "../pages/LeftColumn";
import RightColumn from "../pages/RightColumn";

class Main extends Component {
  render() {
    return (
      <div className="block">
        <div className="section">
          <div className="left-column">
            <LeftColumn />
          </div>
          <div className="right-column">
            <RightColumn />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
