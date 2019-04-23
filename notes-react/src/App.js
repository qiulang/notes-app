import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import NoteContainer from "./components/NoteContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Toolbar />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
