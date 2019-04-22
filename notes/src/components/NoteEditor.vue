<template>
  <div class="note-editor">
    <p class="note-editor-info">{{ selectedNote.timestamp | formatTimestamp }}</p>
    <textarea class="note-editor-input"
      v-bind:value="selectedNote.body"
      v-on:input="input($event)"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'note-editor',
  props: ['selectedNote'],
  methods: {
    input: function($event) {
      this.$emit('inputNoteEditor', $event.target.value);
    }
  }
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
