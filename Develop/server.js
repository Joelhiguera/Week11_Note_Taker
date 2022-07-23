// allows me to use express library
const express = require('express');

//allows me to work with file and directory paths within node
const path = require('path');

const db = require('./db/db.json')
// app.use(express.urlencoded({ extended: true }));

// Executes express
const app = express();


app.use(express.json());

// Port where website will be hosted
const PORT = 1337;

// Allows me to render the contents within the public folder onto the website
app.use(express.static('public'));

app.get('/api/notes', (req, res)=>{
  res.status(200).json(db)
});

app.post('/api/notes', (req, res) =>{
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  return res.json(reviews);
})


// get request for /notes will render out notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);


// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);


// listens for connection on port 1337
app.listen(PORT)