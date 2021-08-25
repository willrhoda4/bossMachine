const express = require('express');
const meetingsRouter = express.Router();
const {
    getAllFromDatabase,
    createMeeting,
    addToDatabase,
    deleteAllFromDatabase
} = require('./db');


meetingsRouter.get('/', (req, res, next) => {
    res.status(200).send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
});

meetingsRouter.delete('/:me', (req, res, next) => {
   deleteAllFromDatabase('meetings');
   res.status(204).send();
});

module.exports = meetingsRouter;