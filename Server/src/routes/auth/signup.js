const express = require('express');
const { body } = require('express-validator');

const knex = require('../../../knexClient');
const { validateResult } = require('../../middlewares/validateResult');
const { PasswordHandler } = require('../../services/PasswordHandler');
const { JWTHandler } = require('../../services/JWTHandler');
const User = require('../../models/User');

const router = express.Router();

router.post(
	'/api/user/signup',
	[
		body('is18OrOlder')
			.equals('true')
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
		const { email, password, name, is18OrOlder } = req.body;

		const user = await User.build({
			email,
			password,
			name,
			is18OrOlder,
		});

		try {
			await user.saveToDatabase();
			const token = User.generateUserToken(user);

			// req.session = { jwt: token };

			res.status(201).send({ jwt: token });
		} catch (err) {
			console.log(err);
			res.send(500).send({ message: 'User could not be signed up right now.' });
		}
	}
);

exports.signUpUserRouter = router;
