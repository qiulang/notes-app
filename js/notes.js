var app = new Vue({
  el: "#app",
  data: {
    notes: [
      { id: 1, body: "This is a first test", timestamp: Date.now() },
      { id: 2, body: "This is a second test", timestamp: Date.now() },
      { id: 3, body: "This is a third test", timestamp: Date.now() }
    ]
  }
});
