import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import NoteContainer from "./components/NoteContainer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, body: "This is a first test", timestamp: Date.now() },
        { id: 2, body: "This is a second test", timestamp: Date.now() },
        { id: 3, body: "This is a third test", timestamp: Date.now() }
      ],
      selectedNoteId: 1
    };
  }
  handleClickNote = id => {
    this.setState({ selectedNoteId: id });
  };
  handleNoteEditorChange = text => {
    const newNotes = this.state.notes.map(note => {
      if (note.id === this.state.selectedNoteId) {
        return {
          id: note.id,
          body: text,
          timestamp: Date.now()
        };
      } else {
        return note;
      }
    });
    this.setState({ notes: newNotes });
  };
  render() {
    return (
      <div id="app">
        <Toolbar />
        <NoteContainer
          notes={this.state.notes}
          selectedNoteId={this.state.selectedNoteId}
          onClickNote={this.handleClickNote}
          onNoteEditorChange={this.handleNoteEditorChange}
        />
      </div>
    );
  }
}

export default App;
