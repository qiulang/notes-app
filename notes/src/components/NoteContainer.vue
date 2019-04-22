<template>
  <div class="note-container">
    <note-selectors v-bind:notes="notes"
      v-bind:selectedNote="selectedNote"
      v-on:selectNote="selectNote">
    </note-selectors>
    <note-editor></note-editor>
  </div>
</template>

<script>
import NoteSelectors from './NoteSelectors';
import NoteEditor from './NoteEditor';
export default {
  name: 'note-container',
  props: ['notes', 'selectedNote'],
  methods: {
    selectNote: function(note) {
      this.$emit('selectNote', note);
    }
  },
  components: {
    NoteSelectors,
    NoteEditor
  }
};
</script>

<style>
/* LAYOUT */
.note-container {
  display: flex;
  flex: 1;
}
</style>