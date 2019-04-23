import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import NoteContainer from "./components/NoteContainer";
import { transformNotes } from "./helpers";
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
      selectedNoteId: 1,
      searchText: ""
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

  handleNewNote = () => {
    const newNote = {
      id: Date.now(),
      body: "",
      timestamp: Date.now()
    };
    this.setState({
      notes: this.state.notes.concat([newNote]),
      selectedNoteId: newNote.id
    });
  };

  handleDeleteNote = () => {
    const newNotes = this.state.notes.filter(
      note => note.id !== this.state.selectedNoteId
    );
    const transformedNotes = transformNotes(newNotes);
    const newSelectedNoteId =
      transformedNotes.length > 0 ? transformedNotes[0].id : null;
    this.setState({
      notes: newNotes,
      selectedNoteId: newSelectedNoteId
    });
  };

  handleSearchNote = newSearchText => {
    const transformedNotes = transformNotes(this.state.notes, newSearchText);
    let newSelectedNoteId = null;
    if (transformedNotes.length > 0) {
      const selectedNote = transformedNotes.find(
        note => note.id === this.state.selectedNoteId
      );
      if (selectedNote) {
        newSelectedNoteId = selectedNote.id;
      } else {
        newSelectedNoteId = transformedNotes[0].id;
      }
    }
    this.setState({
      searchText: newSearchText,
      selectedNoteId: newSelectedNoteId
    });
  };

  render() {
    return (
      <div id="app">
        <Toolbar
          onNewNote={this.handleNewNote}
          onDeleteNote={this.handleDeleteNote}
          onSearchNote={this.handleSearchNote}
        />
        <NoteContainer
          notes={this.state.notes}
          selectedNoteId={this.state.selectedNoteId}
          searchText={this.state.searchText}
          onClickNote={this.handleClickNote}
          onNoteEditorChange={this.handleNoteEditorChange}
        />
      </div>
    );
  }
}

export default App;
