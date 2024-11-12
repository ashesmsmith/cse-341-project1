const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// Display All Contacts
const getAll = async (req, res) => {
    // swagger.tags = ['Contacts']
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

// Display Single Contact By Id
const getSingle = async (req, res) => {
    // swagger.tags = ['Contacts']
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]); // returns only the first user in the array
    });
};

// Create New Contact
const createContact = async (req, res) => {
    // swagger.tags = ['Contacts']
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('contacts').insertOne(contact);

    if (response.acknowledged) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error) || 'An error occurred while adding the contact.'
    }
};

// Update Existing Contact
const updateContact = async (req, res) => {
    // swagger.tags = ['Contacts']
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({_id: contactId}, contact);

    if (response.modifiedCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error) || 'An error occurred while updating the contact.'
    }
};

// Delete Single Contact By Id
const deleteContact = async (req, res) => {
    // swagger.tags = ['Contacts']
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id: contactId});

    if (response.deletedCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error) || 'An error occurred while deleting the contact.'
    }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };