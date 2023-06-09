const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3003;

const app = express();

//Middleware for express to retrieve posted data and handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

//publish contents of the static folder
app.use(express.static('public'))

// GET Route for homepage
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);


app.listen(PORT, () => 
    console.log(`Listening on port ${PORT}.`)
)


