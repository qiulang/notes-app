import React, { Component } from "react";
import NoteSelector from "./NoteSelector";
import { transformNotes } from "../helpers";

class NoteSelectors extends Component {
  render() {
    const transformedNotes = transformNotes(
      this.props.notes,
      this.props.searchText
    );
    const noteSelectors = transformedNotes.map(note => (
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
