<template>
  <div class="note-selectors">
    <note-selector></note-selector>
    <note-selector></note-selector>
    <note-selector></note-selector>
  </div>
</template>

<script>
import NoteSelector from './NoteSelector';
export default {
  name: 'note-selectors',
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
