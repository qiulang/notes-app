<template>
  <div class="note-selectors">
    <note-selector
      v-for="note in transformedNotes"
      v-bind:note="note"
      v-bind:selectedNote="selectedNote"
      v-bind:key="note.id"
      v-on:click.native="selectNote(note)"
    >
    </note-selector>
  </div>
</template>

<script>
import NoteSelector from './NoteSelector';
export default {
  name: 'note-selectors',
  props: ['notes', 'selectedNote','transformedNotes'],
  methods: {
    selectNote: function(note) {
      this.$emit('selectNote', note);
    }
  },
  components: {
    NoteSelector
  }
};
</script>

<style>
/* LAYOUT */
.note-selectors {
  flex: 0 0 13em;
}
/* COLORS */
.note-selectors {
  border-right: 1px solid #DCDADC;
}
</style>
