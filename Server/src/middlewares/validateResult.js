const { validationResult } = require('express-validator');

const validateResult = async (req, res, next) => {
	// validate the request
	console.log('request was validated');

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).send(errors.array());
	}

	next();
};

module.exports = { validateResult };
