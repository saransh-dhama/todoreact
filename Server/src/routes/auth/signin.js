const express = require('express');
const { body } = require('express-validator');

const { validateResult } = require('../../middlewares/validateResult');
const { PasswordHandler } = require('../../services/PasswordHandler');

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
		// and call the PasswordHandler to compare the passwords together
		const passwordsMatch = await PasswordHandler.compare(
			'12705d75dc5339d9af2bc1d91b2e1fcc0a35d40f5609f12e0494ced96892bba3688af19fac8822fa572ca6ef32bf9d3fa28850aedba4105ae6c22c19a29f97dc.2b2e3f9d2cf17514',
			'password'
		);

		if (!passwordsMatch)
			return res.status(401).send({ message: 'Wrong credentials.' });

		res.send({});
	}
);

exports.signInUserRouter = router;
