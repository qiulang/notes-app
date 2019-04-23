import React, { Component } from "react";
import NoteSelector from "./NoteSelector";
import { transformNotes } from "../helpers";

class NoteSelectors extends Component {
  render() {
    const noteSelectors = transformNotes(this.props.notes).map(note => (
      <NoteSelector
        key={note.id}
        body={note.body}
        timestamp={note.timestamp}
        id={note.id}
        selectedNoteId={this.props.selectedNoteId}
        onClickNote={this.props.onClickNote}
      />
    ));

    return <div className="note-selectors">{noteSelectors}</div>;
  }
}

export default NoteSelectors;
