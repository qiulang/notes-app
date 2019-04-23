import React, { Component } from "react";

class NoteEditor extends Component {
  render() {
    return (
      <div className="note-editor">
        <p className="note-editor-info">Timestamp here...</p>
        <textarea className="note-editor-input" />
      </div>
    );
  }
}

export default NoteEditor;
