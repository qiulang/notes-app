<template>
  <div class="note-selector">
    <p class="note-selector-title">{{ note.body }}</p>
    <p class="note-selector-timestamp">{{ note.timestamp }}</p>
  </div>
</template>

<script>
export default {
  name: 'note-selector',
  props: ['note']
};
</script>

<style>
/* LAYOUT */
.note-selector {
  padding: 1em;
}
.note-selector p {
  margin: 0;
}
/* COLORS */
.note-selector {
  border-bottom: 1px solid #DCDADC;
}
.note-selector.active {
  background-color: #FCE18D;
}
.note-selector-title {
  background-color: inherit;
}
.note-selector-timestamp {
  color: #626262;
  background-color: inherit;
}
/* TYPOGRAPHY */
.note-selector-title {
  font-weight: bold;
}
.note-selector-timestamp {
  font-size: 0.7em;
}
</style>