const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const readAndAppend = require('../helpers/fsUtils');
const fs = require('fs')
const path = require('path')


// GET Route for retrieving all the notes
router.get('/', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname,'../db/db.json'))
    const  taskList = JSON.parse(data)
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
    console.log(response);
    res.json((response));

    } else {
        res.json('Error in posting note');
    }
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
    console.log(response);
    res.json((response));

    } else {
        res.json('Error in posting note');
    }
});


// POST Route for adding a note
router.delete('/:id', (req, res) => {
    for 
    if (req.body && req.params.review_id) {
        console.info(`${req.method} request received to upvote a review`);
        const reviewId = req.params.review_id;
        for (let i = 0; i < reviews.length; i++) {
          const currentReview = reviews[i];
          if (currentReview.review_id === reviewId) {
            currentReview.upvotes += 1;
            res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
            return;
          }
        }
        res.status(404).json('Review ID not found');
      }
    });


module.exports = router;