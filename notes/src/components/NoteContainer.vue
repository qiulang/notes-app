<template>
  <div class="note-container">
    <note-selectors v-bind:notes="notes"></note-selectors>
    <note-editor></note-editor>
  </div>
</template>

<script>
import NoteSelectors from './NoteSelectors';
import NoteEditor from './NoteEditor';
export default {
  name: 'note-container',
  props: ['notes'],
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