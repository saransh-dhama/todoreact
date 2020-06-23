const express = require('express');
const { body } = require('express-validator');

const { validateResult } = require('../../middlewares/validateResult');
const { verifyUser } = require('../../middlewares/verifyUser');
const TodoItem = require('../../models/TodoItem');

const router = express.Router();

router.post(
	'/api/todo',
	[body('task').notEmpty().withMessage('Task must be provided.')],
	verifyUser,
	validateResult,
	async (req, res) => {
		const { currentUser } = req;
		const { task } = req.body;

		const todo = new TodoItem({
			task,
			userId: currentUser.id,
		});

		try {
			await todo.saveToDatabase();
			res.status(201).send(todo);
		} catch (err) {
			return res.status(500).send({ message: 'Todo item could not be saved.' });
		}
	}
);

exports.newTodoRouter = router;
