<template>
  <div class="note-selector" v-bind:class="{active: note === selectedNote}">
    <p class="note-selector-title">{{ note.body | formatTitle }}</p>
    <p class="note-selector-timestamp">{{ note.timestamp | formatTimestamp }}</p>
  </div>
</template>

<script>
export default {
  name: 'note-selector',
  filters: {
    formatTitle: function(body) {
      var maxLength = 20;
      if (body.length > maxLength) {
        return body.substring(0, maxLength - 3) + '...';
      } else if (body.length === 0) {
        return "New note";
      } else {
        return body;
      }
    },
    // formatTimestamp: function(timestamp) {
    //   return new Date(timestamp).toUTCString();
    // }
  },
  props: ['note', 'selectedNote'],
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