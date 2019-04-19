var notes = [
  { id: 1, body: "This is a first test", timestamp: Date.now() },
  { id: 2, body: "This is a second test", timestamp: Date.now() },
  { id: 3, body: "This is a third test", timestamp: Date.now() }
];

transformNotes(notes).forEach(function(note) {
  $(".note-selectors").append(
    '<div class="note-selector">' +
      '<p class="note-selector-title">' +
      formatTitle(note.body) +
      "</p>" +
      '<p class="note-selector-timestamp">' +
      formatTimestamp(note.timestamp) +
      "</p>" +
      "</div>"
  );
});

function transformNotes(notes) {
  return notes.slice().sort(function(a, b) {
    return b.timestamp - a.timestamp;
  });
}

function formatTitle(body) {
  var maxLength = 20;
  if (body.length > maxLength) {
    return body.substring(0, maxLength - 3) + "...";
  } else if (body.length === 0) {
    return "New note";
  } else {
    return body;
  }
}

function formatTimestamp(timestamp) {
  return new Date(timestamp).toUTCString();
}
