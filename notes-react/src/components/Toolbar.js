import React, { Component } from "react";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <button className="toolbar-button">New</button>
        <button className="toolbar-button">Delete</button>
        <input className="toolbar-search" type="text" placeholder="Search..." />
      </div>
    );
  }
}

export default Toolbar;
