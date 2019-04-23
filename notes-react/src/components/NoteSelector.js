import React, { Component } from "react";

class NoteSelector extends Component {
  render() {
    return (
      <div className="note-selector">
        <p className="note-selector-title">{this.props.body}</p>
        <p className="note-selector-timestamp">{this.props.timestamp}</p>
      </div>
    );
  }
}

export default NoteSelector;
