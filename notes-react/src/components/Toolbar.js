import React, { Component } from "react";

class Toolbar extends Component {
  handleInput = event => {
    this.props.onSearchNote(event.target.value);
  };
  render() {
    return (
      <div className="toolbar">
        <button className="toolbar-button" onClick={this.props.onNewNote}>
          New
        </button>
        <button className="toolbar-button" onClick={this.props.onDeleteNote}>
          Delete
        </button>
        <input
          className="toolbar-search"
          type="text"
          placeholder="Search..."
          onInput={this.handleInput}
        />
      </div>
    );
  }
}

export default Toolbar;
