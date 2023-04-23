const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const taskList = require('../db/db.json')


// GET Route for retrieving all the notes
router.get('/', (req, res) => {
    // Send a message to the client
    res.status(200).json((taskList));
});




module.exports = router;