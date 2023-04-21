const express = require('express');
const path = require('path');
const taskList = require('./Develop/db/db.json')

const PORT = process.env.port || 3003;

const app = express();

//Middleware for express to retrieve posted data and handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})


