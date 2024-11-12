const router = require('express').Router();

// Home Page - http://localhost:8080/
router.get('/', (req, res) => {
    res.send('Welcome to Contacts!');
});

// Contacts Page(s) - http://localhost:8080/contacts
router.use('/contacts', require('./contacts'));

module.exports = router;