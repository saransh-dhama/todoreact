const express = require('express');

const { verifyUser } = require('../../middlewares/verifyUser');
const TodoItem = require('../../models/TodoItem');

const router = express.Router();

router.get('/api/todo', verifyUser, async (req, res) => {
	const { currentUser } = req;

	const todos = await TodoItem.fetchTasksByUserId(currentUser.id);

	res.send({ todos });
});

exports.listAllTodoRouter = router;
