const router = require('express').Router();

// Swagger
router.use('/', require('./swagger'));

// Home Page - http://localhost:8080/
router.get('/', (req, res) => {
    // swagger.tags = ['Hello World']
    res.send('Welcome to Contacts!');
});

// Contacts Page(s) - http://localhost:8080/contacts
router.use('/contacts', require('./contacts'));

module.exports = router;