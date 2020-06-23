const express = require('express');
const { body } = require('express-validator');

const knex = require('../../../knexClient');
const { validateResult } = require('../../middlewares/validateResult');
const { PasswordHandler } = require('../../services/PasswordHandler');
const { JWTHandler } = require('../../services/JWTHandler');
const User = require('../../models/User');

const router = express.Router();

router.post(
	'/api/user/signin',
	[
		body('email').isEmail().withMessage('Email must be provided.'),
		body('password').notEmpty().withMessage('Password must be provided.'),
	],
	validateResult,
	async (req, res) => {
		const { email, password } = req.body;
		// fetch the user from the database
		const [user] = await knex.from('users').where('email', email);

		if (!user)
			return res
				.status(400)
				.json({ message: 'No user exists with that email.' });

		// call the PasswordHandler to compare the passwords together
		const passwordsMatch = await PasswordHandler.compare(
			user.password,
			password
		);

		if (!passwordsMatch)
			return res.status(401).send({ message: 'Password is incorrect.' });

		const token = User.generateUserToken(user);

		// req.session = { jwt: token };

		res.send({ jwt: token });
	}
);

exports.signInUserRouter = router;
