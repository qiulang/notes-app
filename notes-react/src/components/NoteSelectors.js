import React, { Component } from "react";
import NoteSelector from "./NoteSelector";

class NoteSelectors extends Component {
  render() {
    const noteSelectors = this.props.notes.map(note => (
      <NoteSelector key={note.id} body={note.body} timestamp={note.timestamp} />
    ));

    return <div className="note-selectors">{noteSelectors}</div>;
  }
}

export default NoteSelectors;
