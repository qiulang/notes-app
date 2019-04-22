<template>
  <div class="note-selectors">
    <note-selector
      v-for="note in transformedNotes"
      v-bind:note="note"
      v-bind:key="note.id"
    >
    </note-selector>
  </div>
</template>

<script>
import NoteSelector from './NoteSelector';
export default {
  name: 'note-selectors',
  props: ['notes'],
  computed: {
    transformedNotes: function() {
      return this.notes.slice().sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
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
