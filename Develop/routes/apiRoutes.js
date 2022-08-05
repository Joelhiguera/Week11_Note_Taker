const router = require("express").Router()
const { notes } = require("../db/note.json")
const { v4:uuidv4 } = require("uuid");
const { newNote } = require("../lib/notes");



router.get('/notes', (req, res)=> {
  let saved = notes
  res.json(saved)
});



router.post('/api/notes', (req, res) =>{
  req.body.id = uuidv4()
  res.json(newNote(req.body, notes))
  
})

module.exports = router