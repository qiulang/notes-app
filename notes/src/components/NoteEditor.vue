<template>
  <div class="note-editor">
    <p class="note-editor-info">Timestamp here...</p>
    <textarea class="note-editor-input">
      First note...
      
      Note text here...
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'note-editor'
};
</script>

<style>
/* LAYOUT */
.note-editor {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.note-editor-info {
  padding: 0.5em;
  text-align: center;
}
.note-editor-input {
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0 2em 0 2em;
}
/* COLORS */
.note-editor-info {
  color: #DCDADC;
}
/* TYPOGRAPHY */
.note-editor, .note-editor-input {
  font-size: 0.9em;
}
</style>
