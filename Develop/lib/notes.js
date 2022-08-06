const { json } = require('express');
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


// read all the notes from the note.json file
// remove the note with the given id property
// rewrite notes to the note.json
function deletedNote(id) {
  let id = 
  fs.readFileSync(
    path.join(__dirname, "../db/note.json"),
    console.log(id)
    
  )
}

module.exports = { newNote }
module.exports = { deletedNote }

