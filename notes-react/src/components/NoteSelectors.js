import React, { Component } from "react";
import NoteSelector from "./NoteSelector";

class NoteSelectors extends Component {
  render() {
    return (
      <div className="note-selectors">
        <NoteSelector />
        <NoteSelector />
        <NoteSelector />
      </div>
    );
  }
}

export default NoteSelectors;
