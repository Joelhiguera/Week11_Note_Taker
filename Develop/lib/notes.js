const fs = require('fs');
const path = require('path');

function newNote(body, notesArray) {
  const note = body
  notesArray.push(note)
  fs.writeFileSync(
    path.join(__dirname, "../db/note.json"),
    JSON.stringify(
      {
        notes: notesArray,
      },
      null,
      2
    )
  );
    return note;
} 

module.exports = { newNote }