export function formatTitle(body) {
  var maxLength = 20;
  if (body.length > maxLength) {
    return body.substring(0, maxLength - 3) + "...";
  } else if (body.length === 0) {
    return "New note";
  } else {
    return body;
  }
}

export function formatTimestamp(timestamp) {
  return new Date(timestamp).toUTCString();
}

export function transformNotes(notes) {
  return notes.slice().sort((a, b) => b.timestamp - a.timestamp);
}
