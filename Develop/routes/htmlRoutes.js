const path = require("path")
const router = require("express").Router()

router.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

// get request for /notes will render out notes.html
router.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Fallback route for when a user attempts to visit routes that don't exist
router.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router