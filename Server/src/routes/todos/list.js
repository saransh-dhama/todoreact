const express = require('express');

const { verifyUser } = require('../../middlewares/verifyUser');

const router = express.Router();

router.get('/api/todo', verifyUser, async (req, res) => {
	const { currentUser } = req;

	console.log('fetch todos');
	// fetch all todos for the user id

	res.send({ todos: [] });
});

exports.listAllTodoRouter = router;
