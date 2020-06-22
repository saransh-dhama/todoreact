const express = require('express');
const { body } = require('express-validator');

const { validateResult } = require('../../middlewares/validateResult');
const { verifyUser } = require('../../middlewares/verifyUser');

const router = express.Router();

router.put(
	'/api/todo/:id',
	[
		body('task').notEmpty().withMessage('Task must be provided.'),
		body('status')
			.custom((value) => ['active', 'done'].includes(value))
			.withMessage('Status can be either active or done.'),
	],
	verifyUser,
	validateResult,
	async (req, res) => {
		const { currentUser } = req;
		const todoId = req.params.id;
		const { task, status } = req.body;

		console.log(currentUser, task);

		// find the todo with that id

		// update it in the db

		res.status(201).send({ task, status });
	}
);

exports.updateTodoRouter = router;
