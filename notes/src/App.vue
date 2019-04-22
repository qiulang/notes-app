<template>
  <div id="app">
    <toolbar v-on:clickNew="createNote"
      v-on:clickDelete="deleteNote"
      v-bind:searchNoteText="searchNoteText"
      v-on:inputSearchNoteText="updateSearch"
    >
    </toolbar>
    <note-container 
      v-bind:notes="notes"
      v-bind:transformedNotes="transformedNotes"
      v-bind:selectedNote="selectedNote"
      v-on:selectNote="selectNote"
      v-on:inputNoteEditor="updateSelectedNote"
      >
    </note-container>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';
import NoteContainer from './components/NoteContainer';

export default {
  name: 'app',
  data: function() {
    var initialNotes = [
      {id: 1, body: "This is a first test", timestamp: Date.now()},
      {id: 2, body: "This is a second test", timestamp: Date.now()},
      {id: 3, body: "This is a third test", timestamp: Date.now()}
    ];
    return {
      notes: initialNotes,
      selectedNote: initialNotes[0],
      searchNoteText: ""
    };
  },
  methods: {
    selectNote: function(note) {
      this.selectedNote = note;
    },
    updateSelectedNote: function(body) {
      this.selectedNote.body = body;
      this.selectedNote.timestamp = Date.now();
    },
    createNote: function() {
      var newNote = {
        id: Date.now(),
        body: "",
        timestamp: Date.now()
      };
      this.notes.push(newNote);
      this.selectedNote = newNote;
    },
    deleteNote: function() {
      var index = this.notes.indexOf(this.selectedNote);
      if (index !== -1) {
        this.notes.splice(index, 1);
        if (this.transformedNotes.length > 0) {
          this.selectedNote = this.transformedNotes[0];
        } else {
          this.selectedNote = {};
        }
      }
    },
    updateSearch: function(newSearchText) {
      this.searchNoteText = newSearchText;
      if (this.transformedNotes.length === 0) {
        this.selectedNote = {};
      } else if (this.transformedNotes.indexOf(this.selectedNote) === -1) {
        this.selectedNote = this.transformedNotes[0];
      }
    }
  },
  computed: {
    transformedNotes: function() {
      return this.notes
        .filter(function(note) {
          return note.body.toLowerCase().indexOf(this.searchNoteText.toLowerCase()) !== -1;
        }.bind(this))
        .sort(function(a, b) {
          return b.timestamp - a.timestamp;
        });
    }
  },
  components: {
    Toolbar,
    NoteContainer
  }
};
</script>

<style>
/* RESET */
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
}

/* LAYOUT */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* COLORS */
* {
  color: #454545;
  background-color: #FAFAF8;
}

/* TYPOGRAPHY */
body {
  font-family: sans-serif;
}
</style>