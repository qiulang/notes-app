<template>
  <div class="toolbar">
    <button class="toolbar-button" v-on:click="clickNew">New</button>
    <button class="toolbar-button" v-on:click="clickDelete">Delete</button>
    <input class="toolbar-search" type="text" v-model='text' placeholder="Search..."
      v-on:input="inputSearchNoteText($event)"
    >
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  data: function () {
    return {
      text:''
    }
  },
  methods: {
    clickNew: function() {
      this.$emit('clickNew');
    },
    clickDelete: function() {
      this.$emit('clickDelete');
    },
    inputSearchNoteText: function() {
      this.$emit('inputSearchNoteText',this.text); 
    }
  }
};
</script>

<style>
/* LAYOUT */
.toolbar {
  padding: 0.5em;
}
.toolbar-button, .toolbar-search {
  padding: inherit;
  border-radius: 0.3em;
}
.toolbar-search {
  float: right;
}

/* COLORS */
.toolbar {
  background-color: #DCDADC;
}
.toolbar-button {
  background-color: #FFFFFF;
}
.toolbar-button:active {
  background-color: #AAAAAA;
}
</style>