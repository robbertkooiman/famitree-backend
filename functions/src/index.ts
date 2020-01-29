import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from "body-parser";

import Person from './person';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const app = express();
const main = express();
const personsCollection = 'persons';
main.use('/api', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export const webApi = functions.https.onRequest(main);

// Add new person
app.post('/persons', async (req, res) => {
    try {
        const person: Person = {
            firstName: req.body['firstName'],
            lastName: req.body['lastName'],
            birthDate: req.body['birthDate'],
            deathDate: req.body['deathDate'],
            status: req.body['status'],
        }
        const newDoc = await firebaseHelper.firestore
            .createNewDocument(db, personsCollection, person);
        res.status(201).send(`Created a new person: ${newDoc.id}`);
    } catch (error) {
        res.status(400).send(`Something went wrong!`)
    }
})
// Update new person
app.patch('/persons/:personId', async (req, res) => {
    const updatedDoc = await firebaseHelper.firestore
        .updateDocument(db, personsCollection, req.params.personId, req.body);
    res.status(204).send(`Update a new person: ${updatedDoc}`);
})
// View a person
app.get('/persons/:personId', (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, personsCollection, req.params.personId)
        .then(doc => res.status(200).send(doc))
        .catch(error => res.status(400).send(`Cannot get person: ${error}`));
})
// View all persons
app.get('/persons', (req, res) => {
    firebaseHelper.firestore
        .backup(db, personsCollection)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(`Cannot get persons: ${error}`));
})
// Delete a person 
app.delete('/persons/:personId', async (req, res) => {
    const deletedperson = await firebaseHelper.firestore
        .deleteDocument(db, personsCollection, req.params.personId);
    res.status(204).send(`person is deleted: ${deletedperson}`);
})