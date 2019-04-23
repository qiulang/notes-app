import React, { Component } from "react";

function formatTitle(body) {
  var maxLength = 20;
  if (body.length > maxLength) {
    return body.substring(0, maxLength - 3) + "...";
  } else if (body.length === 0) {
    return "New note";
  } else {
    return body;
  }
}

function formatTimestamp(timestamp) {
  return new Date(timestamp).toUTCString();
}

class NoteSelector extends Component {
  handleClickNote = () => {
    this.props.onClickNote(this.props.id);
  };

  render() {
    return (
      <div
        className={
          "note-selector " +
          (this.props.id === this.props.selectedNoteId ? "active" : "")
        }
        onClick={this.handleClickNote}
      >
        <p className="note-selector-title">{formatTitle(this.props.body)}</p>
        <p className="note-selector-timestamp">
          {formatTimestamp(this.props.timestamp)}
        </p>
      </div>
    );
  }
}

export default NoteSelector;
