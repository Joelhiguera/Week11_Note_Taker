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



function deletedNote(id, notesArray) {
  for(i = 0; i < notesArray.length; i++){
    if (id === notesArray[i].id){
      notesArray.splice(i, 1)
      fs.writeFileSync(
        path.join(__dirname, "../db/note.json"),
        JSON.stringify({notes: notesArray}, null, 2)
      ) 
    }
  }

 
  
}

module.exports = { newNote, deletedNote }


