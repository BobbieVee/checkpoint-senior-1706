import express from 'express';
import db from '../models';
const Message = db.model('message');
const User = db.model('user');

const router = express.Router();

router.get('/to/:id', (req, res, next) => {
	Message.getAllTo(req.params.id)
	.then(messages => res.send(messages));
});

router.get('/from/:id', (req, res, next) => {
	Message.getAllWhereSender(req.params.id)
	.then(messages => res.send(messages));
});

router.post('/', (req, res, next) => {
	Message.create(req.body)
	.then(message => res.status(201).send(message));
})


export default router;