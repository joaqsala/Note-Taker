const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const readAndAppend = require('../helpers/fsUtils');
const fs = require('fs')
const path = require('path')


// GET Route for retrieving all the notes
router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err;
        const notesList = JSON.parse(data)
        console.log(notesList)
        // Send a message to the client
        res.status(200).json((notesList));
    });
});

// GET Route for retrieving a specific note when clicked on
router.get('/:id', (req, res) => {
    const selectID = req.params.id;
    fs.readFile(path.join(__dirname,'../db/db.json'), (err, data) => {
        if (err) {
            throw err;
        } else {
            const response = JSON.parse(data);
            const note = response.find(item => item.id === selectID);
            if (note){
                res.send(note);
            } else {
                res.status(404).send('Note not found')
            }
        }
    });
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
        id: uuidv4(),
    };

    readAndAppend(newNote);

    const response = {
        status: 'success',
        body: newNote,
    };
    console.log(response);
    res.json((response));

    } else {
        res.json('Error in posting note');
    }
});

// deleting a specific note when clicked on
router.delete('/:id', (req, res) => {
    const deleteID = req.params.id;
    fs.readFile(path.join(__dirname,'../db/db.json'), (err, data) => {
        if (err) {
            throw err;
        } else {
            const response = JSON.parse(data);
            const result = response.filter(item => item.id !== deleteID);
            if (result){
                fs.writeFile(
                    './db/db.json', JSON.stringify(result, null, 4), (writeErr) =>
                        writeErr
                        ? console.error(writeErr)
                        : console.info('Successfully deleted note!')
                    );
                res.send(result);
            } else {
                res.status(404).send('Note not found')
            }
        }
    });
});
// // POST Route for deleting a note
// router.delete('/:id', (req, res) => {
//     const deleteNoteID = req.params.id;
//     const data = fs.readFileSync(path.join(__dirname, '../db/db.json'));
//     const notes = JSON.parse(data);

//     for (let i = 0; i < notes.length; i++) {
//         if(notes[i].note_id === deleteNoteID) {
//             notes.splice(i, 1);
//             fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
//             return res.status(200).send('Note deleted')
//         }
//     }
//     res.status(404).json('Note ID not found');
//     }
// );


module.exports = router;