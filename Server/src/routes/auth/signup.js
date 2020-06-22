const express = require('express');
const { body } = require('express-validator');

const knex = require('../../../knexClient');
const { validateResult } = require('../../middlewares/validateResult');
const { PasswordHandler } = require('../../services/PasswordHandler');
const { JWTHandler } = require('../../services/JWTHandler');

const router = express.Router();

let user;

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

		user = {
			userId: Date.now().toString(),
			email,
			password: await PasswordHandler.toHash(password),
			name,
			is18OrOlder,
		};

		try {
			await knex('users').insert(user);
			const token = JWTHandler.generatejwt({
				id: user.id,
				name: user.name,
			});

			req.session = { jwt: token };

			res.status(201).send({ jwt: token });
		} catch (err) {
			res.send(500).send({ message: 'User could not be signed up right now.' });
		}
	}
);

exports.signUpUserRouter = router;
