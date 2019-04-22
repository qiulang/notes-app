<template>
  <div id="app">
    <toolbar></toolbar>
    <note-container v-bind:notes="notes"
      v-bind:selectedNote="selectedNote"
      v-on:selectNote="selectNote">
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
      selectedNote: initialNotes[0]
    };
  },
  methods: {
    selectNote: function(note) {
      this.selectedNote = note;
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