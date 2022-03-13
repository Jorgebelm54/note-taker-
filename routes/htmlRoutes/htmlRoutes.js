const router = require('express').Router();
const path = require('path');
//html routes



//notes sreturn the notes.html
router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));

});

//GET return the index.html
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router;