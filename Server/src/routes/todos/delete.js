const express = require('express');

const { verifyUser } = require('../../middlewares/verifyUser');
const TodoItem = require('../../models/TodoItem');

const router = express.Router();

router.delete('/api/todo/:id', verifyUser, async (req, res) => {
	const { currentUser } = req;
	const taskId = req.params.id;

	// find the todo with that id
	const todoItem = await TodoItem.fetchTaskById(taskId);

	if (!todoItem)
		return res.status(404).send({ message: 'No task exists with that id.' });

	// check user id against currentUser.id
	if (todoItem.userId !== currentUser.id)
		return res.status(401).send({
			message: 'You are not authorized to delete this task.',
		});

	// delete task from database
	await TodoItem.deleteTaskById(taskId);

	res.send({});
});

exports.deleteTodoRouter = router;
