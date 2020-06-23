const express = require('express');
const { body } = require('express-validator');

const { validateResult } = require('../../middlewares/validateResult');
const { verifyUser } = require('../../middlewares/verifyUser');
const TodoItem = require('../../models/TodoItem');

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
		const taskId = req.params.id;
		const { task, status } = req.body;

		// find the todo with that id
		const updated = await TodoItem.updateTaskithId({
			taskId,
			userId: currentUser.id,
			task,
			status,
		});

		// update it in the db
		if (updated) return res.send({});
		res.status(500).send({ message: 'No tasks were updated.' });
	}
);

exports.updateTodoRouter = router;
