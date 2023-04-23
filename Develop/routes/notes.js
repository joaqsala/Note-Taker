const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const taskList = require('../db/db.json');
const readAndAppend = require('../helpers/fsUtils');


// GET Route for retrieving all the notes
router.get('/', (req, res) => {
    // Send a message to the client
    res.status(200).json((taskList));
});


// POST Route for adding a note
router.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
        const newNote = {
        title,
        text,
        note_id: uuidv4(),
    };

    readAndAppend(newNote);

    const response = {
        status: 'success',
        body: newNote,
    };

    } else {
        res.json('Error in posting note');
    }
});



module.exports = router;