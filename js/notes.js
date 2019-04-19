var app = new Vue({
  el: "#app",
  data: {
    notes: [
      { id: 1, body: "This is a first test", timestamp: Date.now() },
      { id: 2, body: "This is a second test", timestamp: Date.now() },
      { id: 3, body: "This is a third test", timestamp: Date.now() }
    ]
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
  methods: {}
});
