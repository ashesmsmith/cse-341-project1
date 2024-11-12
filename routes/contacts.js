const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// Display all or single contact(s)
router.get('/', contactsController.getAll); // http://localhost:8080/contacts
router.get('/:id', contactsController.getSingle); // http://localhost:8080/contacts/:id

// Create a new contact
router.post('/', contactsController.createContact);

// Update existing contact
router.put('/:id', contactsController.updateContact);

// Delete a single contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;