const express = require('express');

const { verifyUser } = require('../../middlewares/verifyUser');

const router = express.Router();

router.delete('/api/todo/:id', verifyUser, async (req, res) => {
	const { currentUser } = req;
	const todoId = req.params.id;
	const { task, status } = req.body;

	console.log('deleting todo...');

	// find the todo with that id

	// check user id against currentUser.id
	// delete or throw error

	res.status(201).send({ task, status });
});

exports.deleteTodoRouter = router;
