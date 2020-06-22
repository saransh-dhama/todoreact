const express = require('express');
const { body } = require('express-validator');

const { validateResult } = require('../../middlewares/validateResult');
const { verifyUser } = require('../../middlewares/verifyUser');

const router = express.Router();

router.post(
	'/api/todo',
	[body('task').notEmpty().withMessage('Task must be provided.')],
	verifyUser,
	validateResult,
	async (req, res) => {
		const { currentUser } = req;
		const { task } = req.body;

		console.log(task);

		const todo = {
			id: 1,
			task,
			status: 'active',
			userId: currentUser.id,
			createdAt: new Date().toISOString(),
		};

		res.status(201).send(todo);
	}
);

exports.newTodoRouter = router;
