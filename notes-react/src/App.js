import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="toolbar">
          <button className="toolbar-button">New</button>
          <button className="toolbar-button">Delete</button>
          <input className="toolbar-search" type="text" placeholder="Search..."></input>
        </div>
        <div className="note-container">
          <div className="note-selectors">
            <div className="note-selector active">
              <p className="note-selector-title">First note...</p>
              <p className="note-selector-timestamp">Timestamp here...</p>
            </div>
            <div className="note-selector">
              <p className="note-selector-title">Second note...</p>
              <p className="note-selector-timestamp">Timestamp here...</p>
            </div>
            <div className="note-selector">
              <p className="note-selector-title">Third note...</p>
              <p className="note-selector-timestamp">Timestamp here...</p>
            </div>
          </div>
          <div className="note-editor">
            <p className="note-editor-info">Timestamp here...</p>
            <textarea className="note-editor-input"></textarea>
          </div>
        </div>
      </div>      
    );
  }
}

export default App;
