const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const db = require('./db/db.json')

const uuid = require('./helpers/uuid');

const PORT = 1337;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// get request for /notes will render out notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};



app.get('/api/notes', (req, res)=>{
  res.status(200).json(db)
});



app.post('/api/notes', (req, res) =>{
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  return res.json(reviews);
})







// listens for connection on port 1337
app.listen(PORT)