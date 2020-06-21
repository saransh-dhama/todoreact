const express = require('express');
const { body } = require('express-validator');

const { validateResult } = require('../../middlewares/errorHandler');

const router = express.Router();

let user;

router.post(
	'/api/users',
	[
		body('age')
			.isInt({ min: 18 })
			.withMessage('You must be at least 18 to use this app.'),
		body('email')
			.isEmail()
			.withMessage('Please provide a valid email address.'),
		body('password')
			.trim()
			.isLength({ min: 8, max: 16 })
			.withMessage('Password must be between 8 and 16 characters long'),
		body('name').notEmpty().withMessage('Name must be provided.'),
	],
	validateResult,
	async (req, res) => {
		// create user logic
		const { email, password, name, age } = req.body;

		res.send({ here: 'wecare' });
	}
);

exports.createUserRouter = router;
