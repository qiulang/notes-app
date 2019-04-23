import React, { Component } from "react";
import { formatTitle, formatTimestamp } from "../helpers";

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
