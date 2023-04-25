const fs = require('fs');

const readAndAppend = (newNote) => {
fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
      // Convert string into JSON object
        const parsedNotes = JSON.parse(data);

      // Add a new note
        parsedNotes.push(newNote);

      // Write updated notes back to the file
        fs.writeFile(
        './db/db.json', JSON.stringify(parsedNotes, null, 4), (writeErr) =>
            writeErr
            ? console.error(writeErr)
            : console.info('Successfully updated note!')
        );
    }
    });
};

module.exports = readAndAppend;
