const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
let savedNotes = require('../../db/db.json');
const fs = require('fs');

//get route to read db.json
router.get("/notes", (req, res) => {
    res.json(savedNotes);
});

//post route should  to save on the body,
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    //give unique id
    const id = uuidv4();
    const newNote = { title, text, id };
    console.log(newNote);   
   

    savedNotes.push(newNote);
 
    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
    res.json(newNote);   
});

// delete route
router.delete('/notes/:id', (req, res) => {
    console.log("response")
    //get id of note to remove
    const deleteID = req.params.id;

    //filter out other notes
    reArray = savedNotes.filter((otherNotes) => otherNotes.id !== deleteID);
    savedNotes = reArray;
    
    //write new data back to db.json
    fs.writeFile('./db/db.json', JSON.stringify(reArray), err => {
        if (err) {
            console.error(err);
        } else {
            console.log('Note deleted');
            res.send("Note deleted");
        }
    });
      
})

module.exports = router;