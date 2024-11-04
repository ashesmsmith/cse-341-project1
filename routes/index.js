const router = require('express').Router();

// Home Page
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Users Page
router.use('/contacts', require('./contacts'));

module.exports = router;