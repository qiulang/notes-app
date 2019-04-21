<template>
  <div class="note-container">
    <note-selectors></note-selectors>
    <note-editor></note-editor>
  </div>
</template>

<script>
import NoteSelectors from './NoteSelectors';
import NoteEditor from './NoteEditor';
export default {
  name: 'note-container',
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