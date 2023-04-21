const express = require('express');
const path = require('path');
const taskList = require('./Develop/db/db.json')

const PORT = process.env.port || 3001;

const app = express();

//Middleware to retrieve posted data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})


