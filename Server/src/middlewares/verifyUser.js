const { JWTHandler } = require('../services/JWTHandler');

const verifyUser = async (req, res, next) => {
	// look for the cookie containing the jwt
	// and verify it
	if (!req.session)
		return res.status(401).send({ message: 'You must first sign in.' });

	const { jwt } = req.session;
	const payload = JWTHandler.verifyjwt(jwt);

	if (!payload) return res.status(401).send('You must first sign in.');

	req.currentUser = payload;

	next();
};

module.exports = { verifyUser };
