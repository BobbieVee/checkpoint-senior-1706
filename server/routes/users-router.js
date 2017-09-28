import express from 'express';
import db from '../models';
const User = db.model('user');
const Message = db.model('message');
const router = express.Router();

router.get('/', (req, res, next) => {
	User.findAll()
	.then(users => res.send(users));
});

router.put('/:id', (req, res, next) => {
	User.update(req.body, {where: {id: req.params.id}})
	.then(user => res.status(201).send(user));
})


export default router;