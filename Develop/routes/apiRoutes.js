const router = require("express").Router()
const { notes } = require("../db/note.json")

const { v4:uuidv4 } = require("uuid");
const { newNote } = require("../lib/notes");
// const { deletedNote } = require("../lib/notes");




router.get('/notes', (req, res)=> {
  let saved = notes
  res.json(saved)
});



router.post('/notes', (req, res) =>{
  req.body.id = uuidv4()
  res.json(newNote(req.body, notes))
  
})

//Need to find the correct way to delete the note from the click of the button
//its not .destroy becuase this has a fake database
//so do i call the function within the router.delete?
router.delete('/notes/:id', (req, res) => {
  let deleted = req.params.id
  console.log(deleted)
  res.json(deleted)  
})

module.exports = router