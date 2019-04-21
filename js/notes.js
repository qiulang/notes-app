var app = new Vue({
  el: "#app",
  data: {
    notes: [],
    selectedNote: {}
  },
  mounted: function() {
    this.notes = [
      { id: 1, body: "This is a first test", timestamp: Date.now() },
      { id: 2, body: "This is a second test", timestamp: Date.now() },
      { id: 3, body: "This is a third test", timestamp: Date.now() }
    ];
    this.selectedNote = this.notes[0];
  },
  computed: {
    transformedNotes: function() {
      return this.notes.slice().sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
    }
  },
  filters: {
    formatTitle: function(body) {
      var maxLength = 20;
      if (body.length > maxLength) {
        return body.substring(0, maxLength - 3) + "...";
      } else if (body.length === 0) {
        return "New note";
      } else {
        return body;
      }
    },
    formatTimestamp: function(timestamp) {
      return new Date(timestamp).toUTCString();
    }
  },
  methods: {
    selectNote: function(note) {
      this.selectedNote = note;
    },
    createNote: function() {
      var newNote = {
        id: Date.now(),
        body: "",
        timestamp: Date.now()
      };
      this.notes.push(newNote);
      this.selectedNote = newNote;
    }
  },
  watch: {
    notes: {
      handler: function() {
        this.selectedNote.timestamp = Date.now();
      },
      deep: true
    }
  }
});
