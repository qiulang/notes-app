import React, { Component } from "react";
import NoteSelectors from "./NoteSelectors";
import NoteEditor from "./NoteEditor";

class NoteContainer extends Component {
  render() {
    const selectedNote = this.props.notes.find(
      note => note.id === this.props.selectedNoteId
    );
    return (
      <div className="note-container">
        <NoteSelectors
          notes={this.props.notes}
          selectedNoteId={this.props.selectedNoteId}
          onClickNote={this.props.onClickNote}
        />
        <NoteEditor
          selectedNote={selectedNote}
          onNoteEditorChange={this.props.onNoteEditorChange}
        />
      </div>
    );
  }
}

export default NoteContainer;
