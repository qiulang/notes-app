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

function domCreateNoteSelector(note, selectedNote) {
  var $noteSelector = $(
    '<div class="note-selector' +
      (note === selectedNote ? " active" : "") +
      '">' +
      '<p class="note-selector-title">' +
      formatTitle(note.body) +
      "</p>" +
      '<p class="note-selector-timestamp">' +
      formatTimestamp(note.timestamp) +
      "</p>" +
      "</div>"
  );
  $noteSelector.data(note);
  return $noteSelector;
}

function domCreateNoteSelectors(notes, selectedNote) {
  transformNotes(notes).forEach(function(note) {
    var $noteSelector = domCreateNoteSelector(note, selectedNote);
    $noteSelector.data(note);
    $(".note-selectors").append($noteSelector);
  });
}

function domUpdateNoteEditor(selectedNote) {
  $(".note-editor-info").html(formatTimestamp(selectedNote.timestamp));
  $(".note-editor-input").val(selectedNote.body);
}

$(".note-selectors").on("click", ".note-selector", function() {
  $(".note-selector").removeClass("active");
  $(this).addClass("active");
  domUpdateNoteEditor($(this).data());
});

$(".note-editor-input").on("input property change", function(event) {
  // Update the note data
  var body = $(this).val();
  console.log(body);
  var timestamp = Date.now();
  $(".note-selector.active").data("body", body);
  $(".note-selector.active").data("timestamp", timestamp);
  // Update the DOM note editor timestamp
  $(".note-editor-info").html(formatTimestamp(timestamp));
  // Update the DOM currently selected note selector
  $(".note-selector.active .note-selector-title").html(formatTitle(body));
  $(".note-selector.active .note-selector-timestamp").html(
    formatTimestamp(timestamp)
  );
  // Update the DOM note selectors sorting order
  var $active = $(".note-selector.active").detach();
  $(".note-selectors").prepend($active);
});

$(".toolbar-button-new").on("click", function() {
  $(".note-selector").removeClass("active");
  var note = {
    id: Date.now(),
    body: "",
    timestamp: Date.now()
  };
  var $noteSelector = domCreateNoteSelector(note, note);
  $(".note-selectors").prepend($noteSelector);
  domUpdateNoteEditor(note);
});

var notes = [
  { id: 1, body: "This is a first test", timestamp: Date.now() },
  { id: 2, body: "This is a second test", timestamp: Date.now() },
  { id: 3, body: "This is a third test", timestamp: Date.now() }
];
var selectedNote = notes[0];
domCreateNoteSelectors(notes, selectedNote);
domUpdateNoteEditor(selectedNote);
