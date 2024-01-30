const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();


router.get('/add', (req, res) => {

    res.render('addNote');
});

router.get('/note', (req, res) => {
    const jsonData = {
        auth: { name: "test", password: "test" },
        note: { text: "aa", command: "aaa" }
    };
    res.render('note', { note: jsonData});
});


router.post('/add', noteController.addNote);
router.get('/readFile:query', noteController.readFile);

router.get('/readFile', (req, res) => {
    res.render('readfile'); 
});

router.get('/deleteFile', noteController.deleteFile);
router.get('/deleteFile', (req, res) => {
    res.render('delete'); 
});

module.exports = router;
