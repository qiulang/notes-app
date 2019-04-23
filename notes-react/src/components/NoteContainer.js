import React, { Component } from "react";
import NoteSelectors from "./NoteSelectors";
import NoteEditor from "./NoteEditor";

class NoteContainer extends Component {
  render() {
    return (
      <div className="note-container">
        <NoteSelectors
          notes={this.props.notes}
          selectedNoteId={this.props.selectedNoteId}
          onClickNote={this.props.onClickNote}
        />
        <NoteEditor />
      </div>
    );
  }
}

export default NoteContainer;
