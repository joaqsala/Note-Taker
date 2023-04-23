const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');


// GET Route for retrieving all the notes
router.get('/', (req, res) =>
    readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)))
);





module.exports = router;